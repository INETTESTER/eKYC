
import http from 'k6/http';
import { domain, cookie } from './env.js';

export function ID_Card_OCR() {
  const url = `${domain}/detectionIDCard`;

  const payload = JSON.stringify({
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFV...',
    username: '172681970060061',
    user_id: '',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
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
