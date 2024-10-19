import React from 'react';

const Button = ({ text, onClick }) => {
    return (
        <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 shadow-sm shadow-black w-full' onClick={()=>{
            onClick()
        }}>
            {text}
          </button>
    );
};

export default Button;