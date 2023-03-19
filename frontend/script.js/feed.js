const GoFav = document.getElementById("GoFav");
const GoInbox = document.getElementById("GoInbox");
const profile = document.getElementById("profile");

GoFav.addEventListener("click", () => {
  window.location.href = "./favourites.html";
});

GoInbox.addEventListener("click", () => {
  window.location.href = "./message.html";
});

profile.addEventListener("click", () => {
  window.location.href = "./profile.html";
});
