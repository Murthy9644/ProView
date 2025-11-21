import Logo from '../reusable_elements/Logo'
import styles from './signin_page.module.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignInPage(){
    const [isLoginTriggered, setLoginStatus] = useState(false)

    const loginTriggered = () => {
        setLoginStatus(true)
        setTimeout(() => {
            setLoginStatus(false)
        }, 3000)
    }
    
    return (
        <div className={styles.signinBody}>
            <div className={styles.headerTexts}>
                <div className="logo">
                    <Logo/>

                    <h1 className={styles.title}>ProView</h1>
                </div>

                <h2 className={styles.greetings}>Welcome Back!</h2>

                <p>Login to your ProView account</p>
            </div>

            <div className={styles.signinCard}>
                <div className={styles.email}>
                    <h5>Email</h5>

                    <input className={styles.text} type="email" placeholder='Enter your email address'/>
                </div>

                <div className={styles.pswd}>
                    <h5>Password</h5>

                    <input className={styles.text} type="password" placeholder='Enter your password'/>
                </div>

                <div className={styles.utils}>
                    <div className={styles.rememberMeDude}>
                        <label>
                            <input type="checkbox" />
                            <h5>Remember me</h5>
                        </label>
                    </div>

                    <a href="#" className={styles.forgotpswd}><p>Forgot Password?</p></a>
                </div>
                
                <button 
                    className={styles.loginBtn}
                    onClick={loginTriggered}
                    disabled={isLoginTriggered}
                >{isLoginTriggered ? "Loading..." : "Login"}</button>
            </div>

            <div className={styles.signupoption}>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
        </div>
    );
}

export default SignInPage;