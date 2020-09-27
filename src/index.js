import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.scss';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX)+"px;")
    })

    document.addEventListener("click", () => {
        cursor.classList.add("expand")
        setTimeout(() => {
            cursor.classList.remove("expand")
        },500)
    })