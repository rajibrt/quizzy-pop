import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from './Hero';
import Quiz from './Quiz'


const Home = () => {
    const quizzes = useLoaderData();
    console.log(quizzes.data.length);

    return (
        <div>
            <Hero></Hero>
            <div>
                <h2>Total Quiz : {quizzes.data.length} </h2>


                <div className='relative grid content-around gap-5 sm:grid-cols-2 lg:grid-cols-4'>
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