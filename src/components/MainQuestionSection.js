import React from 'react'
import '../styles/MainQuestionSection.scss'
import Header from '../components/Header'
import ProgressBar from '../components/ProgressBar'


/**
 * MainQuestionSection - Component which renders left section of the Quiz interaction page
 */
export default function MainQuestionSection() {
    return (
        <div className="main-question-section">
            <Header />
            <ProgressBar />
            <section className="main-question-section-body">
                <h2 className="main-question-text" >How well do you know your balloons?</h2>
                <p className="main-question-subtitle">A short quiz to test how well you know air balloons</p>
                <div className="footer-wrapper">
                    <div className="inventor">BY ISAAC NEWTON</div>
                    <div className="date">SEP 26, 2020</div>
                </div>
            </section>
        </div>
    )
}
