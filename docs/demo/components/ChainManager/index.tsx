import { DeleteOutlined, SaveOutlined } from '@ant-design/icons';
import { useAsyncEffect } from 'ahooks';
import { Button, Modal, Select, Tooltip } from 'antd';
import React, { FC, useCallback, useContext, useState } from 'react';
import request from 'umi-request';
import { GraphContext } from '../../../../src/index';
import { getChainPage } from '../../../../src/LiteFlowEditor/services/api';
import AddChain, { Chain } from './AddChain';
import './index.less';

const ChainManager: FC = () => {
  const [chains, setChains] = useState<Array<Chain>>([]);
  const [currentChain, setCurrentChain] = useState<Chain>();

  const getChainList = useCallback(async () => {
    const {
      data: { data },
    } = await getChainPage();
    if (data && data.length) {
      setChains(data);
    }
  }, [setChains]);

  useAsyncEffect(async () => {
    await getChainList();
  }, []);

  const { currentEditor } = useContext<any>(GraphContext);
  const handleOnChange = (chainId: string) => {
    setCurrentChain(chains.find((chain) => chain.chainId === chainId));
    request(`/api/getChainById?chainId=${chainId}`, { method: 'GET' }).then(
      (data) => {
        if (data?.elJson) {
          currentEditor.fromJSON(data.elJson);
        }
      },
    );
  };

  const handleSave = () => {
    request(`/api/updateChain`, {
      method: 'POST',
      data: { ...currentChain, elJson: currentEditor.toJSON() },
    }).then((data) => {
      if (data.code === 'S') {
        Modal.success({ title: '操作成功', content: data.message });
      } else {
        Modal.error({ title: '操作失败', content: data.message });
      }
    });
  };

  const handleDelete = () => {
    Modal.confirm({
      title: '操作确认',
      content: '请确认是否删除当前记录？',
      onOk() {
        return request(`/api/deleteChain`, {
          method: 'POST',
          data: { ...currentChain },
        }).then((data) => {
          if (data.code === 'S') {
            Modal.success({ title: '操作成功', content: data.message });
            setCurrentChain(undefined);
            setChains(chains.filter((chain) => chain !== currentChain));
          } else {
            Modal.error({ title: '操作失败', content: data.message });
          }
        });
      },
    });
  };

  const handleAddChain = (newChain?: Chain) => {
    if (!newChain) {
      // 创建空白画布
      currentEditor.fromJSON({});
      return;
    }
    currentEditor.fromJSON(newChain.elJson);
    request(`/api/createChain`, {
      method: 'POST',
      data: { ...newChain },
    }).then((data) => {
      if (data.code === 'S') {
        Modal.success({ title: '操作成功', content: data.message });
        setChains([...chains, newChain]);
        setCurrentChain(newChain);
      } else {
        Modal.error({ title: '操作失败', content: data.message });
      }
    });
  };

  return (
    <div className="chain-manager-wrapper">
      <Select
        value={currentChain?.chainId}
        placeholder="请选择接口数据"
        style={{ width: 200 }}
        options={chains.map(({ chainDesc, id }) => ({
          label: chainDesc,
          value: id,
        }))}
        onChange={handleOnChange}
      />
      <Tooltip title="保存当前修改" placement="bottom">
        <Button
          type="primary"
          className="chain-manager-save-btn"
          onClick={handleSave}
          disabled={!chains.length || !currentChain?.chainId}
        >
          <SaveOutlined /> 保存
        </Button>
      </Tooltip>
      <Tooltip title="删除当前记录" placement="bottom">
        <Button
          type="primary"
          danger
          className="chain-manager-delete-btn"
          onClick={handleDelete}
          disabled={!chains.length || !currentChain?.chainId}
        >
          <DeleteOutlined /> 删除
        </Button>
      </Tooltip>
      <AddChain onChange={handleAddChain} chains={chains} />
    </div>
  );
};

export default ChainManager;
