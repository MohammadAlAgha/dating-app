const back = document.getElementById("back");
const wrapper = document.getElementById("wrapper");
const main = document.getElementById("main");
const extra = document.getElementById("extra");

back.addEventListener("click", () => {
  window.location.href = "./feed.html";
});

const user_id = JSON.parse(localStorage.getItem("User Now"));
const sender_id = user_id.id;

axios.get(`http://localhost:8000/api/${sender_id}`).then((res) => {
  const currentUser = res.data.user;
  main.innerHTML = `<div class="user">
  <p>Name: ${currentUser.name}</p>
  <p>Age: ${currentUser.age}</p>
  <p>Location: ${currentUser.location}</p>
</div>
<div class="pic">
  <img src="./assets/profile.webp" alt="" />
</div>
<button>Edit Main Picture</button>
<input class="mainFile" type="file" />`;
});

axios.get(`http://localhost:8000/api/info/${sender_id}`).then((res) => {
  const data = res.data.info;
  extra.innerHTML = ` <div class="bio">
  <p id="bioText">
    BIO:${data.bio}
  </p>
  <div class="editBio">
    <button id="submitChange">Edit Bio</button>
    <input type="text" id='bio'/>
  </div>
</div>
<div class="extraPics">
  <img src="./assets/profile.webp" alt="" />
  <img src="./assets/profile.webp" alt="" />
  <img src="./assets/profile.webp" alt="" />
</div>
<div class="editPic">
  <button>Edit Picture 1</button>
  <button>Edit Picture 2</button>
  <button>Edit Picture 3</button>
</div>
<div class="file">
  <input type="file" />
  <input type="file" />
  <input type="file" />
</div>`;

  const editBio = document.getElementById("bio");
  const submitChange = document.getElementById("submitChange");

  submitChange.addEventListener("click", () => {
    const body = new FormData();
    body.append("id", sender_id);
    body.append("bio", editBio.value);
    axios.post(`http://localhost:8000/api/info`, body).then((res) => {
      console.log(res);
      const bioText = document.getElementById("bioText");
      bioText.innerHTML = `BIO:${editBio.value}`;
    });
  });
});

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
