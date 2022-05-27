// 내가 쓴 메일함 로딩
fetch("http://ec2-54-167-22-41.compute-1.amazonaws.com/api/user/mail", {
        method: "GET",
        headers: {
            "X-Access-Token": "모름",
        },
    })
    .then((response) => response.json())
    .then((data) => {
        var mailbox = document.getElementById('mailbox_list_contents');
        data.forEach(element => {
            console.log(element);
            mailbox.innerHTML +=
                `<tr align="center">
                    <td>${element.data.mailData.createAt}</td> 
                    <td>${element.data.mailData.receive_name}</td>
                    <td>${element.data.mailData.subject}</td>
                    <td><button onclick="buttonClick(${element.data.mailData.send_id})" class="mail_button">상세보기</button></td>             
                </tr>
                <tr>
                    <td colspan="4"><hr style="width: 100%; height: 0.1px; border: none; background-color: black;"></td>
                </tr>`;
        });
    });

// 상세보기 눌렀을 때 동작하는 함수
function buttonClick(ID){
    window.open("exer2.html", "_blank", "width=550px, height=550px, scrollbars=yes, menubar=no, location=yes");
    document.getElementById('userID').innerHTML = ID;
}
