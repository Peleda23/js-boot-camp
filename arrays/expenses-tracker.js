const account = {
    name: 'Tomas Murinas',
    expenses: []
};      

// Expenses -> description, amount.
// addExpenses -> description, amount.
// getAccountSummary -> total up all expenses -> Tomas Murinas has $1267 in expenses.

account.addExpenses('Rent', 950);
account.addExpenses('Coffee', 2);
console.log(account.getAccountSummary());