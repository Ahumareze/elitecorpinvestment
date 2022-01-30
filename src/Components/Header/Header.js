import React, {useEffect, useState} from 'react';
import './Header.css';
import {FaHome} from 'react-icons/fa';

import hamburger from '../../Assets/hamburger-white.png';
import logo from '../../Assets/logo.png';
import Line from './Line';

import {TiHome, TiUserAdd} from 'react-icons/ti';
import {RiLoginCircleFill} from 'react-icons/ri';
import { FcGoogle } from "react-icons/fc";
import { MdGTranslate } from "react-icons/md";
import { MdDashboard, BiChat, BiQuestionMark, FcDocument, RiUserAddFill } from "react-icons/all";

const width = window.innerWidth;

function Header({login, faq, aboutus, terms, home}) {

    const [modal, setModal] = useState(false);

    useEffect(() => {
        getWidget();
    }, []);

    const getWidget = () => {
        // const script = document.createElement('script');
        // script.src('https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        // script.innerHTML = function googleTranslateElementInit() {
        //     new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
        // }
        // document.getElementById("GDW").appendChild(script);
    }

    const showModal = () => {
        setModal(prev => !prev)
    }

    const line = (
        <div className='Header_flexer'>
            <Line> <img src={hamburger} style={{width: 20}} onClick={showModal} style={{marginLeft: 10}} /> </Line>
            <Line name='Dashboard' onClick={login}> <MdDashboard color='#fff' size={20} style={{marginLeft: 10}} /> </Line>
            <Line name='Home' color='yellow' onClick={home}> <TiHome color='yellow' size={20} style={{marginLeft: 10}} /> </Line>
        </div>
    );

    const line2 = (
        <div className='Header_flexer'>
            <Line name='Terms & Conditions' onClick={terms}> <FcDocument color='#fff' size={20} style={{marginLeft: 10}} /> </Line>
            <Line name='FAQs' onClick={faq}> <BiQuestionMark color='#fff' size={20} style={{marginLeft: 10}} /> </Line>
            <Line name='About Us' onClick={aboutus} > <BiChat color='#fff' size={20} style={{marginLeft: 10}} /> </Line>
            <Line name='Login' onClick={login}> <RiLoginCircleFill color='#fff' size={20} style={{marginLeft: 10}} /> </Line>
            <Line name='Dashboard' onClick={login}> <MdDashboard color='#fff' size={20} style={{marginLeft: 10}} /> </Line>
            <Line name='Home' color='yellow' onClick={home}> <TiHome color='yellow' size={20} style={{marginLeft: 10}} /> </Line>
        </div>
    );

    const header = (
        <div className='Header'>
            <div className='Logo_container'>
                <img src={logo} />
            </div>
            <div className='Logo_container2'>
                {width > 600 ? line2 : line}
            </div>
        </div>
    );

    let DropDownDiv = (
        <div className='DropDownDiv'>
            <Line name='Login' onClick={login}> <RiLoginCircleFill color='#fff' size={20} style={{marginLeft: 10}} /> </Line>
            <div style={{height: 3}} />
            <Line name='Sign up' onClick={login}> <RiUserAddFill color='#fff' size={20} style={{marginLeft: 10}} /> </Line>
            <div style={{height: 3}} />
            <Line name='Terms & Conditions' onClick={terms}> <FcDocument color='#fff' size={20} style={{marginLeft: 10}} /> </Line>
            <div style={{height: 3}} />
            <Line name='FAQs' onClick={faq}> <BiQuestionMark color='#fff' size={20} style={{marginLeft: 10}} /> </Line>
            <div style={{height: 3}} />
            <Line name='About Us' onClick={aboutus} > <BiChat color='#fff' size={20} style={{marginLeft: 10}} /> </Line>
        </div>
    )
    
    
    return (
        <div className='top_fixer'>
            {header}
            {modal ? DropDownDiv : null }
        </div>
    );
}

export default Header;