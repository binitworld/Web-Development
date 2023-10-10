import React, { useState } from 'react';

function AgeChecker() {
    const [age, setAge] = useState('');
    const [output1, setOutput1] = useState('');
    const [output2, setOutput2] = useState('');
    const [output3, setOutput3] = useState('');
    const [output4, setOutput4] = useState('');

    const checkAge = () => {
        let parsedAge = parseInt(age);

        let newOutput1 = "Your age is: " + parsedAge;
        let newOutput2 = "";
        let newOutput3 = "";
        let newOutput4 = "";

        if (parsedAge > 0) {
            newOutput2 = "This is a valid age";

            if (parsedAge < 18) {
                newOutput3 = "You are a teenager, so you can't drive";
            } else {
                newOutput4 = "You are an adult, so you can drive";
            }
        } else {
            newOutput2 = "This is not a valid age";
        }

        setOutput1(newOutput1);
        setOutput2(newOutput2);
        setOutput3(newOutput3);
        setOutput4(newOutput4);
    };

    return (
        <div>
            <h1>Age Checker</h1>
            <input
                type="number"
                placeholder="Enter Your Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <button onClick={checkAge}>Check Age</button>
            <div>{output1}</div>
            <div>{output2}</div>
            <div>{output3}</div>
            <div>{output4}</div>
        </div>
    );
}

export default AgeChecker;
