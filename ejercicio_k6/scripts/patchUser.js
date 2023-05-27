import http from 'k6/http';
import { check } from 'k6';

export function patchUser() {
  const url = "https://reqres.in/api/users/2";
  const payload = {
    name: "morpheus",
    job: "zion resident"
  };

  const res = http.patch(url, payload);

  check(res, {
    'Update Status is 200': (r) => r.status === 200
  });

  if (!res.status === 200) {
    console.error(`Request failed with status ${res.status}`);
    console.error(res.body);
  }
}
