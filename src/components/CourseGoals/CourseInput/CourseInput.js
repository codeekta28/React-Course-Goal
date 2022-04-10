import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // before passing the value i need to check if value is coorect or not
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue((prevState) => {
      return "";
    });
  };
  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${!isValid?"invalid":""}`}> */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label htmlFor="goal">Course Goal</label>
        <input
        name="goal"
        value={enteredValue}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
export default CourseInput;
