import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from './Hero';
import Quiz from './Quiz'


const Home = () => {
    const quizzes = useLoaderData();

    return (
        <div>
            <Hero></Hero>
            <div className='  bg-slate-300 py-10'>
                <h2 className='text-3xl font-bold text-indigo-600 text-center'>Total Quiz : {quizzes.data.length} </h2>
                <div className='relative grid justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-4 my-6'>
                    {
                        quizzes.data.map(quiz => <Quiz
                            key={quiz.id}
                            quiz={quiz}
                        ></Quiz>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;