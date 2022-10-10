import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOption from './QuizOption';

const Practice = () => {
    const { data } = useLoaderData();
    const { name, total } = data;
    console.log(data);
    return (
        <div className='my-6'>
            <h2 className='text-3xl font-bold text-indigo-600 text-center'>Quiz of {name}</h2>
            <div className='drop-shadow-xl my-3'>
                <h2 className='text-center font-semibold text-xl'>Total Quiz : {total} </h2>
            </div>
            <div className='relative grid justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-2 my-6 outline-1border-solid bg-indigo-200 border-2 border-indigo-400 md:w-4/6 w-5/6 m-auto rounded-md p-10'>
                {
                    data.questions.map(option => <QuizOption
                        key={option.id}
                        option={option}
                    ></QuizOption>)
                }


            </div>
        </div>
    );
};

export default Practice;