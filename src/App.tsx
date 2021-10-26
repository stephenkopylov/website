import React from 'react';
import './App.css';
import {AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineMail} from 'react-icons/ai';

import Lottie from "lottie-react";

import groovyWalkAnimation from "./static/data.json";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Lottie style={{width: 300, height: 100, marginBottom:0}} animationData={groovyWalkAnimation}/>
                <p style={{fontSize: 24, marginTop: 40, marginBottom: 40}}>
                    Hi, I'm Stephen!
                </p>
                <p style={{fontSize: 24, marginBottom: 0, marginTop:0}}>
                    <a style={{marginLeft: 5, marginRight: 5}} href={'http://github.com/stephenkopylov'}><AiFillGithub/></a>
                    <a style={{marginLeft: 5, marginRight: 5}}
                       href={'https://www.linkedin.com/in/stephen-kopylov/'}><AiFillLinkedin/></a>
                    <a style={{marginLeft: 5, marginRight: 5}}
                       href={'mailto:newonxp@gmail.com'}><AiOutlineMail/></a>
                    <a style={{marginLeft: 5, marginRight: 5}}
                       href={'https://www.instagram.com/newon/'}><AiFillInstagram/></a>
                </p>
            </header>
        </div>
    );
}

export default App;
