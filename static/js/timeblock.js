function addBtn() {
	var first = document.getElementById("first");
	first.style.background = "Pink";
	first.setAttribute("rowspan", 2);
	first.addEventListener("click", goPage);

	var second = document.getElementById("second");
	second.style.background = "Pink";
	second.addEventListener("click", goPage);

	first.innerHTML = `<td>알고리즘</td>`;
	second.innerHTML = `<td>알고리즘</td>`;
}

function search() {
	var keyword = document.getElementById("search").value;
	var result_contents = document.getElementById("result_contents");

	result_contents.innerHTML = " ";

	for (var i = 0; i < data.length; i++) {
		if (data[i][2].includes(keyword)) {
			result_contents.innerHTML += `<tr align="center">
			<td>${data[i][0]}</td>
			<td>${data[i][1]}</td>
			<td>${data[i][2]}</td>
			<td><button style="display:inline-block;" onclick="addBtn()" class="addBtn">추가</button></td>
			<tr>
			<td colspan="4"><hr style="width: 95%; height: 0.1px; margin: 0px auto; border: none; background-color: black;"></td>
			</tr>`;
		}
	}
}

function goPage() {
	window.location.href = "mail.html";
}
var result = document.getElementById("result_contents");

for (var i = 0; i < data.length; i++) {
	if (data[i][2].length > 10) {
		result.innerHTML += `<tr align="center">
		<td>${data[i][0]}</td>
		<td>${data[i][1]}</td>
		<td>${data[i][2].substring(0, 10)}...</td>
		<td><button style="display:inline-block;" onclick="addBtn()" class="addBtn">추가</button></td>
	<tr>
		<td colspan="4"><hr style="width: 95%; height: 0.1px; margin: 0px auto; border: none; background-color: black;"></td>
	</tr>`;
	} else {
		result.innerHTML += `<tr align="center">
		<td>${data[i][0]}</td>
		<td>${data[i][1]}</td>
		<td>${data[i][2]}</td>
		<td><button style="display:inline-block;" onclick="addBtn()" class="addBtn">추가</button></td>
		<tr>
		<td colspan="4"><hr style="width: 95%; height: 0.1px; margin: 0px auto; border: none; background-color: black;"></td>
		</tr>`;
	}
}
