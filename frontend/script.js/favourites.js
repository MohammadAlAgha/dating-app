const GoHome = document.getElementById("GoHome");
const GoInbox = document.getElementById("GoInbox");

GoHome.addEventListener("click", () => {
  window.location.href = "./feed.html";
});

GoInbox.addEventListener("click", () => {
  window.location.href = "./message.html";
});
