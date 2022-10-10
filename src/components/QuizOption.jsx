import React from 'react';

const QuizOption = ({ option }) => {
    const { options, question } = option;

    return (
        <div className='outline-1border-solid border-2 border-indigo-300 p-3 rounded-md'>

            <h2>{question}</h2>

            {
                options.map(option => <ul>
                    <li>8 {options}</li>
                </ul>)
            }
        </div>
    );
};

export default QuizOption;



