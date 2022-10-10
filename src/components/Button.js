import React from 'react';


const Button = (props) => {
    return (
        <button className='bg-indigo-600 font-semibold text-white font-[Poppins]  py-2 px-4 rounded md:ml-2 ml-8 hover:bg-indigo-400 duration-500'>
            {props.children}

        </button>
    );
};

export default Button;