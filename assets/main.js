var button= document.getElementById("submit");
button.addEventListener("click", function getInputValue()
  {
  var inputValue=document.getElementById("userName").value;
  let paragraphText = document.querySelector("p");
paragraphText.innerText = "Hello " + inputValue + ", welcome to the bootcamp";;
});