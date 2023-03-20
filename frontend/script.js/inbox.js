const back = document.getElementById("back");
// const text = document.getElementById("message");
const send = document.getElementById("send");
const dm = document.getElementById("dm");
const receiver = document.getElementById("receiver");

back.addEventListener("click", () => {
  window.location.href = "./feed.html";
});

const sender = JSON.parse(localStorage.getItem("User Now"));
const receiver_id = JSON.parse(localStorage.getItem("meessagedID"));
const sender_id = sender.id;

axios.get(`http://localhost:8000/api/${receiver_id}`).then((res) => {
  userName = res.data.user.name;
  receiver.innerHTML = userName;
});

const body = new FormData();
body.append("sender_id", sender_id);
body.append("receiver_id", receiver_id);
axios.post("http://localhost:8000/api/chat", body).then((res) => {
  const toPrint = res.data.Message;
  toPrint.forEach((line) => {
    console.log(line);
    dm.innerHTML += ` <div class="rowTo">
    <div class="to">${line.content}</div>
  </div>`;
  });
});

const body2 = new FormData();
body2.append("sender_id", receiver_id);
body2.append("receiver_id", sender_id);
axios.post("http://localhost:8000/api/chat", body2).then((res) => {
  const toPrint = res.data.Message;
  toPrint.forEach((line) => {
    console.log(line);
    dm.innerHTML += ` <div class="rowFrom">
    <div class="from">${line.content}</div>
  </div>`;
  });
});

send.addEventListener("click", () => {
  const body = new FormData();
  body.append("sender_id", sender_id);
  body.append("receiver_id", receiver_id);
  body.append("content", text.value);

  axios.post("http://localhost:8000/api/messages", body).then((res) => {
    const toPrint = res.data.Message;
    dm.innerHTML += ` <div class="rowTo">
    <div class="to">${toPrint.content}</div>
  </div>`;
  });
});
