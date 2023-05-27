import "../libs/shim/core.js";
import { listUsers } from "./listUsers.js";
import { singleUser } from "./singleUser.js";
import { singleUserNotFound } from "./singleUserNotFound.js";
import { create } from "./create.js";
import { update } from "./update.js";
import { patchUser } from "./patchUser.js";
import { deleteUser } from "./deleteUser.js";

export let options = { maxRedirects: 4 };

export default function () {

  listUsers();
  singleUser();
  singleUserNotFound();
  create();
  update();
  patchUser();
  deleteUser();


}


//TODO: k6 run --out influxdb=http://localhost:8086/kseis 17.Test_Postman_k6/scripts/main.js