const GoHome = document.getElementById("GoHome");
const profile = document.getElementById("profile");
const feed = document.getElementById("feed");
const search = document.getElementById("search");
GoHome.addEventListener("click", () => {
  window.location.href = "./feed.html";
});

profile.addEventListener("click", () => {
  window.location.href = "./profile.html";
});

const userID = JSON.parse(localStorage.getItem("User Now"));
const body = new FormData();
body.append("sender_id", userID.id);
axios.post("http://localhost:8000/api/getFav", body).then((res) => {
  fav = res.data.favs;
  fav
    .forEach((user) => {
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
    })
    .then(() => {
      const card = document.querySelectorAll("#card");
      const msg = document.querySelectorAll("#messageUser");
      const fav = document.querySelectorAll("#favUser");

      card.forEach((users) => {
        users.addEventListener("click", () => {
          const value = users.getAttribute("value");
          localStorage.setItem("viewID", JSON.stringify(value));
          window.location.href = "./viewUser.html";
        });
      });
      fav.forEach((favourite) => {
        favourite.addEventListener("click", () => {
          const value = favourite.getAttribute("value");
          const body = new FormData();
          body.append("sender_id", userNow.id);
          body.append("fav_id", value);
          axios.post("http://localhost:8000/api/setfav", body).then((res) => {
            console.log(res);
          });
        });
      });
      msg.forEach((users) => {
        users.addEventListener("click", () => {
          const value = users.getAttribute("value");
          localStorage.setItem("meessagedID", JSON.stringify(value));
          window.location.href = "./inbox.html";
        });
      });
    });
});
