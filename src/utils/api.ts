let baseUrl = '';
let environment = "DEV";
switch (environment) {
  case 'DEV':
    // baseUrl = 'http://localhost:5000/api';
    baseUrl = 'http://10.0.2.2:5000/api';
    break;
  case 'PROD':
    baseUrl = 'https://peoplespay.com.gh/peoplepay';
    break;
  default:
    baseUrl = 'http://localhost:5000/api';
    break;
}

// export const evoucherUrl = 'http://34.231.247.199:66/gvivewar';
// export const BVIRTUAL = 'https://bvirtualcard.com/api2';
export default baseUrl;
