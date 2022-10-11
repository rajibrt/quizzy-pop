import React, { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';

const QuizOption = ({ option }) => {
    // console.log(option);
    const { options, question, id, questions } = option;
    console.log(option[0]);

    const [qa, setQa] = useState(`${question}`);
    useEffect(() => {
        const regex = /(<([^>]+)>)/ig;
        const newString = qa.replace(regex, '');
        setQa(newString);
    }, []);

    return (
        <div className='outline-1border-solid bg-indigo-600 border-2 border-indigo-300 p-3 rounded-lg min-w-full text-white'>
            <h2>Quiz No: </h2>
            <h2>{qa}</h2>

            {
                options.map(option =>

                    <div id={id} key={option.id}>  <ul>
                        <input name='quiz' value={id} type="radio" /> {option}

                    </ul></div>

                )
            }

            {/* <div>

                <input type="radio" id={question} name="fav_language" value={options} />
                <label for={question}>{options}</label><br />
            </div> */}

        </div>
    );
};

export default QuizOption;



