import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizOption = ({ data, index }) => {
    console.log(data);
    const { options, question, id, correctAnswer, questions } = data;

    const [qa, setQa] = useState(`${question}`);
    useEffect(() => {
        const regex = /(<([^>]+)>)/ig;
        const newString = qa.replace(regex, '');
        setQa(newString);
    }, [qa]);

    const handleAnswers = option => {
        const correctAns = correctAnswer;
        console.log(correctAns);
        if (option === correctAns) {
            toast("Correct Answer!");
        }
        else {
            toast("Wrong Answer");
        }
    }

    // const answer = () => {

    // }

    return (
        <div className='outline-1border-solid bg-indigo-600 border-2 border-indigo-300 p-3 rounded-lg min-w-full text-white'>

            <div className='flex justify-between'>

                <h2 className='rounded-md py-1 px-2 font-bold border-dotted border-2 border-white'>Quiz No: {index + 1} </h2>

                {/* <div onClick={() => handleAnswers()}><ion-icon name="eye"></ion-icon></div> */}
            </div>
            <h2>Q. {qa} </h2>

            {
                options.map((option, index) =>
                    <div className='p-2 bg-indigo-500 rounded-lg my-2 items-center' id={id} key={Math.random().toString(36).substr(2, 9)}>
                        <input key={index} className='mr-2 cursor-pointe w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-6 dark:bg-gray-600 dark:border-gray-500 items-center' onClick={() => handleAnswers(option)} name={id} value={id} type="radio" />
                        {option}
                    </div>
                )
            }

            {/* <div>

                <input type="radio" id={question} name="fav_language" value={options} />
                <label for={question}>{options}</label><br />
            </div> */}

        </div >
    );
};

export default QuizOption;



