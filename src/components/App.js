import React from 'react';
import '../styles/App.scss'
import MainQuestionSection from './MainQuestionSection'
import QuizSection from './QuizSection'

export default function App() {
    const questions = [
        {
            questionText: "Do you think air balloons are cool enough for 2018?",
            answerOptions : [
                {answerText:"Yes, Obviously", isCorrect: true },
                {answerText:"No! C'mon", isCorrect: false },
                {answerText:"Not sure. Really don't care", isCorrect: false }
            ]
        },
        {
            questionText: "Which of these show the trendy lock pattern?",
            answerOptions : [
                {answerText:"Yes, Obviously", isCorrect: false },
                {answerText:"No! C'mon", isCorrect: false },
                {answerText:"Not sure. Really don't care", isCorrect: true }
            ]
        },
        {
            questionText: "How does a hot air balloon fly?",
            answerOptions : [
                {answerText:"The gas that is foreign to the air that is emitted from burning propane is lighter than the air outside the balloon, which creates buoyancy", isCorrect: false },
                {answerText:"The air being blown into the balloon pushed on the envelope which creates buoyancy that lifts the balloon", isCorrect: true },
                {answerText:"The hot air being blown into the envelope is lighter than the air on the outside of the balloon, which created buoyancy that lifts the balloon", isCorrect: false }
            ]
        }
    ]

    return (
        <div className="container">
            <MainQuestionSection />
            <div className="quiz-wrapper">
                <QuizSection questions={questions}/>
            </div>
        </div>
    )
}
