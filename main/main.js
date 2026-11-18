//=============================== import API =================================
import { sleep, scenario, error_check, options } from '../config/common.js';
import { response_check } from '../check/logresponse.js';
export { options }; const cid = __ENV.cid || '1'; let response;
import { Counter, Trend } from 'k6/metrics';
import { Citizen_eKYC_Registration } from '../api/Citizen_eKYC_Registration.js';
import { SSO_Login } from '../api/SSO_Login.js';
import { Pre_check } from '../api/Pre_check.js';
import { ID_Card_Duplicate } from '../api/ID_Card_Duplicate.js';
import { ID_Card_OCR } from '../api/ID_Card_OCR.js';
import { ID_Card_Image_Storage } from '../api/ID_Card_Image_Storage.js';
import { Face_Detection } from '../api/Face_Detection.js';
import { Selfie_Image_Storage } from '../api/Selfie_Image_Storage.js';
import { Final_Submission } from '../api/Final_Submission.js';
import { Search_Approved_Users } from '../api/Search_Approved_Users.js';
import { Bulk_Deletion_Maintenance } from '../api/Bulk_Deletion_Maintenance.js';

//============================================================================
// API Metrics

export const api1_duration = new Trend('Citizen_eKYC_Registration');
export const api1_error = new Counter('Citizen_eKYC_Registration_error');

export const api2_duration = new Trend('SSO_Login');
export const api2_error = new Counter('SSO_Login_error');

export const api3_duration = new Trend('Pre_check');
export const api3_error = new Counter('Pre_check_error');

export const api4_duration = new Trend('ID_Card_Duplicate');
export const api4_error = new Counter('ID_Card_Duplicate_error');

export const api5_duration = new Trend('ID_Card_OCR');
export const api5_error = new Counter('ID_Card_OCR_error');

export const api6_duration = new Trend('ID_Card_Image_Storage');
export const api6_error = new Counter('ID_Card_Image_Storage_error');

export const api7_duration = new Trend('Face_Detection');
export const api7_error = new Counter('Face_Detection_error');

export const api8_duration = new Trend('Selfie_Image_Storage');
export const api8_error = new Counter('Selfie_Image_Storage_error');

export const api9_duration = new Trend('Final_Submission');
export const api9_error = new Counter('Final_Submission_error');


// export function setup() {
//   api1_error.add(0);
//   api2_error.add(0);
//   api3_error.add(0);
//   api4_error.add(0);
//   api5_error.add(0);
//   api6_error.add(0);
//   api7_error.add(0);
//   api8_error.add(0);
//   api9_error.add(0);
// }

export default function () {    //เรียกใช้ API ใน export default function
  response = SSO_Login()
    // response = Pre_check()
    // response = ID_Card_Duplicate()
    // response = ID_Card_OCR()
    // response = ID_Card_Image_Storage()
    // response = Face_Detection()
    // response = Selfie_Image_Storage()
    // response = Final_Submission()










































  // response = Search_Approved_Users()
  // response = Bulk_Deletion_Maintenance()

  // response = Citizen_eKYC_Registration(scenario);
  // api1_duration.add(response.timings.duration);
  // if (response.status < 200 || response.status >= 300) api1_error.add(1);
  // response_check(response);
  // error_check(response);


  // response = SSO_Login();
  // api2_duration.add(response.timings.duration);
  // if (response.status < 200 || response.status >= 300) api2_error.add(1);
  // response_check(response);
  // error_check(response);


  // response = Pre_check();
  // api3_duration.add(response.timings.duration);
  // if (response.status < 200 || response.status >= 300) api3_error.add(1);
  // response_check(response);
  // error_check(response);


  // response = ID_Card_Duplicate();
  // api4_duration.add(response.timings.duration);
  // if (response.status < 200 || response.status >= 300) api4_error.add(1);
  // response_check(response);
  // error_check(response);


  // response = ID_Card_OCR();
  // api5_duration.add(response.timings.duration);
  // if (response.status < 200 || response.status >= 300) api5_error.add(1);
  // response_check(response);
  // error_check(response);


  // response = ID_Card_Image_Storage();
  // api6_duration.add(response.timings.duration);
  // if (response.status < 200 || response.status >= 300) api6_error.add(1);
  // response_check(response);
  // error_check(response);


  // response = Face_Detection();
  // api7_duration.add(response.timings.duration);
  // if (response.status < 200 || response.status >= 300) api7_error.add(1);
  // response_check(response);
  // error_check(response);


  // response = Selfie_Image_Storage();
  // api8_duration.add(response.timings.duration);
  // if (response.status < 200 || response.status >= 300) api8_error.add(1);
  // response_check(response);
  // error_check(response);


  // response = Final_Submission(scenario);
  // api9_duration.add(response.timings.duration);
  // if (response.status < 200 || response.status >= 300) api9_error.add(1);
  response_check(response);
  error_check(response);

  sleep(1)
}