var x = 5;
var y = 7;
var z = x + y;

console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;

console.log(C);

function SumNPrint(x1, x2){
    x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x,y);

SumNPrint(A,B);

if (C.length > z){
    console.log(C);
} else if (C.length < z){
    console.log(z);
} else {
    console.log("good job!");
}

var L1 = ["Watermlon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"]

// function findTheBanana(arr) {
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] === "Banana") {
//             alert("Banana found in the array!");
//         }
//     }
// } original findTheBanana

function findTheBanana(arr, arrNum) {
    arr.forEach(item => {
        if (item === "Banana") {
            alert("Banana found in the " + arrNum + " array!");
        }
    });
}

// findTheBanana(L1, "first");
// findTheBanana(L2, "second");


function greetingFunc(){
    var d = new Date();
    var h = d.getHours();
    time = ""

    if (h<12){
        time = "morning"
    } else if (h >= 12 && h < 18){
        time = "afternoon"
    } else if (h >= 18 && h < 20){
        time = "evening"
    } else {
        time = "night"
    }

    var greetingText = "Good " + time + ", my name is Vicky Yan"; 
    var greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.innerHTML = greetingText;
    }
}

// window.onload = function() {
//     var currentPage = window.location.href.split("/").pop(); // Get the filename
//     if (currentPage === "index.html" || currentPage === "") {
//         // Run the function only on index.html
       
//     }
// }

function addYear(){
    var d = new Date();
    var y = d.getFullYear();
    console.log("hello");

    copyYearText = document.getElementById("copyYear");
    copyYearText.innerHTML += y;
}

// function showList(){
//     document.getElementById("funList").style.display = "block";
//     document.getElementById("showButton").style.display = "none";
// }

function readMore(){
    document.getElementById("readMore").style.display = "none"
    document.getElementById("readLess").style.display = "block"

}

document.getElementById("contactForm").addEventListener("submit", function (event) {
    console.log("checking...");
    event.preventDefault();
    let isValid = true;

    // Get form elements
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    if (!name.checkValidity()) {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    if (!email.checkValidity()) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (!message.checkValidity()) {
        messageError.textContent = "Please enter your message.";
        isValid = false;
    }

    if (isValid){
        alert("Form submitted successfully!")
    }
});

function getAdvice(){
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
            .then(data => {
                document.getElementById("adviceText").innerText = data.slip.advice;
            })
            .catch(error => {
                document.getElementById("adviceText").innerText = "Failed to fetch advice. Please try again.";
                console.error("Error fetching advice:", error);
            });
}

links = [document.querySelectorAll("")];
newLinks = Array.from(links);
console.log(newLinks);
console.log(window.location);

links.forEach(element){

    console.log(element);
    
}


function toggleMenu() {
    let navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

document.getElementById("menuIcon").addEventListener("click", toggleMenu);

// Select all navigation links
const navLinks = document.querySelectorAll("nav a");

// Function to add "active" class to the current page link

navLinks.forEach(
    MyLink =>{
    if (MyLink.href.includes(window.location.pathname)) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
