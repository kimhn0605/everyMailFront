console.log(Cookies.get("Number"), 1);
fetch(
  `http://ec2-54-167-22-41.compute-1.amazonaws.com/api/user/mail/${Cookies.get(
    "Number"
  )}`,
  {
    method: "GET",
    headers: {
      "X-Access-Token": Cookies.get("X-Access-Token"),
    },
  }
)
  .then((response) => response.json())
  .then((data) => {
    var receiver = document.getElementById("receiver");
    var title = document.getElementById("title");
    var content = document.getElementById("content");

    // data.data.mailData.forEach((element) => {
    //   console.log(element);
    console.log(data.data.mailData[0]);
    receiver.innerHTML += `${data.data.mailData[0].receive}교수님`;
    title.innerHTML += data.data.mailData[0].subject;
    content.innerHTML += data.data.mailData[0].text;
    // });
  });
