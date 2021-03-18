import axios from 'axios';

function getHeaders(type) {
  return {
    'Content-Type': type
  };
}

function httpMethod(method, url, data, type = 'application/json') {
  const params = {
    method,
    url: 'http://localhost:1307' + url,
    data,
    headers: getHeaders(type)
  };

  return axios(params)
    .then(res => res)
    .catch(error => {
      console.error(`Server error: ${error}`)
    });
}

export function get(url) {
  return httpMethod('GET', url);
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
