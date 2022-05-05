// get expenses input value
function getExpensesInput(expensesId) {
  // expenses
  let input = document.getElementById(expensesId);
  let expenses = parseFloat(input.value);
  // input.value = "";
  return expenses;
}

// get total expenses
function getTotalExpenses() {
  // get food expenses
  let foodExpenses = getExpensesInput("food-input");
  // get rent expenses
  let rentExpenses = getExpensesInput("rent-input");
  // get clothes expenses
  let clothesExpenses = getExpensesInput("clothes-input");

  // get total expenses
  let totalExpenses = foodExpenses + rentExpenses + clothesExpenses;
  return totalExpenses;
}

// get current balance
function getCurrentBalance() {
  let income = getExpensesInput("income-input");
  let totalExpenses = getTotalExpenses();

  // show total expenses field
  let showTotalExpenses = document.getElementById("total-expenses");
  let showTotalExpensesValue = parseFloat(showTotalExpenses.innerText);
  let currentBalance = income - totalExpenses;
  return currentBalance;
}

// add event handler to the calculate button
let calculateButton = document.getElementById("calculate-btn");
calculateButton.addEventListener("click", function () {
  // get income value
  let income = getExpensesInput("income-input");

  // total expenses
  let totalExpenses = getTotalExpenses();

  // show total expenses field
  let showTotalExpenses = document.getElementById("total-expenses");
  let showTotalExpensesValue = parseFloat(showTotalExpenses.innerText);
  let currentBalance = getCurrentBalance();

  if (isNaN(income) == true) {
    showTotalExpenses.innerText = `fill all the field`;
    showTotalExpenses.style.fontSize = "12px";
    showTotalExpenses.style.color = "red";
    showTotalExpenses.style.fontWeight = "400";
  } else if (isNaN(totalExpenses) != true) {
    showTotalExpenses.innerText = totalExpenses;
  } else {
    showTotalExpenses.innerText = `fill all the field`;
    showTotalExpenses.style.fontSize = "12px";
    showTotalExpenses.style.color = "red";
    showTotalExpenses.style.fontWeight = "400";
  }

  // show balance
  let showBalance = document.getElementById("balance");
  let balance = parseFloat(showBalance.innerText);
  if (totalExpenses > income) {
    showBalance.innerText = `fill all the field`;
    showBalance.style.color = "red";
    showBalance.style.fontSize = "12px";
    showBalance.style.fontWeight = "400";
  } else if (isNaN(income) == true) {
    showBalance.innerText = `fill all the field`;
    showBalance.style.color = "red";
    showBalance.style.fontSize = "12px";
    showBalance.style.fontWeight = "400";
  } else if (isNaN(totalExpenses) == true) {
    showBalance.innerText = `fill all the field`;
    showBalance.style.color = "red";
    showBalance.style.fontSize = "12px";
    showBalance.style.fontWeight = "400";
  } else {
    showBalance.innerText = currentBalance;
  }
});

// add event listener to the save button
let saveButton = document.getElementById("save");
saveButton.addEventListener("click", function () {
  // get income value
  let income = getExpensesInput("income-input");

  // total expenses
  let totalExpenses = getTotalExpenses();

  // show total expenses field
  let currentBalance = getCurrentBalance();

  // get the input value from save input field
  let saveInput = document.getElementById("save-input");
  let saveValue = parseFloat(saveInput.value);

  // get total save
  let totalSave = (currentBalance * saveValue) / 100;

  // remaining balance
  let remainingAmount = currentBalance - totalSave;
  let remainingBalance = parseFloat(remainingAmount.toFixed(2));

  // show total saving value
  let showSavingAmount = document.getElementById("saving-amount");
  let savingAmount = parseFloat(showSavingAmount.innerText);
  if (saveValue > 100) {
    showSavingAmount.innerText = `fill all the field`;
    showSavingAmount.style.color = "red";
    showSavingAmount.style.fontSize = "12px";
    showSavingAmount.style.fontWeight = "400";
  } else if (isNaN(totalSave) == true) {
    showSavingAmount.innerText = `fill all the field`;
    showSavingAmount.style.color = "red";
    showSavingAmount.style.fontSize = "12px";
    showSavingAmount.style.fontWeight = "400";
  } else {
    showSavingAmount.innerText = totalSave;
  }

  // show remaining balance
  let showRemainingBalance = document.getElementById("remaining-balance");
  let showBalance = parseFloat(showRemainingBalance.innerText);
  if (isNaN(savingAmount) == true) {
    showRemainingBalance.innerText = `fill all the field`;
    showRemainingBalance.style.color = "red";
    showRemainingBalance.style.fontSize = "12px";
    showRemainingBalance.style.fontWeight = "400";
  } else if (isNaN(income) == true) {
    showRemainingBalance.innerText = `fill all the field`;
    showRemainingBalance.style.color = "red";
    showRemainingBalance.style.fontSize = "12px";
    showRemainingBalance.style.fontWeight = "400";
  } else if (isNaN(totalExpenses) == true) {
    showRemainingBalance.innerText = `fill all the field`;
    showRemainingBalance.style.color = "red";
    showRemainingBalance.style.fontSize = "12px";
    showRemainingBalance.style.fontWeight = "400";
  } else if (remainingBalance < 0) {
    showRemainingBalance.innerText = `fill all the field`;
    showRemainingBalance.style.color = "red";
    showRemainingBalance.style.fontSize = "12px";
    showRemainingBalance.style.fontWeight = "400";
  } else {
    showRemainingBalance.innerText = remainingBalance;
  }
});
