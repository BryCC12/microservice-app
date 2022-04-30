import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  const res = http.get('http://microservice-app.default.10.103.182.93.sslip.io');
  const hello = http.get('http://microservice-app.default.10.103.182.93.sslip.io/hello');
  const home = http.get('http://microservice-app.default.10.103.182.93.sslip.io/home');
  check(res, { 'El status de respuesta es: 200': (r) => r.status == 200 });
  check(hello, { 'El status de respuesta es: 200': (r) => r.status == 200 });
  check(home, { 'El status de respuesta es: 200': (r) => r.status == 200 });
  sleep(1);
}