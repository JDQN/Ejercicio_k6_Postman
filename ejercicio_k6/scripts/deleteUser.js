import http from 'k6/http';
import { check } from 'k6';

export function deleteUser() {
  const url = "https://reqres.in/api/users/2";
  const res = http.del(url);

  check(res, {
    'Delete Status is 204': (r) => r.status === 204
  });
}
