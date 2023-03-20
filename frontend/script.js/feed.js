const GoFav = document.getElementById("GoFav");
const GoInbox = document.getElementById("GoInbox");
const profile = document.getElementById("profile");
const feed = document.getElementById("feed");

GoFav.addEventListener("click", () => {
  window.location.href = "./favourites.html";
});

GoInbox.addEventListener("click", () => {
  window.location.href = "./message.html";
});

profile.addEventListener("click", () => {
  window.location.href = "./profile.html";
});

userNow = JSON.parse(localStorage.getItem("User Now"));
userToken = JSON.parse(localStorage.getItem("User token"));

axios
  .get(`http://localhost:8000/api/users/${userNow.id}`)
  .then((res) => {
    const feedUsers = res.data.users;
    feedUsers.forEach((user) => {
      feed.innerHTML += `<div class="card" value="${user.id}" id="card">
  <div class="profile">
    <img src="./assets/profile.webp" alt="" />
  </div>
  <div class="name">${user.name}</div>
  <div class="info">
    <p>Age: ${user.age}</p>
    <p>Location: ${user.location}</p>
  </div>
  <div class="buttons">
    <button>Add to Favourites</button>
    <button>Message</button>
  </div>
</div>`;
    });
  })
  .then(() => {
    const card = document.querySelectorAll("#card");

    card.forEach((users) => {
      users.addEventListener("click", () => {
        const value = users.getAttribute("value");
        localStorage.setItem("viewID", JSON.stringify(value));
        window.location.href = "./viewUser.html";
      });
    });
  });
