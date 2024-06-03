// import ExpenseItem from './components/ExpenseItem';
import { useState } from 'react';
import NewExpenseItem from './components/Expenses/NewExpenseItem';
import NewExpense from  './components/NewExpenses/NewExpense';

const dummyData = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
  const [expenses, setExpenses] = useState(dummyData);
  const addExpenseDataHandler = (expenseData) => {
    // console.log('addedData=>',expenseData);
    
    // console.log('date==>',new Date(expenseData.date));
    // console.log('year==>',new Date(expenseData.date).getFullYear());
    // console.log('date==>',expenseData.date.getFullYear());
    console.log(expenseData);
    setExpenses((prevData) => {
      console.log([expenseData, ...prevData]);
      return [expenseData, ...prevData]
    })
  }
  return (
    <>
      <NewExpense  onAddExpenseData = {addExpenseDataHandler}/>
      <NewExpenseItem items={expenses}/>
    </>
  );
}

export default App;
