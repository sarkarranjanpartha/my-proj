import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enterAmount: "",
  //     enterDate: "",
  //   });

  const titleChangeHandler = (event) => {
    // console.log(event);
    setEnteredTitle(event.target.value);

    // setUserInput({
    //   ...setUserInput,
    //   enteredTitle: event.terget.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.terget.value };
    // });
  };
  const amuntChangeHandler = (event) => {
    // console.log(event);
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...setUserInput,
    //   enterAmount: event.terget.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enterAmount: event.terget.value };
    // });
  };
  const dateChangeHandler = (event) => {
    // console.log(new Date(event.target.value));
    // let selectedDate = new Date(event.target.value);
    // console.log(selectedDate);
    setEnteredDate(new Date(event.target.value));

    // setUserInput({
    //   ...setUserInput,
    //   enterDate: event.terget.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enterDate: event.terget.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amuntChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
