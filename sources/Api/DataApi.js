async function get_api_users() {
  let aLocalStorage = localStorage.getItem("key_users");

  if (!aLocalStorage) {
    try {
      const rsp1 = await fetch("https://reqres.in/api/users?page=1");
      const rsp2 = await fetch("https://reqres.in/api/users?page=2");

      const data1 = await rsp1.json();
      console.log(data1);

      const data2 = await rsp2.json();

      const data = [...data1.data, ...data2.data];
      localStorage.setItem("key_users", JSON.stringify(data));

      return data;
    } catch (error) {
      console.log(error);
    }
  } 
  return JSON.parse(aLocalStorage);
}

export { get_api_users };