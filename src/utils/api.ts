let baseUrl = '';
let environment = "PROD";
switch (environment) {
  case 'DEV':
    // baseUrl = 'http://localhost:5000/api';
    // baseUrl = 'http://172.20.10.2:5000/api';
    baseUrl = 'http://10.0.2.2:5000/api';
    break;
  case 'PROD':
    baseUrl = 'https://drivesos-backend.onrender.com/api';
    break;
  default:
    baseUrl = 'http://172.20.10.2:5000/api';
    break;
}


export default baseUrl;
