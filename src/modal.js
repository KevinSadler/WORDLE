import React from 'react';

const Modal = ({buttonRef, title, buttonTitle, buttonClick}) => {
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='title'>{title}</div>
                <div className='body'>
                    {/* <img src={imgSrc} /> */}
                </div>
                <div className='footer'>
                    <button ref={buttonRef} onClick={buttonClick}>{buttonTitle}</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;