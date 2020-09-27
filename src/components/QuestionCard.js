import React, {useState} from 'react'
import "../styles/QuestionCard.scss"

/**
     * QuestionCard - Returns each question and its answers
     * @props question - each question object
     * @props index - Index of the question
     * @props lastIndex - returns last index in order to get overall result
     * @props handleSubmit - function which checks if the answer is correct and stores current score
     * @props handlesShowResult - function which calculates overall score
     * @props currentQuestionIndex - returns currentIndex of the selected question
     */
export default function QuestionCard({question, index, lastIndex, handleSubmit, handleshowResult, currentQuestionIndex}) {
    const [selectedIndex, setselectedIndex] = useState(null);

    /**
     * handleOptionSelected - stores the selected answer index for a particular question
     * @param index  Selected Answer index
     */
    const handleOptionSelected = (index) => {
        setselectedIndex(index)
    }

    return (
        <div className="question-card-container" id={"Q"+index} style={currentQuestionIndex !== index ? {pointerEvents: "none" ,opacity: "0.4" } : { opacity: "1" }}>
            <div className="question-label">QUESTION {index + 1}</div>
            <div className="question-text">{question.questionText}</div>
            <div className='answer-section'>
                {question.answerOptions.map((answer, index) => {
                    return <button key={index} className={selectedIndex === index ? "selected-option" : "option-btn"} onClick={() => handleOptionSelected(index)}>{answer.answerText}</button>
                })}
                {lastIndex ? <button className="submit-btn" onClick={() => handleshowResult(question.answerOptions[selectedIndex].isCorrect)} disabled={selectedIndex === null}>Submit and show results</button>
                        : <button className="submit-btn" onClick={() => handleSubmit(question.answerOptions[selectedIndex].isCorrect)} disabled={selectedIndex === null}>Submit</button>}
			</div>
        </div>
    )
}
