import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizzes = useLoaderData().data;
    console.log(quizzes);

    return (
        <div>
            <LineChart width={500} height={400} data={quizzes}>
                <Line type='name' dataKey='total' stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Statistics;