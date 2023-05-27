import http from 'k6/http';
import { check } from 'k6';

export function update() {

  const url = "https://reqres.in/api/users/2";
  const payload = {
    name: "morpheus",
    job: "zion resident"
  }

  const res = http.put(url, payload);

  check(res, {
    'Update Status is 200': (r) => r.status === 200
  })
}