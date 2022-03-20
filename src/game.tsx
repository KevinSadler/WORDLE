import React, { useEffect, useState } from 'react';
import './App.css';

function Game() {
    const [attempts, updateAttempts] = useState<{ [key: string]: string }>({});
    const [currentGuess, setCurrentGuess] = useState<string>("");
    const [rowIndex, setRowIndex] = useState(1);

    // useEffect(() => {
    //     if (attempts.length === 6) {
    //         resetGame();
    //     }
    // })

    const handleInput = event => {
        setCurrentGuess(event.target.value);
        // var newState = {} as any;
        for (var i = 0; i < event.target.value.length; i++) {
            var myKey = `r${rowIndex}c${i + 1}`;
            var value = event.target.value.charAt(i);
            // newState[myKey] = value;
            updateAttempts({...attempts, [myKey]: value});
        }
        // console.log("newState: ", newState);
    };

    // const handleSave = () => {
    //     if (currentGuess.length === 5) {
    //         const newList = [
    //             ...attempts, currentGuess
    //         ]
    //         updateAttempts(newList);
    //         setCurrentGuess("");
    //     }
    // }

    // const resetGame = () => {
    //     setCurrentGuess("");
    //     updateAttempts([]);
    // }

    return (
        <div className="App-body">
            <div className='row'>
                <div className='letterBox' id='r1c1'>{attempts["r1c1"]}</div>
                <div className='letterBox' id='r1c2'>{attempts["r1c2"]}</div>
                <div className='letterBox' id='r1c3'>{attempts["r1c3"]}</div>
                <div className='letterBox' id='r1c4'>{attempts["r1c4"]}</div>
                <div className='letterBox' id='r1c5'>{attempts["r1c5"]}</div>
            </div>
            <div className='row'>
                <div className='letterBox' id='r2c1'>{attempts["r2c1"]}</div>
                <div className='letterBox' id='r2c2'>{attempts["r2c2"]}</div>
                <div className='letterBox' id='r2c3'>{attempts["r2c3"]}</div>
                <div className='letterBox' id='r2c4'>{attempts["r2c4"]}</div>
                <div className='letterBox' id='r2c5'>{attempts["r2c5"]}</div>
            </div>
            <div className='row'>
                <div className='letterBox' id='r3c1'>{attempts["r3c1"]}</div>
                <div className='letterBox' id='r3c2'>{attempts["r3c2"]}</div>
                <div className='letterBox' id='r3c3'>{attempts["r3c3"]}</div>
                <div className='letterBox' id='r3c4'>{attempts["r3c4"]}</div>
                <div className='letterBox' id='r3c5'>{attempts["r3c5"]}</div>
            </div>
            <div className='row'>
                <div className='letterBox' id='r4c1'>{attempts["r4c1"]}</div>
                <div className='letterBox' id='r4c2'>{attempts["r4c2"]}</div>
                <div className='letterBox' id='r4c3'>{attempts["r4c3"]}</div>
                <div className='letterBox' id='r4c4'>{attempts["r4c4"]}</div>
                <div className='letterBox' id='r4c5'>{attempts["r4c5"]}</div>
            </div>
            <div className='row'>
                <div className='letterBox' id='r5c1'>{attempts["r5c1"]}</div>
                <div className='letterBox' id='r5c2'>{attempts["r5c2"]}</div>
                <div className='letterBox' id='r5c3'>{attempts["r5c3"]}</div>
                <div className='letterBox' id='r5c4'>{attempts["r5c4"]}</div>
                <div className='letterBox' id='r5c5'>{attempts["r5c5"]}</div>
            </div>
            <div className='row'>
                <div className='letterBox' id='r6c1'>{attempts["r6c1"]}</div>
                <div className='letterBox' id='r6c2'>{attempts["r6c2"]}</div>
                <div className='letterBox' id='r6c3'>{attempts["r6c3"]}</div>
                <div className='letterBox' id='r6c4'>{attempts["r6c4"]}</div>
                <div className='letterBox' id='r6c5'>{attempts["r6c5"]}</div>
            </div>
            <h1>Current Guess: {currentGuess}</h1>
            <input type={'text'} value={currentGuess} onChange={handleInput} maxLength={5}></input>
            {/* <button type='button' onClick={() => handleSave()}>Save</button> */}
            <button type='button' onClick={() => console.log(attempts)}>Log</button>
            {/* <button type='button' onClick={() => console.log(currentGuess)}>current guess</button> */}
        </div>
    );
};

export default Game;
