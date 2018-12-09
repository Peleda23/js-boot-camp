const account = {
    name: 'Tomas Murinas',
    expenses: []
};      

// Expenses -> description, amount.
// addExpenses -> description, amount.
// getAccountSummary -> total up all expenses -> Tomas Murinas has $1267 in expenses.

const addExpenses = function(description, amount){
    return account.expenses.push({description, amount});
};

const getAccountSummary = function(account){
    account.forEach(function(acc, index){
        let test = expenses.amount;
        return test;
    });
};






addExpenses('Rent', 950);
addExpenses('Coffee', 2);
console.log(account);
console.log(getAccountSummary(account));