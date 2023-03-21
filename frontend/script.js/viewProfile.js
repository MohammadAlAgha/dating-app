const block = document.getElementById("block");
const back = document.getElementById("back");
const fav = document.getElementById("fav");
const main = document.getElementById("main");
const extra = document.getElementById("extra");

back.addEventListener("click", () => {
  window.location.href = "./feed.html";
});

const viewed_id = JSON.parse(localStorage.getItem("viewID"));

axios.get(`http://localhost:8000/api/${viewed_id}`).then((res) => {
  const currentUser = res.data.user;
  main.innerHTML = `<div class="user">
  <p>Name:  ${currentUser.name}</p>
  <p>Age: ${currentUser.age}</p>
  <p>Location: ${currentUser.location}</p>
</div>
<div class="pic">
  <img src="./assets/profile.webp" alt="" />
</div>
<div class="actions">
  <button id="fav">Add to Favourites</button>
  <button>Message</button>
  <button id="block">Block</button>
</div>`;
});

axios.get(`http://localhost:8000/api/info/${viewed_id}`).then((res) => {
  const data = res.data.info;
  extra.innerHTML = `  <div class="bio">
  <p>
    BIO:${data.bio}
  </p>
</div>
<div class="extraPics">
  <img src="./assets/profile.webp" alt="" />
  <img src="./assets/profile.webp" alt="" />
  <img src="./assets/profile.webp" alt="" />
</div>`;
});

block.addEventListener("click", () => {
  const blocked_id = JSON.parse(localStorage.getItem("viewID"));
  const user_id = JSON.parse(localStorage.getItem("User Now"));
  const sender_id = user_id.id;
  const body = new FormData();
  body.append("blocked_id", blocked_id);
  body.append("sender_id", sender_id);
  axios.post("http://localhost:8000/api/setBlock", body).then((res) => {
    block.innerHTML = res.data.state;
  });
});
fav.addEventListener("click", () => {
  const fav_id = JSON.parse(localStorage.getItem("viewID"));
  const user_id = JSON.parse(localStorage.getItem("User Now"));
  const sender_id = user_id.id;
  const body1 = new FormData();
  body1.append("fav_id", fav_id);
  body1.append("sender_id", sender_id);
  axios.post("http://localhost:8000/api/setfav", body1).then((res) => {
    fav.innerHTML = res.data.status;
  });
});
