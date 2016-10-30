import 'isomorphic-fetch';
import assign from 'lodash/assign';
import queryString from 'query-string';
// import frog from '@cfp/frog';

import {API_ROOT} from '../config';

export const CALL_API = 'Call API';

function callApi({
  endpoint,
  params,
  method = 'POST',
  json = false,
  customHeaders = {}
}) {
  const fullUrl = /^https?:\/\//.test(endpoint) ? endpoint : `${API_ROOT}${endpoint}`;

  const headers = new Headers();
  if (json) {
    headers.append('Content-Type', 'application/json');
  } else {
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
  }
  Object.keys(customHeaders).forEach((k) => {
    headers.append(k, customHeaders[k]);
  });

  let devicePromise = Promise.resolve();
  // if (frog.ua.browser.CFP) {
  //   devicePromise = frog.getDeviceInfo().then(({UDID}) => {
  //     if (UDID) {
  //       headers.append('UDID', UDID);
  //     }
  //   });
  // }

  const body = json ? JSON.stringify(params) : queryString.stringify(params);
  return devicePromise.then(() => {
    return fetch(fullUrl, {
      method,
      headers,
      body,
      credentials: 'include'
    }).then(response => {
      if (!response.ok) {
        return Promise.reject({
          retCode: response.status,
          retMsg: response.statusText
        });
      }

      return response.json();
    }).then(json => {
      if (json.Code !== 0) {
        return Promise.reject(json);
      }

      //此处计算接口返回时间,如果接口没有time。需要注释掉
      // const timeDelta = json.time * 1000 - Date.now();
      const timeDelta = Date.now();

      //拼接json格式。。添加result节点
      return assign({}, {result: json.Data}, {timeDelta});
    }).catch((err) => {
      return Promise.reject({
        retCode: err.retCode,
        retMsg: err.retMsg
      });
    });
  });
}

export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }
  let {endpoint} = callAPI;
  const {types, params = {}, schema, showLoading, method, json, customHeaders} = callAPI;
  const state = store.getState();
  // const {csrf: {name, value}} = state;
  //
  // if (name && value) {
  //   customHeaders[name] = value;
  // }

  if (typeof endpoint === 'function') {
    endpoint = endpoint(state);
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }

  function actionWith(data) {
    const finalAction = assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  const [requestType, successType, failureType] = types;
  next(actionWith({
    type: requestType,
    showLoading
  }));

  return callApi({
    endpoint,
    params,
    schema,
    method,
    json,
    customHeaders
  }).then((response) => {
    next(actionWith({
      response,
      type: successType,
      showLoading: false
    }));

    return {
      retCode: 0,
      retMsg: ''
    };
  }, ({retCode, retMsg}) => {
    next(actionWith({
      type: failureType,
      error: retMsg,
      code: retCode,
      showLoading: false
    }));

    return {
      retCode,
      retMsg
    };
  });
};
