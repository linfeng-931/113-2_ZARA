import React, {useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import { doPasswordReset } from '../../../firebase/auth';
import { CircleX, Asterisk, EyeOff, Eye } from 'lucide-react';

function Forget(){
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
    
        if (!value) {
            setEmailError("Please enter your email.");
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            setEmailError("Invalid email format.");
        } else {
            setEmailError('');
        }
    };

    const handleResetPassword = async () => {
        try {
            await doPasswordReset(email);
            setFeedback("Reset link sent! Please check your email.");
        } catch (error) {
            console.error("Reset error:", error);
            if (error.code === 'auth/user-not-found') {
                setEmailError("No account found with this email.");
            } else if (error.code === 'auth/invalid-email') {
                setEmailError("Invalid email address.");
            } else {
                setFeedback("Something went wrong. Try again later.");
            }
        }
    };

    return(
        <>
            {/* email */}
            <div className='text-left w-full'>
                <label htmlFor="input-group-1">Your Email</label>
                
                <div className="relative mb-1">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className={` w-4 h-4
                            ${emailError ? "text-gray-500 dark:text-red-200":"text-gray-500 dark:text-gray-400"}  
                        `}
                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                    </div>
                    <input 
                        type="email" 
                        id="input-group-1" 
                        value={email} 
                        required placeholder="name@flowbite.com" 
                        onChange={handleEmailChange} 
                        className={`
                            ${emailError ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-red-950 focus:border-red-500 block w-full ps-10 p-2.5 dark:text-red-200 dark:placeholder-red-500 dark:border-red-500" : 
                            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                        `}
                        />
                </div>
                <div className="h-6">
                    {emailError && 
                        <div className="flex gap-2 items-center text-red-500 ">
                            <CircleX className='h-4 w-4'/>
                            <p>{emailError}</p>
                        </div>
                    }
                </div>
            </div>
            <button
                type = "submit"
                disabled = {emailError != '' || email == ''}
                onClick={handleResetPassword}
                className={`flex h-12 w-full justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                            hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white
                            ${emailError != '' || email == '' ? "opacity-50 pointer-events-none" : ""}
                        `}
            >
                Send Verification
            </button>

            {/* 成功/錯誤提示 */}
            {feedback && <p className="mt-2 text-sm text-green-500">{feedback}</p>}
        </>
    )
}

export default Forget;