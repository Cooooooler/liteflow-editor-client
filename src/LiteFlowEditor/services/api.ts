import requestController from './request_controller';

export const getCmpList =  (params?: any) => {
  return  requestController(
    '/lon/api/v2/aiqa/chat/cmpManager/getCmpList',
    {
      method: 'GET',
      params,
    },
  );
};

export const getChainPage = (data?: any) => {
  return  requestController('/lon/api/v2/aiqa/mgr/liteflowChain/getPage', {
    method: 'POST',
    data: data ?? {},
  });
};
