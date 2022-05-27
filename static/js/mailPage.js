fetch(`http://ec2-54-167-22-41.compute-1.amazonaws.com/api/user/mail?send_id=${opener.document.getElementById('userID').innerHTML}`, {
        method: "GET",
        headers: {
            "X-Access-Token": "모름",
        },
    })
    .then((response) => response.json())
    .then((data) => {
        var receiver = document.getElementById('receiver');
        var title = document.getElementById('title');
        var content = document.getElementById('content');

        data.forEach(element => {
            receiver.innerHTML += element.data.mailData.receive_name;
            title.innerHTML += element.data.mailData.subject;
            content.innerHTML += element.data.mailData.text;
        });
    });
