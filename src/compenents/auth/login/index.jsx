import React, {useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import { doSignInWithEmail } from '../../../firebase/auth';
import { CircleX ,EyeOff, Eye } from 'lucide-react';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    //const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (e) => {
            e.preventDefault();
        
            if (emailError || passwordError) return;
    
            if (!isSigningIn) {
                setIsSigningIn(true);
                try {
                    await doSignInWithEmail(email, password);
                } catch (error) {
                    console.error('Login error:', error);
                
                    switch (error.code) {
                        case 'auth/user-not-found':
                            setEmailError('No user found with this email.');
                            break;
                        case 'auth/wrong-password':
                            setPasswordError('Incorrect password.');
                            break;
                        case 'auth/invalid-credential':
                            // 這個通常代表 email 和 password 有問題（但 Firebase 無法明確指出是哪個）
                            setEmailError('Invalid email or password.');
                            setPasswordError('');
                            break;
                        default:
                            console.error('Unhandled Firebase error:', error.code);
                            break;
                    }
                } finally {
                    setIsSigningIn(false);
                }
            }
        };

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
    
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    
        if (!value) {
            setPasswordError("Please enter your password.");
        } else if (value.length < 8) {
            setPasswordError("Invalid password format.");
        } else {
            setPasswordError('');
        }
    };    

    const toggleShowPassword = () => {
        setShowPassword(prev => !prev);
    };

    return(
        <>
            <div className="login-container text-left h-full w-full">
                <form className="login" onSubmit={onSubmit}>
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

                    {/* password */}
                    <div className='text-left w-full'>
                            <label htmlFor="input-group-1">Password</label>
                            
                        <div className="relative mb-1">
                            <input 
                                type={showPassword ? 'text' : 'password'} 
                                autoComplete='current-password'
                                required placeholder="your password" 
                                value={password} 
                                onChange={handlePasswordChange} 
                                className={`
                                    ${passwordError ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-red-950 focus:border-red-500 block w-full p-2.5 dark:text-red-200 dark:placeholder-red-500 dark:border-red-500" : 
                                    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                                `}
                            />
                            <div className="absolute inset-y-0 end-0 flex items-center pe-3.5">
                                {!showPassword ? 
                                    <EyeOff 
                                        onClick={toggleShowPassword} 
                                        className={` w-4 h-4 cursor-pointer
                                            ${passwordError ? "text-gray-500 dark:text-red-200":"text-gray-500 dark:text-gray-400"}  
                                        `}
                                    /> : 
                                    <Eye 
                                        onClick={toggleShowPassword} 
                                        className={` w-4 h-4 cursor-pointer
                                            ${passwordError ? "text-gray-500 dark:text-red-200":"text-gray-500 dark:text-gray-400"}  
                                        `}
                                    />
                            }    
                            </div>
                        </div>
            
                        <div className="h-6">
                            {passwordError && 
                                <div className="flex gap-2 items-center text-red-500 ">
                                    <CircleX className='h-4 w-4'/>
                                    <p>{passwordError}</p>
                                </div>
                            }
                        </div>
                    </div>

                    <button
                        type = "submit"
                        disabled = {isSigningIn}
                        className={`mt-5 flex h-12 w-full justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                                    hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white
                                    ${isSigningIn ? "opacity-50 pointer-events-none" : ""}
                                `}
                    >
                        Login
                    </button>
                </form>

                {/* {errorMessage && (
                    <p className='text-red-600 font-blod'>{errorMessage}</p>
                )} */}
            </div>
        </>
    )
}

export default Login;