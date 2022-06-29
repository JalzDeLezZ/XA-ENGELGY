function handleClickOpenModal(e) {
    let users = localStorage.getItem("key_users");
    let usersParse = JSON.parse(users);
    let user = usersParse.find((item)=> item.id == e);
    console.log(e);
    let modal = document.getElementById("modal");
    modal.setAttribute("name", user.first_name);
    modal.setAttribute("lastname", user.last_name);
    modal.setAttribute("email", user.email);
    modal.setAttribute("avatar", user.avatar);
    modal.setAttribute("visible", "");
  }
  function handleClickCloseModal() {
    let modal = document.getElementById("modal");
    modal.classList.remove("active");
    modal.removeAttr("visible");
  }
  