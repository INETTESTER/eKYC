
import http from 'k6/http';
import { domain, cookie } from './env.js';

export function ID_Card_Duplicate() {
  const url = `${domain}/check_id_card_dup?id_no=1100499000019`;

  const params = {
    headers: {
      'Accept': 'application/json',
      'Cookie': '' + cookie,
    },
  };

  const response = http.get(url, params);

  //console.log(response.body);

  return response;
}
