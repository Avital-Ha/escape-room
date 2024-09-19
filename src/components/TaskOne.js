import React, { useState } from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import TaskOneData from '../data';
import './First.css';

function TaskOne() {
  const question = TaskOneData.questions[0]; // Access the first question

  // Initialize state unconditionally
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    // Allow only numeric input (including negative numbers and commas), with optional spaces
    if (/^[-\s\d]*,-?[\s\d]*$/.test(value) || value === '') {
      setInputValue(value);
    }
  };

  // Handle case where question is not found
  if (!question) {
    return <p>שאלה לא נמצאה</p>; // Fallback if no question is found
  }

  // Validation Logic, trimming whitespace
  const trimmedInput = inputValue.replace(/\s+/g, ''); // Remove all spaces
  const isCorrect = trimmedInput === question.correctAnswer.replace(/\s+/g, '') || 
                    trimmedInput === question.correctAnswer2.replace(/\s+/g, '');

  return (
    <div className="task-one">
      <h1>עליך לענות על השאלה על מנת לקבל ספרה לקוד</h1>
      <p className='question'>{question.text}</p>
      <BlockMath style={{ fontSize: '40px', display: 'block', textAlign: 'center' }}>
        {question.math}
      </BlockMath>
      <p className='option1'>{question.option}</p>
      <input 
        className='option1Ans'
        value={inputValue}
        onChange={handleChange}
        placeholder="הכנס תשובה (כגון: 4,-4)"
        style={{
          backgroundColor: isCorrect ? 'lightgreen' : (inputValue ? 'red' : '')
        }}
      />
    </div>
  );
}

export default TaskOne;