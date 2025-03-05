import requestController from './request_controller';

const getCmpList = async (params?: any) => {
  return await requestController(
    '/lon/api/v2/aiqa/chat/cmpManager/getCmpList',
    {
      method: 'GET',
      params,
    },
  );
};

export default getCmpList;
