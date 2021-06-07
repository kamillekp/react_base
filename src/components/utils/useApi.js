import { useState } from 'react';
import api from '../../Services/api';

import useDebouncePromise from '../utils/useDebouncePromise';

const initialRequestInfo = {
  error: null,
  data: null,
  loading: false,
};

export default function useApi(config) {
  const [requestInfo, setRequestInfo] = useState(initialRequestInfo)
  const debounceApi = useDebouncePromise(api, config.debounceDelay)

  async function call(localConfig) {
    setRequestInfo({
      ...initialRequestInfo,
      loading: true,
    });
    
    let response = null;

    const finalConfig = {
      ...config,
      ...localConfig,
    }

    const fn = finalConfig.debounced ? debounceApi : api;
    try {
      response = await fn(finalConfig);

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
    return response;
  }

  return [
    call,
    requestInfo
  ]
}