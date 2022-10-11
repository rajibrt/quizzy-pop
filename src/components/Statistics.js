import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizzes = useLoaderData().data;

    return (
        <div className='grid justify-center md:py-10 py-1 min-w-full'>
            <h2 className='text-center text-2xl font-bold text-indigo-500 md:my-10 my-2'>Statistics Chart</h2>
            <ResponsiveContainer width={460} height={360}>
                <LineChart data={quizzes}>
                    <Line type='name' dataKey='total' stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid />
                    <Legend />
                </LineChart>
            </ResponsiveContainer >
        </div >
    );
};

export default Statistics;