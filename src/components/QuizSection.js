import React, {useState} from 'react'
import '../styles/QuizSection.scss'
import QuestionCard from "./QuestionCard"
import Result from "./Result"

export default function QuizSection({questions}) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] =  useState(0);
    
    const handleSubmit = (isCorrect) => {
        if(isCorrect){
            setScore(score+1)
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1)
    }

    const handleshowResult = (isCorrect) => {
        console.log("ShowResult clicked")
        if(isCorrect){
            setScore(score+1)
        }
        setShowResult(true);
    }

    const retry = () => {
        setShowResult(false);
        setScore(0);
        setCurrentQuestionIndex(0)
    }

    return (
        <div className="quiz-section">
            {showResult && <Result retry={retry} score={score} total={questions.length} />}
            {!showResult && questions.map((question, index) => {
                return <QuestionCard 
                            question={question}
                            key={index}
                            index={index} 
                            lastIndex={questions.length-1 === index ? true : false} 
                            handleSubmit = {handleSubmit}
                            handleshowResult = {handleshowResult}
                            currentQuestionIndex={currentQuestionIndex}
                        />
            })}
        </div>
    )
}
