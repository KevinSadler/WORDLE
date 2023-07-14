import React from 'react';

const Modal = ({buttonRef, title, buttonTitle, buttonClick}) => {
    return (
        <div className='modal-background'>
            <div className='modalContainer'>
                <div className='title'></div>
                <div className='body'>
                    <button className='new-game-button' ref={buttonRef} onClick={buttonClick}>{buttonTitle}</button>
                </div>
                <div className='footer'>
                </div>
            </div>
        </div>
    );
}

export default Modal;