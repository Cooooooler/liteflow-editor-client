import { Graph } from '@antv/x6';
import { Tabs } from 'antd';
import React, { useEffect, useReducer, useState } from 'react';
import NodeOperator from '../../model/el/node-operator';
import ELNode from '../../model/node';
import Basic from './basic';
import Outline from './outline';
import {
  ComponentPropertiesEditor,
  ConditionPropertiesEditor,
} from './properties';
import {createStyles} from "../../styles";


interface IProps {
  flowGraph: Graph;
}

const useStyles = createStyles(({token,css})=>{
  return {
    editorSettingBarContainer:css`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      .ant-tabs-nav {
        margin-bottom: 0;
      }
      .ant-tabs-nav-wrap {
        flex: 1;
        justify-content: center;
        align-items: center;
        background-color: ${token.colorBgContainer};
        border-bottom: 1px solid ${token.colorBorder};
      }
    `
  }
})

const SettingBar: React.FC<IProps> = (props) => {
  const { flowGraph } = props;
  const {styles} = useStyles()

  const [selectedModel, setSelectedModel] = useState<ELNode | null>(null);

  const forceUpdate = useReducer((n) => n + 1, 0)[1];

  useEffect(() => {
    const handler = () => {
      setSelectedModel(null);
      forceUpdate();
    };
    const handleSelect = (component: ELNode) => {
      setSelectedModel(component);
    };
    flowGraph.on('settingBar:forceUpdate', handler);
    flowGraph.on('model:select', handleSelect);
    return () => {
      flowGraph.off('settingBar:forceUpdate', handler);
      flowGraph.off('model:select', handleSelect);
    };
  }, [flowGraph]);

  const nodes = flowGraph.getSelectedCells().filter((v) => !v.isEdge());
  let currentModel;
  if (selectedModel || nodes.length === 1) {
    currentModel = selectedModel || nodes[0].getData().model;
    currentModel = currentModel.proxy || currentModel;
  }

  let propertiesPanel = <Basic flowGraph={flowGraph} />;

  if (currentModel?.parent) {
    if (Object.getPrototypeOf(currentModel) === NodeOperator.prototype) {
      propertiesPanel = <ComponentPropertiesEditor model={currentModel} />;
    } else {
      propertiesPanel = <ConditionPropertiesEditor model={currentModel} />;
    }
  }

  return (
    <div className={styles.editorSettingBarContainer}>
      <Tabs
        defaultActiveKey={'properties'}
        items={[
          {
            key: 'properties',
            label: '属性',
            children: propertiesPanel,
          },
          {
            key: 'outline',
            label: '结构树',
            children: <Outline flowGraph={flowGraph} />,
          },
        ]}
      />
    </div>
  );
};

export default SettingBar;
