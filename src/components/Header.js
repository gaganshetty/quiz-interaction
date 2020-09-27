import React from 'react'
import '../styles/Header.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';


export default function Header() {
    return (
        <div className="header-section">
            <div className="logo-wrapper">
                <AllInclusiveIcon />
                <h3>Quiz Interation</h3>
            </div>
            <div className="social-icons-wrapper">
                <FacebookIcon className="social-icon" />
                <LinkedInIcon className="social-icon" />
                <TwitterIcon className="social-icon" />
            </div>
        </div>
    )
}
