import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizzes = useLoaderData().data;
    console.log(quizzes);

    return (
        <div className='grid justify-center my-10'>
            <h2 className='text-center text-2xl font-bold text-indigo-500'>Statistics Chart</h2>
            <LineChart width={500} height={400} data={quizzes}>
                <Line type='name' dataKey='total' stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <CartesianGrid />
                <ResponsiveContainer />
            </LineChart>
        </div>
    );
};

export default Statistics;