import React, { useState, useEffect } from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import './First.css';

function TaskOne() {
  const [question, setQuestion] = useState(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/escape-room/data.json'); 
        console.log("Response status:", response.status); // Log the status
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuestion(data.questions[0]); // Access the first question
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!question) {
    return <div>Loading...</div>; // Loading state
  }

  const handleChange = (event) => {
    const value = event.target.value;
    const containsLetters = /[a-zA-Zא-ת]/.test(value);
    if (!containsLetters) {
      setInputValue(value);
    }
  };

  const trimmedInput = inputValue.replace(/\s+/g, '');
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
        placeholder="הכנס תשובה (כגון: 7,5)"
        style={{
          backgroundColor: isCorrect ? 'lightgreen' : (inputValue ? 'red' : '')
        }}
      />
    </div>
  );
}

export default TaskOne;
