import React from "react";

const Intro = ({ animation, handleKeypress, handleAnimation, handleName }) => {
  return (
    <div className='intro' style={{ animation: animation }}>
      <h1 className='intro__heading'>Please Tell Your Name: </h1>
      <input
        type='text'
        className='intro__input'
        onChange={handleName}
        onKeyPress={handleKeypress}
      />
      <button className='button' onClick={handleAnimation}>
        Let's Go
      </button>
    </div>
  );
};

export default Intro;
