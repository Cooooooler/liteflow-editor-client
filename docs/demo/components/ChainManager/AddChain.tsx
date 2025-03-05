import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Select, Tooltip } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';
import request from 'umi-request';
import './index.less';

export type Chain = {
  id: number;
  chainDesc: string;
  chainId: string;
  elJson: any;
};

interface IProps {
  value?: Chain;
  onChange: (newChain?: Chain) => void;
  disabled?: boolean;
  chains: Array<{
    id: number;
    chainDesc: string;
    chainId: string;
    elJson: any;
  }>;
}

const ChainSettings: React.FC<IProps> = ({
  value = {},
  onChange,
  chains,
  disabled,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
    form.resetFields();
  };

  const handleOk = async () => {
    try {
      const { chainId, elTemplateId } = await form.validateFields();
      const elJson = await request(
        `/api/getChainById?chainId=${elTemplateId}`,
        { method: 'GET' },
      ).then((data) => (data?.elJson ? data.elJson : {}));
      // onChange({ chainId, elJson });
      setIsModalOpen(false);
    } catch (errorInfo) {}
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEmptyCanvas = () => {
    setIsModalOpen(false);
    onChange(undefined);
  };

  return (
    <React.Fragment>
      <Tooltip title="新增" placement="bottom">
        <Button
          type="primary"
          onClick={showModal}
          className="chain-manager-add-btn"
          disabled={disabled}
        >
          <PlusOutlined /> 新增
        </Button>
      </Tooltip>
      <Modal
        title="新增Chain"
        className={classNames('chain-manager-settings-modal')}
        width={900}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="emptyCanvas" onClick={handleEmptyCanvas}>
            创建空白画布
          </Button>,
          <Button type="primary" key="save" onClick={handleOk}>
            保存
          </Button>,
        ]}
      >
        <div>
          <Form
            layout="horizontal"
            form={form}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            initialValues={value}
          >
            <Form.Item
              name="chainId"
              label="chainId"
              rules={[{ required: true, message: '请输入Chain ID' }]}
            >
              <Input placeholder="请输入Chain ID" allowClear />
            </Form.Item>
            <Form.Item
              name="elTemplateId"
              label="chainTemplate"
              rules={[{ required: true, message: '请选择Chain模板' }]}
            >
              <Select
                placeholder="请选择Chain模板"
                style={{ width: '100%' }}
                options={chains.map(({ chainId }: Chain) => ({
                  label: chainId,
                  value: chainId,
                }))}
              />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default ChainSettings;
