import React, { useEffect, useState } from 'react';

const QuizOption = ({ option }) => {
    // console.log(option);
    const { options, question, id } = option;
    console.log(option);

    const [qa, setQa] = useState(`${question}`);
    useEffect(() => {
        const regex = /(<([^>]+)>)/ig;
        const newString = qa.replace(regex, '');
        setQa(newString);
    }, []);

    return (
        <div className='outline-1border-solid bg-indigo-600 border-2 border-indigo-300 p-3 rounded-lg min-w-full text-white'>
            <h2>{qa}</h2>
            {/* {
                options.map(option =>

                    <Form key={option.id}>  <ul>
                        <input type="radio" /> {option}

                    </ul></Form>

                )
            } */}
            <div>

                <input type="radio" id={question} name="fav_language" value={options} />
                <label for={question}>{options}</label><br />
            </div>

        </div>
    );
};

export default QuizOption;



