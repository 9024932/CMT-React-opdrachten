import React, { useEffect, useState } from 'react';

function clock(){
    const [currenTime, setCurrentTime] = useState(new Date());

useEffect(() => {
    const intervalID = setInterval(() =>{
        setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
});

return (
    <div>
        <h2>huidige tijd:</h2>
        <p>{currenTime.toLocaleTimeString()}</p>
    </div>
)

}

export default clock;