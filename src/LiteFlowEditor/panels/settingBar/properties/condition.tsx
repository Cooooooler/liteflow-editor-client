import FormRender, { Schema, useForm } from 'form-render';
import React, { useEffect, useMemo } from 'react';
import { ConditionTypeEnum } from '../../../constant';
import { history } from '../../../hooks/useHistory';
import ELNode from '../../../model/node';
import styles from './index.module.less';

interface IProps {
  model: ELNode;
}

type FormValuesType = {
  any: boolean;
  id: string;
  tag: string;
  maxWaitSeconds: string;
};

const WHEN_ANY_TRUE: boolean = true;
const WHEN_ANY_FALSE: boolean = false;

const ConditionPropertiesEditor: React.FC<IProps> = (props) => {
  const { model } = props;
  const properties = model.getProperties();

  const schema = useMemo<Schema>(
    () => ({
      type: 'object',
      properties: {
        any: {
          title: 'Any（any）',
          type: 'string',
          widget: 'select',
          props: {
            options: [
              { label: '是', value: WHEN_ANY_TRUE },
              { label: '否', value: WHEN_ANY_FALSE },
            ],
          },
          hidden: model.type !== ConditionTypeEnum.WHEN,
        },
        id: {
          title: '唯一标识（id）',
          type: 'string',
          widget: 'input',
          required: true,
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
    }),
    [model],
  );

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

export default ConditionPropertiesEditor;
