import { Input } from 'postcss';
import React from 'react';

const QuizOption = ({ option }) => {
    const { options } = option;
    return (
        <div>
            <ul>
                <li>{options}</li>
            </ul>

        </div>
    );
};

export default QuizOption;