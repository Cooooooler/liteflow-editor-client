import { DeleteOutlined, SaveOutlined } from '@ant-design/icons';
import { useAsyncEffect } from 'ahooks';
import { Button, Modal, Select, Tooltip } from 'antd';
import React, { FC, useCallback, useContext, useState } from 'react';
import request from 'umi-request';
import { GraphContext, useModel } from '../../../../src/index';
import { getChainById, getChainPage, updateChain } from '../../services/api';
import { handleDesc, safeParse, safeStringify } from '../../utils';
import AddChain, { Chain } from './AddChain';
import './index.less';
import { IGraphContext } from 'src/LiteFlowEditor/context/GraphContext';

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

  const { currentEditor } = useContext<IGraphContext>(GraphContext);
  const handleOnChange = async (id: number) => {
    setCurrentChain(chains.find((chain) => chain.id === id));
    const { data } = await getChainById({ id });
    const chainDsl = safeParse(data?.chainDsl);
    currentEditor.fromJSON(chainDsl);
  };

  const handleSave = async () => {
    const res = await updateChain({
      ...currentChain,
      chainDsl: safeStringify(currentEditor.toJSON()),
      elData: useModel().toEL(' '),
    });
    handleDesc(res);
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
        value={currentChain?.id}
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
          disabled={!chains.length || !currentChain?.id}
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
          disabled={!chains.length || !currentChain?.id}
        >
          <DeleteOutlined /> 删除
        </Button>
      </Tooltip>
      <AddChain onChange={handleAddChain} chains={chains} />
    </div>
  );
};

export default ChainManager;
