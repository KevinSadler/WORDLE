import React, { ButtonHTMLAttributes, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Modal from './modal';
import './App.css';

function Game() {
    const [attempts, updateAttempts] = useState<{ [key: string]: string }>({});
    const [currentGuess, setCurrentGuess] = useState<string>("");
    const [rowIndex, setRowIndex] = useState(1);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [inputDisabled, setInputDisabled] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const modalButtonRef = useRef<HTMLButtonElement | null>(null);
    const answer = 'BUILD';

    const handleInput = event => {
        let value: string = event.target.value;
        setCurrentGuess(value.toUpperCase());
    };

    const handleSave = () => {
        if (currentGuess.length === 5) {
            console.log("calling handle save");
            var newAttempt: { [key: string]: string } = {};
            for (var i = 0; i < currentGuess.length; i++) {
                var key = `r${rowIndex}c${i + 1}`;
                var value = currentGuess.charAt(i);
                newAttempt = ({...newAttempt, [key]: value});
                if (answer.charAt(i) === value) {
                    setClass(key, "correctPosition")
                } else if (answer.includes(value)) {
                    setClass(key, "incorrectPosition")
                } else {
                    setClass(key, "incorrect")
                }
            };
            let updatedAttempts = Object.assign(newAttempt, attempts);
            updateAttempts(updatedAttempts);
            if (currentGuess === answer) {
                handleWin();
                return;
            } else if (rowIndex === 6) {
                handleLoss();
                return;
            }
            setCurrentGuess("");
            setRowIndex(rowIndex + 1);
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSave();
        }
    };

    const handleWin = () => {
        // setGifToUse(winGif);
        setClass('appBody', 'winner');
        setModalOpen(true);
        setInputDisabled(true);
    }

    const handleLoss = () => {
        // setGifToUse(loseGif);
        setClass('appBody', 'loser');
        setModalOpen(true);
        setInputDisabled(true);
    }

    const handleNewGame = () => {
        setModalOpen(false);
        updateAttempts({});
        setCurrentGuess("");
        clearClasses();
        setRowIndex(1);
        setInputDisabled(false);
    }

    useEffect(() => {
        function setFocus(e) {
            if (!modalButtonRef.current?.contains(e.target) ) {
                inputRef.current?.focus();
                console.log("clicked outside button");
            }
        };
        document.addEventListener("click", setFocus);
        return () => document.removeEventListener("click", setFocus);
    });
    
    const setClass = useCallback((id: string, className: string) => 
        document.getElementById(id)?.classList.add(className),
    []);

    const clearClasses = () => {
        for (const [key, value] of Object.entries(attempts)) {
            document.getElementById(key)?.classList.remove('correctPosition', 'incorrectPosition', 'incorrect');
            console.log(`Removing classes from ${key}`);
        }
        document.getElementById('appBody')?.classList.remove('winner', 'loser');
    }

    const logValues = () => {
        console.log("attempts: ", attempts);
        console.log("current guess: ", currentGuess);
        console.log("row index: ", rowIndex);
    }

    return (
        <div className="App-body" id='appBody'>
            { modalOpen &&
                <Modal buttonRef={modalButtonRef} title={"You Win!"} buttonClick={() => handleNewGame()} buttonTitle={"New Game?"}></Modal> 
            }
            <h1>BBWordle</h1>
            <div className='row'>
                <div className='letterBox' id='r1c1'>{rowIndex === 1 ? currentGuess[0] : attempts["r1c1"]}</div>
                <div className='letterBox' id='r1c2'>{rowIndex === 1 ? currentGuess[1] : attempts["r1c2"]}</div>
                <div className='letterBox' id='r1c3'>{rowIndex === 1 ? currentGuess[2] : attempts["r1c3"]}</div>
                <div className='letterBox' id='r1c4'>{rowIndex === 1 ? currentGuess[3] : attempts["r1c4"]}</div>
                <div className='letterBox' id='r1c5'>{rowIndex === 1 ? currentGuess[4] : attempts["r1c5"]}</div>
            </div>
            <div className='row'>
                <div className='letterBox' id='r2c1'>{rowIndex === 2 ? currentGuess[0] : attempts["r2c1"]}</div>
                <div className='letterBox' id='r2c2'>{rowIndex === 2 ? currentGuess[1] : attempts["r2c2"]}</div>
                <div className='letterBox' id='r2c3'>{rowIndex === 2 ? currentGuess[2] : attempts["r2c3"]}</div>
                <div className='letterBox' id='r2c4'>{rowIndex === 2 ? currentGuess[3] : attempts["r2c4"]}</div>
                <div className='letterBox' id='r2c5'>{rowIndex === 2 ? currentGuess[4] : attempts["r2c5"]}</div>
            </div>
            <div className='row'>
                <div className='letterBox' id='r3c1'>{rowIndex === 3 ? currentGuess[0] : attempts["r3c1"]}</div>
                <div className='letterBox' id='r3c2'>{rowIndex === 3 ? currentGuess[1] : attempts["r3c2"]}</div>
                <div className='letterBox' id='r3c3'>{rowIndex === 3 ? currentGuess[2] : attempts["r3c3"]}</div>
                <div className='letterBox' id='r3c4'>{rowIndex === 3 ? currentGuess[3] : attempts["r3c4"]}</div>
                <div className='letterBox' id='r3c5'>{rowIndex === 3 ? currentGuess[4] : attempts["r3c5"]}</div>
            </div>
            <div className='row'>
                <div className='letterBox' id='r4c1'>{rowIndex === 4 ? currentGuess[0] : attempts["r4c1"]}</div>
                <div className='letterBox' id='r4c2'>{rowIndex === 4 ? currentGuess[1] : attempts["r4c2"]}</div>
                <div className='letterBox' id='r4c3'>{rowIndex === 4 ? currentGuess[2] : attempts["r4c3"]}</div>
                <div className='letterBox' id='r4c4'>{rowIndex === 4 ? currentGuess[3] : attempts["r4c4"]}</div>
                <div className='letterBox' id='r4c5'>{rowIndex === 4 ? currentGuess[4] : attempts["r4c5"]}</div>
            </div>
            <div className='row'>
                <div className='letterBox' id='r5c1'>{rowIndex === 5 ? currentGuess[0] : attempts["r5c1"]}</div>
                <div className='letterBox' id='r5c2'>{rowIndex === 5 ? currentGuess[1] : attempts["r5c2"]}</div>
                <div className='letterBox' id='r5c3'>{rowIndex === 5 ? currentGuess[2] : attempts["r5c3"]}</div>
                <div className='letterBox' id='r5c4'>{rowIndex === 5 ? currentGuess[3] : attempts["r5c4"]}</div>
                <div className='letterBox' id='r5c5'>{rowIndex === 5 ? currentGuess[4] : attempts["r5c5"]}</div>
            </div>
            <div className='row'>
                <div className='letterBox' id='r6c1'>{rowIndex === 6 ? currentGuess[0] : attempts["r6c1"]}</div>
                <div className='letterBox' id='r6c2'>{rowIndex === 6 ? currentGuess[1] : attempts["r6c2"]}</div>
                <div className='letterBox' id='r6c3'>{rowIndex === 6 ? currentGuess[2] : attempts["r6c3"]}</div>
                <div className='letterBox' id='r6c4'>{rowIndex === 6 ? currentGuess[3] : attempts["r6c4"]}</div>
                <div className='letterBox' id='r6c5'>{rowIndex === 6 ? currentGuess[4] : attempts["r6c5"]}</div>
            </div>
            <input 
                ref={inputRef} 
                id='inputField' 
                type={'text'} 
                value={currentGuess} 
                onChange={handleInput} 
                maxLength={5} 
                autoFocus 
                onKeyDown={(e) => handleKeyPress(e)}
                disabled={inputDisabled}>
            </input>
            {/* <button type='button' onClick={() => logValues()}>Log</button> */}
            <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        </div>

    );
};

export default Game;
