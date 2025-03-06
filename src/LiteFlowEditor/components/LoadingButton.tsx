import { useRequest } from 'ahooks';
import { Button, ButtonProps } from 'antd';
import React from 'react';

interface LoadingButtonProps extends ButtonProps {
  requestApi: (...args: any[]) => Promise<any>;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  requestApi,
  ...props
}) => {
  const { loading, run } = useRequest(requestApi, {
    manual: true,
  });
  return (
    <Button {...props} loading={loading} onClick={run}>
      {props.children}
    </Button>
  );
};
