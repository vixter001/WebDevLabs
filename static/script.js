

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

findTheBanana(L1, "first");
findTheBanana(L2, "second");


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

window.onload = function() {
    var currentPage = window.location.href.split("/").pop(); // Get the filename
    if (currentPage === "index.html" || currentPage === "") {
        // Run the function only on index.html
        greetingFunc();
}

}
