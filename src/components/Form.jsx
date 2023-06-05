import React from 'react';
import google from '../assets/google.png';
import fb from '../assets/facebook.png';

import './form.scss';

const Form = () => {
    return (
        <div className='form'>
            <div className='wrapper'>
                <h2>Create Account</h2>
                <div className='button__wrapper'>
                    <button>
                        <img src={google} alt='' /> Sign up with Google
                    </button>
                    <button>
                        <img src={fb} alt='' />
                        Sign up with Facebook
                    </button>
                </div>
                <div className='or__wrapper'>
                    <span></span>
                    <p>OR</p>
                    <span></span>
                </div>
                <div className='form__wrapper'>
                    <form>
                        <input type='text' placeholder='Full Name' />
                        <input type='email' placeholder='Email Address' />
                        <input type='password' placeholder='Password' />
                        <button>Create Account</button>
                    </form>
                </div>
                <p className='login'>
                    Already have an account?{' '}
                    <span>
                        <a href=''>Login</a>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Form;
