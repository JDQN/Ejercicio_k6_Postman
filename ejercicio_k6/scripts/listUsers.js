import http from 'k6/http';
import { check } from 'k6';

export function listUsers() {
  const url = "https://reqres.in/api/users?page=4";
  const res = http.get(url);

  check(res, {
    'List Users Status is 200': (r) => r.status === 200
  });
}
