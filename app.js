var totalBill = document.getElementById("bill");
var totalPerson = document.getElementById("persons");
var wrongMsg = document.getElementById("error");
var invalid = document.querySelector(".invalid");
var custom = document.getElementById("custom");
var percentStr;

var tips = Array.from(document.querySelectorAll("#tip"));

var tipPer = document.querySelector(".tip-amount");
var tipTotal = document.querySelector(".total-amount");

function checkInput() {
  if (totalPerson.value < 1) {
    wrongMsg.style.display = "block";
  }
}
function calcTip(percent) {
  let tipSingle = ((totalBill.value / 100) * percent) / totalPerson.value;

  let totalSingle = (Number(totalBill.value) + (totalBill.value / 100) * percent) /
  totalPerson.value;
  tipPer.textContent = tipSingle.toFixed(2);
  tipTotal.textContent = totalSingle.toFixed(2);
}
function customise() {
  custom.addEventListener("keyup", function () {
    checkInput();
    percentStr = custom.value;

    let percent = Number(percentStr);
    calcTip(percent);
  });
}

function changeColor(elem) {
  checkInput();
  tips.forEach((el) => (el.style.backgroundColor = "#00474b"));
  elem.style.backgroundColor = "#9FE8DF";
  percentStr = elem.textContent;

  let percent = parseInt(percentStr);
  calcTip(percent);
}
function reset() {
  location.reload();
}
