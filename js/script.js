// income value
let incomeInput = document.getElementById("income-input");

// food expense
let foodExpense = document.getElementById("food-input");

// rent expense
let rentExpense = document.getElementById("rent-input");

// clothes expense
let clothesExpense = document.getElementById("clothes-input");

// saveing amount input
let saveInput = document.getElementById("save-input");

// add event handler to the calculate button
let calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", function () {
  // get the value of total income
  let incomeValueStr = incomeInput.value;
  let incomeValue = parseFloat(incomeValueStr);

  // get the value of food expense
  let foodExpenseValueStr = foodExpense.value;
  let foodExpenseValue = parseFloat(foodExpenseValueStr);

  // get the value of rent expense
  let rentExpenseValueStr = rentExpense.value;
  let rentExpenseValue = parseFloat(rentExpenseValueStr);

  // get the value of clothes expense
  let clothesExpenseValueStr = clothesExpense.value;
  let clothesExpenseValue = parseFloat(clothesExpenseValueStr);

  // add the value of food, rent and clothes expenses
  let totalExpensesValue =
    foodExpenseValue + rentExpenseValue + clothesExpenseValue;

  // show the value of total expenses
  let showExpenses = document.getElementById("total-expenses");
  let showExpensesValueStr = showExpenses.innerText;
  let showExpensesValue = parseFloat(showExpensesValueStr);
  showExpenses.innerText = totalExpensesValue;

  // get current balance
  let currentBalance = incomeValue - totalExpensesValue;

  // show current balance after expenses
  let showBalance = document.getElementById("balance");
  let showBalanceValueStr = showBalance.innerText;
  let currentBalanceValue = parseFloat(showBalanceValueStr);
  showBalance.innerText = currentBalance;

  // clear the input fields
  incomeInput.value = "";
  foodExpense.value = "";
  rentExpense.value = "";
  clothesExpense.value = "";

  // return the current balance
  return currentBalance;
});

// add event handler to the save button
let saveButton = document.getElementById("save");
saveButton.addEventListener("click", function () {
  let saveInputValueStr = saveInput.value;
  let saveInputValue = parseFloat(saveInputValueStr);
  console.log(saveInputValue);
});
