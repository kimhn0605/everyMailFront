// 내가 쓴 메일함 로딩

fetch("http://ec2-54-167-22-41.compute-1.amazonaws.com/api/user/mail", {
  method: "GET",
  headers: {
    "X-Access-Token": Cookies.get("X-Access-Token"),
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    var mailbox = document.getElementById("mailbox_list_contents");
    data.data.mailData.forEach((element) => {
      var name = ["김성철", "배종우", "신서용", "강환일", "정재희"];
      var subject = [
        "파이썬",
        "파이썬",
        "회로이론",
        "회로이론",
        "인터넷 프로그래밍",
      ];
      var sPick = Math.floor(Math.random() * name.length);
      console.log(element);
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
