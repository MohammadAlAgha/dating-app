const back = document.getElementById("back");
const text = document.getElementById("message");
const send = document.getElementById("send");
const dm = document.getElementById("dm");

back.addEventListener("click", () => {
  window.location.href = "./message.html";
});

const sender = JSON.parse(localStorage.getItem("User Now"));
const receiver_id = JSON.parse(localStorage.getItem("meessagedID"));
const sender_id = sender.id;

send.addEventListener("click", () => {
  const body = new FormData();
  body.append("sender_id", sender_id);
  body.append("receiver_id", receiver_id);
  body.append("content", text.value);

  axios.post("http://localhost:8000/api/messages", body).then((res) => {
    toPrint = res.data.Message;
    dm.innerHTML += ` <div class="rowTo">
    <div class="to">${toPrint.content}</div>
  </div>`;
  });
});
