import http from 'k6/http';
import { check } from 'k6';

export function create() {
  const url = "https://reqres.in/api/users";
  const payload = {
    name: "juan",
    job: "leader"
  };

  const res = http.post(url, payload);

  check(res, {
    'Create Status is 201': (r) => r.status === 201
  });
}
