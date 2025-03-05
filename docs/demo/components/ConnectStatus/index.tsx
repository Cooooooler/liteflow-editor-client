import React, { useState, useCallback, useEffect } from 'react';
import { Tag } from 'antd'
import request from 'umi-request';
import './index.less'

enum Status {
  connected = 'success',
  disconnected = 'error',
  pending = 'processing'
}

const ConnectStatus: React.FC = () => {
  const [status, setStatus] = useState<Status>(Status.pending);

  const syncServer = useCallback(() => {
    // return request(`/api/getChainList`, { method: 'GET' })
    // .then((data) => {
    //   if (data && data.length) {
    //     setStatus(Status.connected);
    //   } else {
    //     setStatus(Status.disconnected);
    //   }
    // }).catch(() => {
    //   setStatus(Status.disconnected);
    // })
    return setStatus(Status.disconnected);
  }, [setStatus]);

  useEffect(() => {
    syncServer();
  }, []);

  let tagText = '服务器连接失败';
  if (status === Status.connected) {
    tagText = '服务器连接成功';
  }
  if (status === Status.pending) {
    tagText = '服务器连接中';
  }
  return (
    <span className='connect-status-container'>
      <Tag color={status}>{tagText}</Tag>
    </span>
  )
};

export default ConnectStatus;
