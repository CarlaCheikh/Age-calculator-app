//select input elements
let inputDay = document.querySelector("#day");
let inputMonth = document.querySelector("#month");
let inputYear = document.querySelector("#year");

//select output elements
let isValid= false;

let outputDay = document.querySelector("#days");
let outputMonth = document.querySelector("#months");
let outputYear = document.querySelector("#years");

//select error elements
let errorDay = document.querySelector(".error-day");
let errorMonth = document.querySelector(".error-month");
let errorYear = document.querySelector(".error-year");

let label1 = document.querySelector(".label1");
let label2 = document.querySelector(".label2");
let label3 = document.querySelector(".label3");

//select submit button
let submit = document.getElementById("submit");

//submit

submit.addEventListener("click", calculateDate);

//input day 
inputDay.addEventListener("input" , (e) => {
   if(+inputDay.value > 31) {
    errorDay.textContent = "It must be between 1 and 31";
    label1.style.color = "hsl(0, 100%, 67%)";
    inputDay.style.borderColor = "hsl(0, 100%, 67%)";
    isValid="false";
      return;
    } else if (!+inputDay.value) {
      errorDay.textContent = "This feild is required";
      label1.style.color = "hsl(0, 100%, 67%)";
      inputDay.style.borderColor = "hsl(0, 100%, 67%)";
      isValid="false";
      return;
    } else {
      errorDay.textContent = "";
      isValid="true";
    }
});

//input month
inputMonth.addEventListener("input" , (e) => {
  if(+inputMonth.value > 12) {
   errorMonth.textContent = "It must be between 1 and 12";
   label2.style.color = "hsl(0, 100%, 67%)";
   inputMonth.style.borderColor = "hsl(0, 100%, 67%)";
   isValid="false";
   return;
  } else if (!+inputMonth.value) {
    errorMonth.textContent = "This feild is required";
    label2.style.color = "hsl(0, 100%, 67%)";
    inputMonth.style.borderColor = "hsl(0, 100%, 67%)";
    isValid="false";
    return;
  } else {
    errorMonth.textContent = "";
    isValid="true";
  }
});

//date & time
const today = new Date();
let year = today.getFullYear();

//input year
inputYear.addEventListener("input" , (e) => {
  if(+inputYear.value > year) {
   errorYear.textContent = "It must a valid year";
   label3.style.color = "hsl(0, 100%, 67%)";
   inputYear.style.borderColor = "hsl(0, 100%, 67%)";
   isValid="false";
   return;
  } else if (!+inputYear.value) {
    errorYear.textContent = "This feild is required";
    label3.style.color = "hsl(0, 100%, 67%)";
    inputYear.style.borderColor = "hsl(0, 100%, 67%)";
    isValid="false";
    return;
   }  else {
    errorYear.textContent = "";
    isValid="true";
  }
});


let day = today.getDate();


let month = today.getMonth() + 1;


const months = [31,28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


function calculateDate(e) {
  e.preventDefault();
  if (isValid) {
    if (inputDay.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (inputMonth.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - inputDay.value;
    const m = month - inputMonth.value;
    const y = year - inputYear.value;

    outputDay.innerHTML = d;
    outputMonth.innerHTML = m;
    outputYear.innerHTML = y;
  } else {

    errorDay.textContent = "This feild is required";
    label1.style.color = "hsl(0, 100%, 67%)";
    inputDay.style.borderColor = "hsl(0, 100%, 67%)";
    errorMonth.textContent = "This feild is required";
    label2.style.color = "hsl(0, 100%, 67%)";
    inputMonth.style.borderColor = "hsl(0, 100%, 67%)";
    errorYear.textContent = "This feild is required";
    label3.style.color = "hsl(0, 100%, 67%)";
    inputYear.style.borderColor = "hsl(0, 100%, 67%)";
  }
}

