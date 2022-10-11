import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizzes = useLoaderData()
    console.log(quizzes.data);

    return (
        <div>
            <LineChart width={500} height={400} data={quizzes.data[0]}>
                <Line type={quizzes.data[2].name} dataKey="" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Statistics;