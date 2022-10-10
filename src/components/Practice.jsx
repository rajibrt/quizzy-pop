import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOption from './QuizOption';

const Practice = () => {
    const quiz = useLoaderData();
    const { name, total } = quiz.data;
    console.log(quiz);
    return (
        <div className='my-6'>
            <h2 className='text-3xl font-bold text-indigo-600 text-center'>Quiz of {name}</h2>
            <div className='drop-shadow-xl my-3'>
                <h2 className='text-center font-semibold text-xl'>Total Quiz : {total} </h2>
            </div>
            <div className='outline-1border-solid border-2 border-indigo-200 md:w-3/6 w-5/6 m-auto rounded-md p-10'>
                <h2>Q. {quiz.data.questions.options.question}</h2>
                {
                    quiz.data.questions.map(option => <QuizOption
                        key={option.id}
                        option={option}
                    ></QuizOption>)
                }
            </div>
        </div>
    );
};

export default Practice;