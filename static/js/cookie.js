// 로그인
async function login() {
  var user = document.getElementById("user_id");
  var userpw = document.getElementById("user_pw");
  try {
    await fetch("http://54.167.22.41/api/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        nickName: user.value,
        password: userpw.value,
      }),
    })
      .then((response) => response.json())
      .then((result) => Cookies.set("X-Access-Token", result.data.jwt))
      .catch((error) => console.log("error: ", error));
  } catch (error) {
    console.log(error);
  }
}
