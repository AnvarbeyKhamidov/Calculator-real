

// document.addEventListener("keydown", function () {
//     alert("Klaviaturadan birorta tugma bosildi")
// });
//
//
// document.querySelector(".btn-danger").addEventListener("click",function () {
//    alert("Siz C tugmasiga hover qildingiz");
// });
//
//
// function showResult() {
//     alert("Natija shunday bo'ladi");
// }


let input = document.getElementById("screen");

// Amallarni yig'ib turish uchun
let getAmal = "";

// bu birinchi kiritilgan son ni dastlabki qiymati
let numberOne = 0;

// bu yerda amal bajarish uchun
let selectAmal = "";

// Bu sonlarni js ga olib kelish
function addNumber(number) {
    // alert(number);
 if (input.value === "0" && number !== "." || getAmal.length>0){
        input.value = number;
        getAmal = ""
    } else {
        input.value+=number
    }
}

// bu amallarni jsga olib kelish
function Action(action){
    // alert(action);
    getAmal = action;
    numberOne = input.value;
    selectAmal = action;

    if (getAmal === "root"){
        equal();
    } else if (getAmal === "plus-minus"){
        if (input.value>0){
            input.value*= -1
        }else {
            input.value*= +1
        }
    } else if (getAmal === "backspace"){
        if (input.value.length == 1){
            input.value = 0
        } else {
            input.value = input.value.slice(0,input.value.length-1)
        }
    }
}

function equal() {
    let numberTwo = input.value;
    let result = 0;

    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);

    if (selectAmal === "plus"){
        result = numberOne+numberTwo
    }else if (selectAmal === "minus"){
        result = numberOne - numberTwo
    }else if (selectAmal === "multiply"){
        result = numberOne*numberTwo
    } else if (selectAmal === "divide"){
        result = numberOne/numberTwo
    } else if (selectAmal === "root"){
        result = Math.sqrt(numberOne)
    } else if (selectAmal === "degree"){
        result = Math.pow(numberOne,numberTwo)
    } else if (selectAmal === "percent"){
        result = (numberTwo/100)*numberTwo
    }

    input.value = result;
}

// ikkita 00 uchun
function doubleZero(){
    input.value = input.value*100
}

// c uchun funksiya
function C(){
    input.value = 0
}

function addPoint (point){
    if (!input.value.includes(point)){
        input.value+=point;
    }
}


// bu klaviatura orqali sonlarni va amallarni js ga olib kelish
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 49){
        addNumber(1)
    } else if (e.keyCode === 50){
        addNumber(2)
    } else if (e.keyCode === 51){
        addNumber(3)
    } else if (e.keyCode === 52){
        addNumber(4)
    } else if (e.keyCode === 53){
        addNumber(5)
    } else if (e.keyCode === 54){
        addNumber(6)
    } else if (e.keyCode === 55){
        addNumber(7)
    } else if (e.keyCode === 56){
        addNumber(8)
    } else if (e.keyCode === 57){
        addNumber(9)
    } else if (e.keyCode === 48){
        addNumber(0)
    } else if (e.keyCode === 107){
        Action('plus')
    } else if (e.keyCode === 189){
        Action('minus')
    } else if (e.keyCode === 191){
        Action('divide')
    } else if (e.keyCode === 106){
        Action('multiply')
    } else if (e.keyCode === 187){
        equal();
    } else if (e.keyCode === 46){
        C();
    } else if (e.keyCode === 8){
        Action('backspace')
    } else if (e.keyCode === 190){
        addPoint(".")
    }
});