// 쿠키에 값 설정하기
Cookies.set('name', 'value');

// 유효기간과 함께 쿠키에 값 설정하기
Cookies.set('name', 'value', { expires: 7 });

// 쿠키 값 가져오기
Cookies.get('name'); // 'value'
Cookies.get('nothing'); // undefined

// 모든 쿠키 값 가져오기
Cookies.get(); // { name: 'value' }

Cookies.remove('name');

// 로그인
fetch("http://ec2-54-167-22-41.compute-1.amazonaws.com/api/auth/sign-in", {
  method: "POST",
  body: JSON.stringify({
    "nickName": user_id,
	"password": user_pw,
  }),
}).then((response) => console.log(response));

// 시간표 전체 불러오기
fetch("http://ec2-54-167-22-41.compute-1.amazonaws.com/api/timeTable/entire", {
  method: "GET",
  body: JSON.stringify({
    "nickName": user_id,
	"password": user_pw,
  }),
}).then((response) => console.log(response));
