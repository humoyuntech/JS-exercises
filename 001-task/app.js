"use strict";

let myTaskOne = document.querySelector(".task__one");
let myTaskTwo = document.querySelector(".task__two");
let myTaskThree = document.querySelector(".task__three");
let myTaskFour = document.querySelector(".task__four");

myTaskOne.addEventListener("click", taskOne);
myTaskTwo.addEventListener("click", taskTwo);
myTaskThree.addEventListener("click", taskThree);
myTaskFour.addEventListener("click", taskFour);



function taskOne() {
    let a = prompt("Raqam kiriting", "");
    
    if (a === null || a === "") {
        alert("Siz raqam kiritmadingiz qayta urunib ko'ring 😈");
      } else if (isNaN(a % 2)) {
        alert("Siz raqam kiritmadingiz qayta urunib ko'ring 😈");
      } else if (a % 2 === 0) {
        alert('Raqam juft')
      } else {
        alert('Raqam toq')
      }
}

function taskTwo() {
    let a =prompt("Ballni kiriting", "");
    
    if (a === null || a === ""){
        alert("Siz raqam kiritmadingiz qayta urunib ko'ring 😈");
    }else if (isNaN(a % 2)) {
        alert("Siz raqam kiritmadingiz qayta urunib ko'ring 😈");
    }else if(a < 50){
        alert("faild 😨 💩")
    }else if(a >= 50 &&  a <= 60){
        alert("C 😕")
    }else if(a >= 61 &&  a <= 85){
        alert("B 😊")
    }else if(a >= 86 &&  a <= 100){
        alert("A 😎 👍")
    }else if(a > 100){
        alert("100 ortiq ball kiritish mumkin emas 😤")
    }

}



function taskThree() {
    let result =prompt("Ushbu mevalardan birini kiriting: Olma, Nok, Tarvuz, Pamidor", "");
    console.log(result);

    if(result === null || result === ""){
        alert("Siz meva kiritmadingiz, qayta urunib ko'ring 😈");
    }else if(result == "Olma" || result == "olma"){
        alert("10 000");
    }else if(result == "Nok" || result == "nok"){
        alert("12 000");
    }else if(result == "Tarvuz" || result == "tarvuz"){
        alert("20 000");
    }else if(result == "Pamidor" || result == "pamidor"){
        alert("Bunday meva yo'q 😭");
    }else{
        alert("Bunday meva yo'q 😭");
    }

};


function taskFour() {

    let a = prompt("Raqam kiriting", "");

    if (a === null || a === ""){
        alert("Siz raqam kiritmadingiz qayta urunib ko'ring 😈");
    }else if (isNaN(a % 2)) {
        alert("Siz raqam kiritmadingiz qayta urunib ko'ring 😈");
    }else if(a % 3 === 0 && a % 5 === 0){
        alert("son 3 va 5 ga ham bo'lidi");
    }else if(a % 5 === 0){
        alert("5-ga bo'linadi 😃")
    }else if(a % 3 === 0){
        alert("3-ga bo'linadi 😃")
    }else{
        alert("son 3 va 5 ga ham bo'linmaydi 😭")
    }
    console.log(a % 3);
    console.log(a % 5);
}

console.log(8 % 3);
console.log(18 % 3);














