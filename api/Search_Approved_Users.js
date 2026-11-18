import http from 'k6/http';
import { domain, cookie } from './env.js';

export function Search_Approved_Users() {
  const url = `${domain}/service/get-data-user?citizen_id=1100499000019`;

  const params = {
    headers: {
      'Accept': 'application/json',
      'Secretkey': 'vqOvLBTwzjRCnG4uCaKtMsPjR1mSMIfkpNCK627f',
      'Refcode': 'LicyzM',
      'Cookie': '' + cookie,
    },
    redirects: 10,
  };

  const response = http.get(url, params);

  //console.log(response.body);

  return response;
}