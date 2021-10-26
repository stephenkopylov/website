import React from 'react';
import './App.css';
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai';
import {HiOutlineMail} from 'react-icons/hi';
import Lottie from "lottie-react";
import {initializeApp} from "firebase/app";

import animation from "./static/data.json";

const firebaseConfig = {
    apiKey: "AIzaSyAy0-BgvHaOiUQd2xXKqi-TGJ1YNoNnVjA",
    authDomain: "stephenkopylov-com.firebaseapp.com",
    projectId: "stephenkopylov-com",
    storageBucket: "stephenkopylov-com.appspot.com",
    messagingSenderId: "424940963611",
    appId: "1:424940963611:web:7ca8a5b2c10b602ac435be",
    measurementId: "G-N25NTT4HEX"
};

initializeApp(firebaseConfig);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Lottie className={"Lottie"} animationData={animation}/>
                <p className="Main-p">
                    Hi, I'm Stephen
                </p>
                <p className="Link-p">
                    <a className="Link-a" href={'https://github.com/stephenkopylov'}
                       target={'_blank'}
                       rel={'noreferrer'}><AiFillGithub/></a>
                    <a className="Link-a"
                       href={'https://www.linkedin.com/in/stephen-kopylov/'}
                       target={'_blank'}
                       rel={'noreferrer'}><AiFillLinkedin/></a>
                    <a className="Link-a"
                       href={'mailto:newonxp@gmail.com'}
                       target={'_blank'}
                       rel={'noreferrer'}><HiOutlineMail/></a>
                    <a className="Link-a"
                       href={'https://www.instagram.com/newon/'}
                       target={'_blank'}
                       rel={'noreferrer'}><AiFillInstagram/></a>
                </p>
            </header>
        </div>
    );
}

export default App;
