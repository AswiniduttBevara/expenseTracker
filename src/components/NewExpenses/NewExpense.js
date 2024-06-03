import { useState } from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (expenseData) => {
        const dataInNewExpense = {
            ...expenseData,
            id:Math.random().toString()
        };
        props.onAddExpenseData(dataInNewExpense);
        setIsEditing(false);
    }
   const startEditing = () => {
    setIsEditing(true);
   }
   const cancelEditing = () => {
    setIsEditing(false);
   }
    return(
        <div className='new-expense'>
           {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
           {isEditing && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelEditing} />}
        </div>
    );
}

export default NewExpense;