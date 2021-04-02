import axios from 'axios';

function getHeaders(type) {
  return {
    'Content-Type': type
  };
}

function httpMethod(method, url, data, type = 'application/json') {
  const params = {
    method,
    data,
    url: 'http://localhost:1307' + url,
    headers: getHeaders(type)
  };

  return axios(params).then(res => res).catch(error => {
    throw new Error(error.response.data.message);
  });
}

export function get(url, data) {
  if (data) {
    url += `/${data}`
  }

  return httpMethod('GET', url, data);
}

export function post(url, data, type) {
  return httpMethod('POST', url, data, type);
}

export function patch(url, data, type) {
  return httpMethod('patch', url, data, type);
}

export function del(url, data) {
  return httpMethod('delete', url, data);
}
