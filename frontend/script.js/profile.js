const back = document.getElementById("back");
const wrapper = document.getElementById("wrapper");

back.addEventListener("click", () => {
  window.location.href = "./feed.html";
});

const user_id = JSON.parse(localStorage.getItem("User Now"));
const sender_id = user_id.id;
const body = new FormData();
body.append("sender_id", sender_id);
axios.post("http://localhost:8000/api/getBlock", body).then((res) => {
  const blocked = res.data.blocks;
  blocked.forEach((user) => {
    axios.get(`http://localhost:8000/api/${user.blocked_id}`).then((res) => {
      const userBlocked = res.data.user;
      wrapper.innerHTML += `<div class="block">
        <div class="info">
          <img src="./assets/profile.webp" alt="" />
          <p>${userBlocked.name}</p>
        </div>
        <div class="unblock" ><button class="unblocked" value="${userBlocked.id}">Unblock</button></div>
      </div>`;
    });
  });
  const blockButton = document.querySelectorAll("#unblocked");
  console.log(blockButton);
  for (button of blockButton) {
    console.log(button);
  }
  Array.from(blockButton).forEach((button) => {
    console.log(button);
    button.addEventListener("click", () => {
      const value = button.getAttribute("value");
      console.log(value);
      axios.get(`http://localhost:8000/api/${value}`).then((res) => {
        console.log(res);
      });
    });
  });
});
