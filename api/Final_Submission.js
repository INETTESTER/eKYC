
import http from 'k6/http';
import { domain, cookie } from './env.js';

export function Final_Submission() {
  const url = `${domain}/updateIdentity`;

  const payload = {
    username: '172681970060061',
    user_id: '',
    citizen_id: '1100499000019',
    laser_code: 'ME1234567890',
    citizen_exp: '2575-12-31',
    title_th: 'นาย',
    first_name_th: 'สมชาย',
    last_name_th: 'ใจดี',
    title_en: 'MR.',
    first_name_en: 'SOMCHAI',
    last_name_en: 'JAIDEE',
    birth_date: '1992-01-01',
    phone: '0812345678',
    house_no: '123/45',
    district: 'สีลม',
    amphoe: 'บางรัก',
    province: 'กรุงเทพมหานคร',
    sub_district_th: 'สีลม',
    district_th: 'บางรัก',
    province_th: 'กรุงเทพมหานคร',
    zipcode: '10500',
    status_auto_compare: 'true',
    status_sever_ai: 'true',
  };

  const params = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'X-Username': '172681970060061',
      'X-User-Id': '',
      'Cookie': '' + cookie,
    },
  };

  const response = http.post(url, payload, params);

  //console.log(response.body);

  return response;
}
