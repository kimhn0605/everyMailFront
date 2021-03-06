// 내가 쓴 메일함 로딩

fetch("http://ec2-54-167-22-41.compute-1.amazonaws.com/api/user/mail", {
  method: "GET",
  headers: {
    "X-Access-Token": Cookies.get("X-Access-Token"),
  },
})
  .then((response) => response.json())
  .then((data) => {
    var mailbox = document.getElementById("mailbox_list_contents");
    data.data.mailData.forEach((element) => {
      mailbox.innerHTML += `<tr align="center">
                    <td>${element.createdAt}</td> 
                    <td>${element.receive}</td>
                    <td>${element.subject_name}</td>
                    <td><button onclick="buttonClick(${element.id})" class="mail_button">상세보기</button></td>             
                </tr>
                <tr>
                    <td colspan="4"><hr style="width: 100%; height: 0.1px; border: none; background-color: black;"></td>
                </tr>`;
    });
  });

// 상세보기 눌렀을 때 동작하는 함수
function buttonClick(ID) {
  window.open(
    "mailPage.html",
    "_blank",
    "width=550px, height=550px, scrollbars=yes, menubar=no, location=yes"
  );
  Cookies.set("Number", ID);
}

async function sendMail() {
  let email = document
    .getElementById("receiver")
    .textContent.replace(/\n/g, "");
  email = email.replaceAll(" ", "");
  await fetch("http://ec2-54-167-22-41.compute-1.amazonaws.com/api/sendMail", {
    method: "POST",
    headers: {
      "X-Access-Token": Cookies.get("X-Access-Token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      professor_email: email,
      subject: document.getElementById("title").value,
      text: document.getElementById("content").value,
      subject_name: "인터넷 프로그래밍",
      receive: "정재희",
    }),
  })
    .catch((error) => {
      console.log(error);
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  window.location.reload(true);
}
