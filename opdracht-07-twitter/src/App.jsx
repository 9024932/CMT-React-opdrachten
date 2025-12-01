import "./App.css";
import { useState } from "react";
import CreateMessage from "./components/CreateMessage";
import MessageList from "./components/MessageList";
function App() {
  const [textInput, setTextInput] = useState("");
  const [message, setMessage] = useState([]);

  return (
    <>
      <CreateMessage
        textInput={textInput}
        setTextInput={setTextInput}
        message={message}
        setMessage={setMessage}
      />
      <MessageList name={name} message={message} />
    </>
  );
}

export default App;
