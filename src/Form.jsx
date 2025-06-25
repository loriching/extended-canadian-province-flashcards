import './Form.css';
import { useState } from 'react';

function Form({correctAnswer, onCorrect}) {
    const [answer, setAnswer] = useState("");

    const handleChange = (event) => {
        setAnswer(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const cleanedAnswer = correctAnswer.trim().toLowerCase();
        const cleanedUserInput = answer.trim().toLowerCase();

        if (cleanedAnswer === cleanedUserInput) {
            onCorrect("Correct answer.");
        }
        else {
            onCorrect("Incorrect answer.");
        }
        setAnswer("");
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter the capital city: 
                <input 
                    type="text" 
                    value={answer} 
                    onChange={handleChange}
                />
            </label>
            <button type="submit" className="submitButton">Submit</button>
        </form>
    )
}

export default Form;