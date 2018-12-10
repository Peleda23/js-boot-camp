const account = {
    name: 'Tomas Murinas',
    expenses: [],
    income: [],
    addExpenses: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        });
    },
    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        });
    },
    getAccountSummary: function(){
        let totalExpenses = 0;
        let totalIncome = 0;
        let total = 0;
        this.expenses.forEach(function(expenses){
            totalExpenses = totalExpenses + expenses.amount;
        });
        
        this.income.forEach(function(income){
            totalIncome = totalIncome + income.amount;
        });

        total = totalIncome - totalExpenses;

        return `${this.name} has a balance of $${total}. $${totalIncome} in income. $${totalExpenses} in expenses.`;
    }
};      

// 1. add income array to account.
// 2. addIncome method -> description, amount.
// 3. Tweak getAccountSummary.

// Tomas Murinas has a balance of 10$. 100$ in income. 90$ in expenses.


account.addExpenses('Rent', 950);
account.addExpenses('Coffee', 2);
account.addIncome('Job', 1000);
console.log(account.getAccountSummary());