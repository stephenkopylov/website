import React from 'react';
import './App.css';
import {AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineMail} from 'react-icons/ai';

import Lottie from "lottie-react";

import groovyWalkAnimation from "./static/data.json";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAy0-BgvHaOiUQd2xXKqi-TGJ1YNoNnVjA",
    authDomain: "stephenkopylov-com.firebaseapp.com",
    projectId: "stephenkopylov-com",
    storageBucket: "stephenkopylov-com.appspot.com",
    messagingSenderId: "424940963611",
    appId: "1:424940963611:web:7ca8a5b2c10b602ac435be",
    measurementId: "G-N25NTT4HEX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Lottie style={{width: 300, height: 100, marginBottom: 0}} animationData={groovyWalkAnimation}/>
                <p style={{fontSize: 24, marginTop: 40, marginBottom: 40}}>
                    Hi, I'm Stephen!
                </p>
                <p style={{fontSize: 24, marginBottom: 0, marginTop: 0}}>
                    <a style={{marginLeft: 5, marginRight: 5}} href={'http://github.com/stephenkopylov'}
                       target={'_blank'}><AiFillGithub/></a>
                    <a style={{marginLeft: 5, marginRight: 5}}
                       href={'https://www.linkedin.com/in/stephen-kopylov/'}
                       target={'_blank'}><AiFillLinkedin/></a>
                    <a style={{marginLeft: 5, marginRight: 5}}
                       href={'mailto:newonxp@gmail.com'}
                       target={'_blank'}><AiOutlineMail/></a>
                    <a style={{marginLeft: 5, marginRight: 5}}
                       href={'https://www.instagram.com/newon/'}
                       target={'_blank'}><AiFillInstagram/></a>
                </p>
            </header>
        </div>
    );
}

export default App;
