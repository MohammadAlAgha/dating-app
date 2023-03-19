const GoFav = document.getElementById("GoFav");
const GoInbox = document.getElementById("GoInbox");

GoFav.addEventListener("click", () => {
  window.location.href = "./favourites.html";
});

GoInbox.addEventListener("click", () => {
  window.location.href = "./message.html";
});
