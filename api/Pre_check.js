
import http from 'k6/http';
import { domain, cookie } from './env.js';

export function Pre_check() {
  const url = `${domain}/homepage`;

  const params = {
    headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml',
      'X-Username': '172681970060061',
      'Cookie': '' + cookie,
    },
  };

  const response = http.get(url, params);

  //console.log(response.body);

  return response;
}
