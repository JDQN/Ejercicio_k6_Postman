import http from 'k6/http';
import { check } from 'k6';

export function singleUserNotFound() {
  const url = "https://reqres.in/api/users/23";
  const res = http.get(url);

  check(res, {
    'Single User Not Found Status is 404': (r) => r.status === 404
  });
}
