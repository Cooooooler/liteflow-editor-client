import { Checkbox, Form, Input } from 'antd';
import { debounce } from 'lodash';
import React from 'react';
import { history } from '../../../hooks/useHistory';
import ELNode from '../../../model/node';
import styles from './index.module.less';

interface IProps {
  model: ELNode;
}

const handleConfig = (config: string[]) => {
  const obj: Record<string, boolean> = {};
  config.forEach((item) => {
    obj[item] = true;
  });
  return obj;
};

const handleConfigValue = (config: Record<string, boolean>) => {
  const arr: string[] = [];
  Object.keys(config).forEach((key) => {
    if (config[key]) {
      arr.push(key);
    }
  });
  return arr;
};

const ComponentPropertiesEditor: React.FC<IProps> = (props) => {
  const { model } = props;
  const properties = model.getProperties();

  const [form] = Form.useForm();

  const handleOnChange = debounce(async () => {
    try {
      const changedValues = await form.validateFields();
      const { id, config, ...rest } = changedValues;
      const { highlight = false } = handleConfig(config);

      model.id = id;
      model.highlight = highlight;
      model.setProperties({ ...properties, ...rest });
      history.push(undefined, { silent: true });
      // history.push();
      // 以下是对AntV X6视图层进行临时修改
      const modelNode = model.getStartNode();
      const originSize = modelNode.getSize();
      const body = modelNode.getAttrs()?.body;
      modelNode
        .updateAttrs({ label: { text: id }, body: { ...body, highlight } })
        .setSize(originSize); // 解决由于文本修改导致的尺寸错误
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  }, 200);

  const cellOptions = [{ label: 'highlight', value: 'highlight' }];

  return (
    <div className={styles.liteflowEditorPropertiesEditorContainer}>
      <Form
        layout="vertical"
        form={form}
        initialValues={{
          ...properties,
          id: model.id,
          config: handleConfigValue({ highlight: model.highlight ?? false }),
        }}
        onValuesChange={handleOnChange}
        // onBlur={handleOnChange}
      >
        <Form.Item name="id" label="ID">
          <Input allowClear />
        </Form.Item>
        <Form.Item name="data" label="参数（data）">
          <Input allowClear />
        </Form.Item>
        <Form.Item name="tag" label="标签（tag）">
          <Input allowClear />
        </Form.Item>
        <Form.Item name="maxWaitSeconds" label="超时(maxWaitSeconds)">
          <Input allowClear />
        </Form.Item>
        <Form.Item name="config" label="节点配置">
          <Checkbox.Group>
            {cellOptions.map(({ label, value }) => (
              <Checkbox key={value} value={value}>
                {label}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ComponentPropertiesEditor;
