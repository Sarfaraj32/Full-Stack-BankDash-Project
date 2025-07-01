```JSX part
async function initializeDefaultData() {
const count = await ExpenseStats.countDocuments();
if (count === 0) {
const defaultData = [
{ name: "Entertainment", value: 550, color: "#343C6A" },
{ name: "Bill Expense", value: 450, color: "#FC7900" },
{ name: "Investment", value: 650, color: "#FA00FF" },
{ name: "Others", value: 550, color: "#1814F3" },
];
await ExpenseStats.insertMany(defaultData);
console.log("Default data initialized");
}
}
initializeDefaultData();
```

```
RenderCustomizedLabel - done as barChartData.js
SimpleAreaChart - done as AreaChartData.js
CategoryPieChart - done as ExpenseStats.js
RenderLabel - done as transExpenseStats.js
RecentTransactions - done as TransactionTableData.js
InvestmentChart - done as InvestmentChartData.js
DebitCreditOverview - DebitCreditOverviewData.js


```
