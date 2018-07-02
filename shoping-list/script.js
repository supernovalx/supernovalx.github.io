var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function onLiClick(event) {
	event.target.classList.toggle("done");
}

function onDeleteBtnClick(event) {
	console.log(event);
	ul.removeChild(event.target.parentNode);
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", onLiClick);

	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	btn.classList.add("deleteBtn");
	btn.addEventListener("click", onDeleteBtnClick);

	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);