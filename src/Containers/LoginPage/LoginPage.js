import React, { useState, useRef, useEffect } from 'react';
import emailJs from 'emailjs-com';
import './LoginPage.css';
import {connect} from 'react-redux';
import * as actions from '../../Redux/Actions/Index';
import {LOADING, VERIFY_SCREEN} from '../../Redux/Actions/ActionTypes';
import Loading from '../../Components/Loading/Loading';
import LoginError from './LoginError';
import Captcha from './Captcha';
import PassMismatch from './PassMismatch';

import {FaExclamationTriangle} from 'react-icons/fa'

import countries from './Countries';

const width = window.innerWidth;


function LoginPage(props) {
    const [signup, setSignup] = useState(false);
    const [verify, setVerify] = useState(false);
    const [verificationCode, setverificationCode] = useState();
    const [modal, setModal] = useState(false);
    const [code, setCode] = useState();
    const [verifyError, setVerifyError] = useState(false)

    const [loginEmail, setLoginEmail] = useState();
    const [loginPassword, setloginPassword] = useState();

    const [SignupFullname, setSignupFullname] = useState();
    const [SignupEmail, setSignupEmail] = useState();
    const [SignupPassword, setSignupPassword] = useState();
    const [ConfirmPassword, setConfirmPassword]  = useState();
    const [ReferallCode, setReferallCode] = useState();

    const [passwordError, setpasswordError] = useState(false);

    useEffect(() => {
        var val = Math.floor(1000 + Math.random() * 9000);
        setverificationCode(val);
        // console.log(val)
    }, []);

    const verifyPass = (e) => {
        if(e.length > 7){
            setpasswordError(true)
        }else{
            setpasswordError(false)
        }
        setSignupPassword(e)
    }

    const submitLogin = () => {
        props.mainLogin(loginEmail, loginPassword);
    }

    const submitSignup = () => {
        props.mainsignup(SignupEmail, SignupPassword, SignupFullname, ReferallCode)
    }

    const form = useRef();

    const codeSetter = (e) => {
        setCode(e);
    }

    const verification = (e) => {
        // props.setLoading(true);
        // axios.post()
        e.preventDefault();

        var template_params = {
            name: 'John',
            reply_email: 'thereallawrence8@gmail.com',
            message: 'This is awesome!'
        };
        
        emailJs.send('service_wis1d1e', 'template_6azc1jp', template_params, 'user_1zWMNuwDwQj4Bmjpta5GF')
            .then((result) => {
                console.log(result.text);
                setVerify(true);
            }, (error) => {
                console.log(error.text);
            });

    }

    const EmailVerification = () => {
        if(code == verificationCode){
            submitSignup()
        }else{
            setVerifyError(true)
        }
    }

    const run = () => {
        setModal(false)
        props.history.push('/password_reset')
    }

    const loginForm = (
        <form action="#" class="login">
            {props.errorM ? <p className='Error_message_p'>{props.errorM}</p> : null }
            <div class="field">
                <input type="email" placeholder="Email Address" required onChange={(e) => setLoginEmail(e.target.value)} />
            </div>
            <div class="field">
                <input type="password" placeholder="Password" required onChange={(e) => setloginPassword(e.target.value)} />
            </div>
            <div class="pass-link" style={{paddingTop: 10}} onClick={() => setModal(true) }>
                <a>Forgot password? Click <span style={{color: 'yellow', fontWeight: 'bold'}} >here</span> to reset </a>
            </div>
            <div class="field btn">
                <div class="btn-layerr" onClick={submitLogin}>
                    <p>Submit</p>
                </div>
            </div>
        </form>
    )

    const signupForm = (
        <form action="#" class="signup" ref={form} onSubmit={verification}>
            {props.errorM ? <p className='Error_message_p'>{props.errorM}</p> : null }
            <div class="field">
                <input type="text" name='user_name' placeholder="Full Name" required onChange={(e) => setSignupFullname(e.target.value)} />
            </div>
            <div class="field">
                <input type="email" name='user_email' placeholder="Email Address" required onChange={(e) => setSignupEmail(e.target.value)} />
            </div>
            <div class="field">
                <input type="numeric" placeholder="Phone number (optional) " />
            </div>
            <div class="field">
                <input type="password" placeholder="Password" required onChange={(e) => verifyPass(e.target.value)} />
            </div>
            <div class="field">
                <input type="password" placeholder="Confirm password" required onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <div class="field">
                <input type="numeric" placeholder="Referal Code (optional) " onChange={(e) => setReferallCode(e.target.value)} />
            </div>
            <div class="field">
                <select name="countries" id="cars" className='SelectInputField'>
                    {
                        countries.map((i) => <option value="volvo">{i.name}</option> )
                    }
                </select>
            </div>
            <section className='extra_verificationStuffs'>
                {SignupPassword && <LoginError error={passwordError} /> }
                {SignupPassword && <PassMismatch cp={ConfirmPassword} sp={SignupPassword} /> }
                <Captcha />
            </section>
            <div class="field btn">
                <div class="btn-layerr" onClick={submitSignup}>
                    <p>Submit</p>
                </div>
            </div>
        </form>
    )

    let container;

    container = (
        <div className='wrapper'>
            <div className="title-text">
                <div className="title login">
                {!signup ? 'Sign In' : 'Sign Up'}
                </div>
                <div className="title signup">
                Register Here
                </div>
            </div>
            <div class="form-container">
            <div class="slide-controls">
               <input type="radio" name="slide" id="login" defaultChecked />
               <input type="radio" name="slide" id="signup" />
               <label for="login" class="slide login" onClick={() => setSignup(false)}>Login</label>
               <label for="signup" class="slide signup" onClick={() => setSignup(true)}>Signup</label>
               <div class="slider-tab"></div>
            </div>
            <div class="form-inner">
               {signup ? signupForm : loginForm}
            </div>
         </div>
        </div>
    );

    const logModal = (
        <div className='LoginPage_Modal'>
            <div className='LoginPage_Modal_Main'>
                <div className='FaEx_Container'>
                    <FaExclamationTriangle size={50} color='#03255C'/>
                </div>
                <div className='LM_p_container'>
                    <p>Withdrawal services will be disabled for 24 hours after you make this change to protect your account</p>
                </div>
                <div className='LM_p_bottom_boxes'>
                    <div className='LM_p_bottom_box1' onClick={() => setModal(false)} >Cancle</div>
                    <div style={{width: 20}} />
                    <div className='LM_p_bottom_box2' onClick={() => run()}>Continue</div>
                </div>
            </div>
        </div>
    )

    if(props.verifyScreen){
        container = (
            <div className='mainVerifyScreen'>
                <div style={{marginTop: 150}}>
                    <h2>A verification code has been sent to your email</h2>
                    <h3>{props.verifyScreen}</h3>
                </div>
                <div className='FGGG'>
                    <div className='FG_back2' onClick={() => {
                        props.closeScreen();
                        setSignup(false)
                    } } >
                        <p>Back to login</p>
                    </div>
                </div>
            </div>
        )
    }

    // if(verify){
    //     container = (
    //         <>
    //             {verificationField}
    //         </>
    //     )
    // }

    return (
        <div className='html_body'>
            {!props.loading ? container : <Loading /> }
            {modal && logModal}
        </div>
    );
}

const mapStateToProps = state => {
    return{
        loading: state.loading,
        errorM: state.error,
        verifyScreen: state.verifyScreen
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        mainsignup: (email, password, fullname, refCode) => dispatch(actions.signup(email, password, fullname, refCode)),
        mainLogin: (email, password) => dispatch(actions.login(email, password)),
        setLoading: (value) => dispatch({type: LOADING, value: value}),
        closeScreen: () => dispatch({type: VERIFY_SCREEN, value: false})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);