import FormRender, { Schema, useForm } from 'form-render';
import React, { useEffect } from 'react';
import { history } from '../../../hooks/useHistory';
import ELNode from '../../../model/node';
import styles from './index.module.less';

interface IProps {
  model: ELNode;
}

type FormValuesType = {
  id: string;
  data: string;
  tag: string;
  maxWaitSeconds: string;
};

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

  const schema: Schema = {
    type: 'object',
    properties: {
      id: {
        title: 'ID',
        type: 'string',
        widget: 'input',
        required: true,
      },
      data: {
        title: '参数（data）',
        type: 'string',
        widget: 'input',
      },
      tag: {
        title: '标签（tag）',
        type: 'string',
        widget: 'input',
      },
      maxWaitSeconds: {
        title: '超时（maxWaitSeconds）',
        type: 'string',
        widget: 'input',
      },
    },
  };

  // const handleOnChange = debounce(async () => {
  //   try {
  //     const changedValues = await form.validateFields();
  //     const { id, config, ...rest } = changedValues;
  //     const { highlight = false } = handleConfig(config);
  //
  //     model.id = id;
  //     model.highlight = highlight;
  //     model.setProperties({ ...properties, ...rest });
  //     history.push(undefined, { silent: true });
  //     // history.push();
  //     // 以下是对AntV X6视图层进行临时修改
  //     const modelNode = model.getStartNode();
  //     const originSize = modelNode.getSize();
  //     const body = modelNode.getAttrs()?.body;
  //     modelNode
  //       .updateAttrs({ label: { text: id }, body: { ...body, highlight } })
  //       .setSize(originSize); // 解决由于文本修改导致的尺寸错误
  //   } catch (errorInfo) {
  //     console.log('Failed:', errorInfo);
  //   }
  // }, 200);
  const form = useForm();

  const onFinish = (formData: FormValuesType) => {
    console.log('formData:', formData);
    const { id, ...rest } = formData;
    model.id = id;
    model.setProperties({ ...properties, ...rest });
    history.push(undefined, { silent: true });
    // history.push();
    // 以下是对AntV X6视图层进行临时修改
    const modelNode = model.getStartNode();
    const originSize = modelNode.getSize();
    modelNode.updateAttrs({ label: { text: id } }).setSize(originSize); // 解决由于文本修改导致的尺寸错误
  };

  useEffect(() => {
    form.setValues({
      ...properties,
      id: model.id,
    });
  }, [model]);

  return (
    <div className={styles.liteflowEditorPropertiesEditorContainer}>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        maxWidth={360}
        footer={true}
      />
    </div>
  );
};

export default ComponentPropertiesEditor;
