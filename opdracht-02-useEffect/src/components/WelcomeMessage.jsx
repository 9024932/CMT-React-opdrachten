import { useEffect, useState  } from "react";


function welcome() {
    const [message, setMessage] = useState('');

useEffect(() => {
const currenTime = new Date(); 
const hours = currenTime.getHours();
let newMessage = "";

if (hours < 12) {
    newMessage = "Goedemorgen";
} else if (hours < 18) {
    newMessage = "Goedemiddag";
} else {
    newMessage = "Goedenavond"
}

    setMessage(newMessage);
}, []);

return (
    <div>
<h1>{message}</h1>
    </div>
);
};

export default welcome;