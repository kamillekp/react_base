import { useState } from 'react';
import api from '../../Services/api';

const initialRequestInfo = {
  error: null,
  data: null,
  loading: false,
};

export default function useApi(config) {
  const [requestInfo, setRequestInfo] = useState(initialRequestInfo)

  async function call(localConfig) {
    setRequestInfo({
      ...initialRequestInfo,
      loading: true,
    });
    
    let response = null;
    try {
      response = await api({
        ...config,
        ...localConfig,
      });

      setRequestInfo({
        ...initialRequestInfo,
        data: response.data,
      });
    } 
    catch (error) {
      setRequestInfo({
        ...initialRequestInfo,
        error,
      });
    }

    if (config.onCompleted) {
      config.onCompleted(response);
    }
  }

  return [
    call,
    requestInfo
  ]
}