
import http from 'k6/http';
import { domain, cookie } from './env.js';

export function SSO_Login() {
  const url = `${domain}/redirect-share-token?shared_token=&refcode=LicyzM&secretkey=vqOvLBTwzjRCnG4uCaKtMsPjR1mSMIfkpNCK627f`;

  const params = {
    headers: {
      'Accept': 'application/json, text/html, application/xhtml+xml, application/xml',
      'X-Username': '172681970060061',
      'Cookie': '' + cookie,
    },
  };

  const response = http.get(url, params);

  //console.log(response.body);

  return response;
}
