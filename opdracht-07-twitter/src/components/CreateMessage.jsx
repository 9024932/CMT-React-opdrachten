import { useState } from "react";

const CreateMessage = ({ textInput, setTextInput, message, setMessage }) => {
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const SubmitMessageHandler = (e) => {
    e.preventDefault();

    setMessage([...message, textInput]);
    setTextInput("");
  };

  return (
    <form action="">
      <textarea
        value={textInput}
        cols="50"
        rows="5"
        onChange={userInputHandler}
      ></textarea>
      <button onClick={SubmitMessageHandler}>Toevoegen</button>
    </form>
  );
};

export default CreateMessage;
