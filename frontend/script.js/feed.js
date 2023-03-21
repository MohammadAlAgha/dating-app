const GoFav = document.getElementById("GoFav");
const profile = document.getElementById("profile");
const feed = document.getElementById("feed");
const search = document.getElementById("search");
const filterBtn = document.getElementById("filterBtn");
const filter = document.getElementById("filter");

GoFav.addEventListener("click", () => {
  window.location.href = "./favourites.html";
});

profile.addEventListener("click", () => {
  window.location.href = "./profile.html";
});

const userNow = JSON.parse(localStorage.getItem("User Now"));
const userToken = JSON.parse(localStorage.getItem("User token"));

let users = [];

axios
  .get(`http://localhost:8000/api/users/${userNow.id}`)
  .then((res) => {
    const feedUsers = res.data.users;
    loadUsers(feedUsers, feed);
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
          favourite.innerHTML = res.data.status;
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

    search.addEventListener("change", (event) => {
      const user = event.target.value;
      const lower = user.toLowerCase();
      const allCards = document.querySelectorAll(".card");
      allCards.forEach((one) => {
        one.classList.remove("hide");
        const value = one.getAttribute("value");
        if (!value.includes(lower)) {
          one.classList.add("hide");
        }
      });
    });

    filter.addEventListener("change", (event) => {
      console.log(event.target.value);
    });
  });

const loadUsers = (users, wrapper) => {
  wrapper.innerHTML = "";
  users.forEach((user) => {
    wrapper.innerHTML += `<div class="card" value='${user.name.toLowerCase()} ${user.location.toLowerCase()} ${
      user.age
    }' >
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
};
