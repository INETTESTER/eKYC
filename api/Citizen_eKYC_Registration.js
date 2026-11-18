import http from 'k6/http';
import { domain, cookie } from './env.js';
import { SharedArray } from 'k6/data'; ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
const data = new SharedArray('cid', function () { ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
  return JSON.parse(open('../file/data.json')).cid; ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
});
const data2 = new SharedArray('lasercode', function () { ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
  return JSON.parse(open('../file/data.json')).lasercode; ///POST กรณี id ไม่ซ้ำ (ดึง id จากไฟล์ json)
});

export function Citizen_eKYC_Registration(scenario) {
  const cid = data[scenario.iterationInTest];
  const lasercode = data2[scenario.iterationInTest];
  const url = `${domain}/api/v2/register-ekyc`;

  // console.log(cid);
  // console.log(lasercode);

  const payload = JSON.stringify({
    citizen_id: '' + cid,
    laser_code: '' + lasercode,
    title_name_th: 'นาย',
    first_name_th: 'เธญเธเธฑเธเธ•เน',
    last_name_th: 'เธฃเธฑเธเธเธฒเธ•เธด',
    birth_date: '1992-01-01',
    phone: '0906584401',
    email: 'loadtest_1793959141116@one.th',
    refcode: 'nt3pTG',
    secretkey: 'uksbZtUCqecR2emhxlkI8nbZoY6w3aG2d3MNLl89'
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Cookie': '' + cookie,
    },
  };

  const response = http.post(url, payload, params);

  //console.log(response.body);

  return response;
}