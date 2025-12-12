import { useState } from "react";

const FlashCard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  function handleClick() {
    setShowAnswer(!showAnswer);
  }

  return (
    <div onClick={handleClick} className="w-64 h-40 bg-indigo-600 text-white rounded-2xl shadow-xl cursor-pointer select-none flex items-center justify-center text-center p-4 transition-transform duration-300 hover:scale-105">
      {showAnswer ? answer : question}
    </div>
  );
};

export default FlashCard;
