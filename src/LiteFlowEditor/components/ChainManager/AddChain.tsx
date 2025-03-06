import { PlusOutlined } from '@ant-design/icons';
import { Button, Modal, Tooltip } from 'antd';
import classNames from 'classnames';
import FormRender, { Schema, useForm } from 'form-render';
import React, { useState } from 'react';
import { addChain } from '../../services/api';
import { handleDesc } from '../../utils';
import { LoadingButton } from '../LoadingButton';
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

  const showModal = () => {
    setIsModalOpen(true);
    form.resetFields();
  };

  const form = useForm();

  const schema: Schema = {
    type: 'object',
    properties: {
      chainName: {
        title: '执行链名称',
        type: 'string',
        widget: 'input',
        required: true,
      },
      chainDesc: {
        title: '执行链描述',
        type: 'string',
        widget: 'textArea',
        required: true,
        props: {
          maxLength: 500,
          autoSize: { minRows: 3, maxRows: 6 },
        },
      },
    },
  };

  const handleOk = async () => {
    const { chainName, chainDesc } = await form.validateFields();
    if (chainName && chainDesc) {
      const res = await addChain({
        chainDesc,
        chainName,
      }).catch((e) => {
        console.log(e);
      });
      if (handleDesc(res)) {
        setIsModalOpen(false);
      }
    }
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
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <LoadingButton
            requestApi={handleOk}
            type="primary"
            key="save"
          >
            确定
          </LoadingButton>,
        ]}
      >
        <div>
          <FormRender form={form} schema={schema} footer={false} />
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default ChainSettings;
