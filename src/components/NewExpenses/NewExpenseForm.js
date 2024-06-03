import './NewExpenseForm.css';
import { useState } from 'react';

const NewExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // })
    
    const inputTitleHandler = (event) => {
        setEnteredTitle(event.target.value);
        // console.log(event.target.value);
        // setUserInput({
        //     enteredTitle : event.target.value,
        //     enteredAmount : '',
        //     enteredDate : ''
        // })
        // setUserInput((prev) => {
        //     return { ...prev,
        //         enteredTitle : event.target.value
        //     }
        // })
    }
    const inputAmountHandler = (event) => {
        setEnteredAmount(event.target.value);
        // console.log(event.target.value);
        // setUserInput((prev) => {
        //     return { ...prev,
        //         enteredAmount : event.target.value
        //     }
        // })
    }
    const inputDateHandler = (event) => {
       
        setEnteredDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        // console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={enteredTitle} onChange={inputTitleHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={inputAmountHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' min='01-01-2020' max='12-31-2024' value={enteredDate} onChange={inputDateHandler} />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={props.onCancel}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>      
            </form>               
        </>    
    );
}

export default NewExpenseForm;