const GoHome = document.getElementById("GoHome");
const GoInbox = document.getElementById("GoInbox");
const profile = document.getElementById("profile");

GoHome.addEventListener("click", () => {
  window.location.href = "./feed.html";
});

GoInbox.addEventListener("click", () => {
  window.location.href = "./message.html";
});

profile.addEventListener("click", () => {
  window.location.href = "./profile.html";
});
