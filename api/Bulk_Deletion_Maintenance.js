import http from 'k6/http';
import { domain, cookie } from './env.js';

export function Bulk_Deletion_Maintenance() {
  const url = `${domain}/del_new_table`;

  const payload = JSON.stringify({
    secretkey: 'vqOvLBTwzjRCnG4uCaKtMsPjR1mSMIfkpNCK627f',
    refcode: 'LicyzM',
    page: 1,
    per_page: 50
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Cookie': '' + cookie,
    },
    redirects: 10,
  };

  const response = http.post(url, payload, params);

  //console.log(response.body);

  return response;
}