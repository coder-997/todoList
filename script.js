
// var liB = document.querySelectorAll("li button");


// for (let i=0; i<buttons.length;i++){
// 	buttons[i].onclick=function(){
// 		items[i].classList.add("delete");
// 		checkboxs[i].classList.add("delete");
// 		buttons[i].classList.add("delete");
// 	}
// }
// for (let i=0;i<checkboxs.length;i++){
// 	checkboxs[i].onclick=function(){
// 	if (checkboxs[i].checked=true){
// 		items[i].classList.toggle("done");
			
	
// 	}}
// }


// li.forEach(function(liB){
	
// 	liB.onclick=function(){
// 		span.className="delete";
// 		liInput.classList.toggle("delete");
// 		// btn1.innerHTML="SHOW";
// 		liB.classList.add("delete")
// }})
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	var span= document.createElement("span");
	var input1=document.createElement("input");
	
		ul.appendChild(li);
		
		span.appendChild(document.createTextNode(input.value));
		li.appendChild(input1);
		li.appendChild(span);
		li.appendChild(button);
		input1.setAttribute("type", "checkbox");
		input1.classList.add("checkB");
		span.classList.add("item1");
		button.classList.add("btn","btn1","btn-light");
		button.innerHTML="Delete";
		input.value = "";

	var items= document.getElementsByClassName("item1");
	var checkboxs= document.getElementsByClassName("checkB");
	let buttons=document.getElementsByClassName("btn1");
		for (let i=0; i<buttons.length;i++){
			buttons[i].onclick=function(){
				items[i].classList.add("delete");
				checkboxs[i].classList.add("delete");
				buttons[i].classList.add("delete");
			}
				
		}
		for (let i=0;i<checkboxs.length;i++){
			checkboxs[i].onchange=function(){
			items[i].classList.toggle("done");
				}

		}
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

// var checkB = document.getElementsByClassName("checkB")[0];
// var item1  = document.getElementsByClassName("item1")[0];
// var btn1   = document.getElementsByClassName("btn1")[0];	

// var items= document.getElementsByClassName("item1");
// var checkboxs= document.getElementsByClassName("checkB");
// let buttons=document.getElementsByClassName("btn1");
// for (let i=0; i<buttons.length;i++){
// 	buttons[i].onclick=function(){
// 		items[i].classList.add("delete");
// 		checkboxs[i].classList.add("delete");
// 		buttons[i].classList.add("delete");
// 	}
		
// }
// for (let i=0;i<checkboxs.length;i++){
// 	checkboxs[i].onchange=function(){
// 	items[i].classList.toggle("done");
// 		}

// }
// for (let i=0;i<checkboxs.length;i++){
// checkboxs[i].onclick=function(){
// 	let count=0;
// 	if (checkboxs[i].checked=true&&count===0){
// 		items[i].classList.add("done");
// 		count++;
// 	} else if (count===1){
// 		items[i].classList.remove("done");
// 		count--;
// 	}
// }}

// checkB.onclick=function(){
// 	if (checkB.checked=true) {
// 		item1.classList.toggle("done");
// 	}
// }
// checkB.onchange=function(){
// 	item1.classList.toggle("done");
// }
// btn1.onclick=function(){
// 	item1.classList.toggle("delete");
// 	checkB.classList.toggle("delete");
// 	// btn1.innerHTML="SHOW";
// 	btn1.classList.add("delete")
	
	
	// if (item1.style.display="block"){
	// 	item1.style.display="none";
	// 	checkB.style.display="none";
	// 	btn1.innerHTML="Show";
	// } else if (item1.style.display="none"){
	// 	item1.style.display="block";
	// 	checkB.style.display="block";
	// 	btn1.innerHTML="Delete";
	// }

// function clickable(){
// 	for (let i=0; i<liB.length;i++){
// 			btn1.onclick=function(){
// 			item1.classList.toggle("delete");
// 			checkB.classList.toggle("delete");
// 			btn1.innerHTML="SHOW";
// 		}
// 	}
// }