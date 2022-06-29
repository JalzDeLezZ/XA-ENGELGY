import { get_api_users } from "./sources/Api/DataApi.js";

(async () => {
  const res = await get_api_users();
  let users = "";
  console.log(res);
  let containerUsers = document.getElementById("conatiner-users");
  res.forEach((item) => {
    users =
      users +
      `<user-target
            onclick="handleClickOpenModal(${item.id})"
                data_identity=${item.id}
                data_email=${item.email}
                data_image=${item.avatar}
              >
              <span slot="fullName">${item.first_name} ${item.last_name}</span>
        </user-target>
        `;
  });
  containerUsers.innerHTML = users;
})();


/* 
(async () => {
    const res = await get_api_users()
    console.log(res)
    let containerUsers = document.getElementById("conatiner-users");
    res.forEach((pI) => {
        const target = document.createElement("user-target");
        target.setAttribute("data_firstName", pI.first_name);
        target.setAttribute("data_lastName", pI.last_name);
        target.setAttribute("data_email", pI.email);
        target.setAttribute("data_image", pI.avatar);
        target.setAttribute("data_identity", pI.id);
        target.setAttribute("data_fullName", `${pI.email} ${pI.last_name}`);
        containerUsers.appendChild(target);
    })

})();
 */
