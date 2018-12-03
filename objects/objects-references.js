let myAccount = {
  name: 'Tomas',
  expenses: 0,
  income: 0
};

let addExpense = function(account, amount){
  account.expenses = account.expenses + amount;
};

let addIncome = function(account, amount){
  account.income = account.income + amount;
};

let resetAccount = function(account){
  account.expenses = 0;
  account.income = 0;
};

let getAccountSummary = function(account){
  let summary = `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`;
  return summary;
};

addIncome(myAccount, 957);
addExpense(myAccount, 439);
addExpense(myAccount, 2.50);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
