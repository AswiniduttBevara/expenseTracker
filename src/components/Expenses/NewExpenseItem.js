import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from '../FILTER/ExpensesFilter';
import Card from '../UI/Card';
import './NewExpenseItem.css';
import ExpenseChart from './ExpenseChart';

const NewExpenseItem = (props) => {
    const [year, setYear] = useState('2022');
    
    const yearChangeHandler = (changedYear) =>{
        // const year = yearChangeHandler;
        setYear(changedYear);        
        console.log(changedYear);
    }

    const filteredData = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    })

   

    return(
        <div>
            <Card className='expenses'>
                <ExpensesFilter selectedYear={year} onChangeYear={yearChangeHandler}/>
                <ExpensesList items={filteredData}/>
                < ExpenseChart expenses = {filteredData}/>
            </Card>
        </div>    
    )
}
export default NewExpenseItem;