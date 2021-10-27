import React, {useState} from 'react';
import './App.css';
import {AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillDownCircle, AiFillUpCircle} from 'react-icons/ai';
import {HiOutlineMail} from 'react-icons/hi';
import Lottie from "lottie-react";
import {initializeApp} from "firebase/app";

import animation from "./static/data.json";

import {AnimatePresence, motion} from "framer-motion"

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
    const [visible, setVisible] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <Lottie className={"Lottie"} animationData={animation}/>
                <a
                    className="Main-a"
                    onClick={() => {
                        setVisible(!visible);
                    }}>
                    Hi, I'm Stephen
                    {visible ? <AiFillUpCircle size={16} style={{margin: 10, verticalAlign: 'middle'}}/> :
                        <AiFillDownCircle size={16} style={{margin: 10, verticalAlign: 'middle'}}/>}
                </a>
                <AnimatePresence initial={false}>
                    <motion.div style={{overflow: 'hidden'}}
                                animate={{height: visible ? 'auto' : 0, opacity: visible ? 1 : 0}}
                                transition={{ease: "easeInOut", duration: 0.3}}>
                        <p className="Hidden-p">
                            Last 15+ years I've been developing web/mobile apps and games.
                            <br/>
                            <br/>
                            After reaching a senior position in iOS development I moved to cross-platform and started
                            using React Native in our projects.
                            <br/>
                            <br/>
                            Right now in <a href={"https://ibitcy.com/"} target={'_blank'}
                                            rel={'noreferrer'}>IBIT</a> my team and I are creating React Native apps and
                            native modules using C++, Kotlin, ObjectiveC, Swift, and Typescript.
                            <br/>
                            <br/>
                            At the moment I'm not looking for a job offer, but if you need any help regarding React and
                            React Native development - don't hesitate to contact me using the links below.
                        </p>
                    </motion.div>
                </AnimatePresence>
                <p className="Link-p">
                    <a
                        className="Link-a" href={'https://github.com/stephenkopylov'}
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        <AiFillGithub/>
                    </a>
                    <a
                        className="Link-a"
                        href={'https://www.linkedin.com/in/stephen-kopylov/'}
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        <AiFillLinkedin/>
                    </a>
                    <a
                        className="Link-a"
                        href={'mailto:newonxp@gmail.com'}
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        <HiOutlineMail/>
                    </a>
                    <a
                        className="Link-a"
                        href={'https://www.instagram.com/newon/'}
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        <AiFillInstagram/>
                    </a>
                </p>
            </header>
        </div>
    );
}

export default App;
