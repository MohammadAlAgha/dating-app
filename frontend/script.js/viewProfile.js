const block = document.getElementById("block");
const back = document.getElementById("back");

back.addEventListener("click", () => {
  window.location.href = "./feed.html";
});

block.addEventListener("click", () => {
  const blocked_id = JSON.parse(localStorage.getItem("viewID"));
  const user_id = JSON.parse(localStorage.getItem("User Now"));
  const sender_id = user_id.id;
  const body = new FormData();
  body.append("blocked_id", blocked_id);
  body.append("sender_id", sender_id);
  axios.post("http://localhost:8000/api/setBlock", body).then((res) => {
    console.log(res);
  });
});
