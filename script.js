

function check(e) {
	e.preventDefault();
	if (e.target.form.username.value == "kami" && e.target.form.password.value == "123") {
		document.getElementById("username").value = "";
		document.getElementById("password").value = "";
		document.getElementById('login-form').style.display = 'none';
		document.getElementById('my-account').style.display = 'block';
		e.preventDefault();
		
	  
	} else {
	  alert("Error Password or Username")
	}
  }


  function hideDiv() {
	// document.getElementById("main-menu").style.visibility = "hidden";
	
			document.getElementById('to-do-panel').style.display = 'none';
			document.getElementById('main-menu-2').style.display = 'block';
		
	
 }
 function showDiv() {
	// document.getElementById("main-menu").style.visibility='';
	document.getElementById('to-do-panel').style.display = 'block';
			document.getElementById('main-menu-2').style.display = 'none';
 }




function logOut(){
	
	document.getElementById('my-account').style.display = 'none';
		document.getElementById('login-form').style.display = 'block';
	
	
}

function addToDo(){
var input=document.getElementById("todoText");
var buttonInput=document.getElementById("todoSubmit");
var ul=document.querySelector("ul");
function inputLength() {
	return input.value.length;
}
function createListElement()
{

	var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}
function addListAfterClick(){
	if(inputLength()>0){
		createListElement();
	}
}
function addListAfterKeypress(event){
	if(inputLength()>0 && event.keyCode===13){
		createListElement();
	}
}
buttonInput.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);
}
// function addToDo(value){
// 	const array=[];
// 	array[array.length+1]=value;
// 	alert(value);
// }