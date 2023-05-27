import http from 'k6/http';
import { check } from 'k6';

export function singleUser() {
  const url = "https://reqres.in/api/users/3";
  const res = http.get(url);

  check(res, {
    'Single User Status is 200': (r) => r.status === 200
  });
}
