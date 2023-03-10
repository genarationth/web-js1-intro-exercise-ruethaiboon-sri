// function myFunction(){
//     alert("Hello World");
//     document.getElementById("show").innerHTML = "The button has been clicked";
//     console.log("The button has been clicked");
// }

// function getName(){

// }
// document.getElementById("name").innerHTML = inputName
function ChangeName(){
    const prompt = window.prompt("What's your name?");
    const name = document.querySelector(".myName"); //
    name.textContent = prompt;
}