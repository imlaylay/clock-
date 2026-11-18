// Variables: empty box you can name and store data 
// also, let, and const 
// let apple1 = 4; 
// const apple2 = 5; 


//NUMBER
var apple = 3;
var banana = 7;  

//STRING
var pineapple = "I ate a pizza covered with it."
pineapple = "the whole pizza is gone!"
var watermelon = "so are drinks!"

var stringAdd = pineapple + " " + watermelon + " who did it?"; 
// apple = apple + banana; 
//Boolean - if a condition exists:
var ifHere = true;  
var isAbsent = false;
// ifHere is true, then student is not absent 

console.log("hello!"); 
console.log(apple);
console.log(pineapple);
console.log(stringAdd);

// If statements
if(isAbsent){
    // send student email.
}

if(apple === 3){
    pineapple = "eat healthier"
    console.log(pineapple);
} else {
    console.log("apple is not 3!")
}

// x 
// y
// f(x) = x+3

function changeBackgroundColor() {
 document.getElementById("el").style.backgroundColor = "orange";
}

changeBackgroundColor();

console.log(document.getElementById("el"));

document.getElementById("el").style.fontSize="42px";

