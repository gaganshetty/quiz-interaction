import React, {useEffect, useState} from 'react'
import "../styles/Result.scss"
import MedalImage from '../medal.svg'

export default function Result({retry, score, total}) {
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        setPercentage(parseFloat(score * 100/ total).toFixed(0)+"%");
    },[score, total])

    return (
        <div className="result-container">
            <img src={MedalImage} alt="Medal"/>
            <div className="aggregate-value">{percentage}</div>
            <div className="message">{score !== 0 ? "Congratulations" : "Oops!"}</div>
            <div className="success-ratio">You got {score} out of {total} questions</div>
            <button className="Retry" onClick={retry}>Replay</button>
        </div>
    )
}
