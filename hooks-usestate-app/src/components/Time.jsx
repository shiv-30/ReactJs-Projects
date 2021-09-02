import React, {useState} from 'react';

function Time() {

    setInterval(updateTime, 1000);
    
    const now = new Date().toLocaleTimeString();
    let [time, setTime] = useState(now);
    
    function updateTime() {
        const t = new Date().toLocaleTimeString();
        setTime(t);
    }

    return (
        <div>
            <h1>{time}</h1>
            <button onClick={updateTime}>Get Time</button>
        </div>
    );
}
export default Time;

// for Destructuring element : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment