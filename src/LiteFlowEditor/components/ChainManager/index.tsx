import { DeleteOutlined, SaveOutlined } from '@ant-design/icons';
import { useAsyncEffect } from 'ahooks';
import { Button, Modal, Select, Tooltip } from 'antd';
import { createStyles } from 'antd-style';
import React, { FC, useCallback, useContext, useState } from 'react';
import { IGraphContext } from 'src/LiteFlowEditor/context/GraphContext';
import { GraphContext, useModel } from '../../../../src/index';
import {
  deleteChain,
  getChainById,
  getChainPage,
  updateChain,
} from '../../services/api';
import { handleDesc, safeParse, safeStringify } from '../../utils';
import { LoadingButton } from '../LoadingButton';
import AddChain, { Chain } from './AddChain';

const useStyles = createStyles(({ token, css }) => {
  return {
    wrapper: css`
      display: flex;
      gap: 8px;
      align-items: center;
    `,
  };
});

const ChainManager: FC = () => {
  const [chains, setChains] = useState<Array<Chain>>([]);
  const [currentChain, setCurrentChain] = useState<Chain>();
  const { styles } = useStyles();

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
      async onOk() {
        const res = await deleteChain({ ids: [currentChain?.id] });
        handleDesc(res);
        setCurrentChain(undefined);
        currentEditor.fromJSON({});
        await getChainList();
      },
    });
  };

  return (
    <div className={styles.wrapper}>
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
      <Tooltip title="保存当前修改">
        <>
          <LoadingButton
            type="primary"
            className="chain-manager-save-btn"
            requestApi={handleSave}
            disabled={!chains.length || !currentChain?.id}
            icon={<SaveOutlined />}
          >
            保存
          </LoadingButton>
        </>
      </Tooltip>
      <Tooltip title="删除当前记录">
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
      <AddChain onChange={getChainList} className="chain-manager-add-btn" />
    </div>
  );
};

export default ChainManager;
