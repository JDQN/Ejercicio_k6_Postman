import http from 'k6/http';
import { check } from 'k6';

export let options = { maxRedirects: 4 };

export default function () {
  const urlSingleUser = "https://reqres.in/api/users/3";
  const resSingleUser = http.get(urlSingleUser);
  check(resSingleUser, {
    'Single User Status is 200': (r) => r.status === 200
  });

  const urlNotFound = "https://reqres.in/api/users/23";
  const resNotFound = http.get(urlNotFound);
  check(resNotFound, {
    'User Not Found Status is 404': (r) => r.status === 404
  });


  const urlCreate = "https://reqres.in/api/users";
  const payloadCreate = {
    name: "morpheus",
    job: "leader"
  };
  const resCreate = http.post(urlCreate, payloadCreate);
  check(resCreate, {
    'Create Status is 201': (r) => r.status === 201
  });


  const urlUpdate = "https://reqres.in/api/users/2";
  const payloadUpdate = {
    name: "morpheus",
    job: "zion resident"
  };
  const resUpdate = http.put(urlUpdate, payloadUpdate);
  check(resUpdate, {
    'Update Status is 200': (r) => r.status === 200
  });

  
  const resPatch = http.patch(urlUpdate, payloadUpdate);
  check(resPatch, {
    'Patch Status is 200': (r) => r.status === 200
  });

  const resDelete = http.del(urlUpdate);
  check(resDelete, {
    'Delete Status is 204': (r) => r.status === 204
  });
}
