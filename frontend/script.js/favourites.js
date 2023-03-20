const GoHome = document.getElementById("GoHome");
const GoInbox = document.getElementById("GoInbox");
const profile = document.getElementById("profile");
const feed = document.getElementById("feed");

GoHome.addEventListener("click", () => {
  window.location.href = "./feed.html";
});

GoInbox.addEventListener("click", () => {
  window.location.href = "./message.html";
});

profile.addEventListener("click", () => {
  window.location.href = "./profile.html";
});

const userID = JSON.parse(localStorage.getItem("User Now"));
const body = new FormData();
body.append("sender_id", userID.id);
axios.post("http://localhost:8000/api/getFav", body).then((res) => {
  fav = res.data.favs;
  fav.forEach((user) => {
    axios.get(`http://localhost:8000/api/${user.fav_id}`).then((res) => {
      user = res.data.user;
      feed.innerHTML += `<div class="card">
        <div class="profile">
          <img src="./assets/profile.webp" alt="" />
        </div>
        <div class="name">${user.name}</div>
        <div class="info">
          <p>Age: ${user.age}</p>
          <p>Location: ${user.location}</p>
        </div>
        <div class="buttons">
        <button  value="${user.id}"  id='card'>View User</button>
          <button  value="${user.id}" id='favUser'>Add to Favourites</button>
          <button  value="${user.id}"  id='messageUser'>Message</button>
        </div>
      </div>`;
    });
  });
});
