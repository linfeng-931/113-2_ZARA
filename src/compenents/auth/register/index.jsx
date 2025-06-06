import React, {useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth';
import { useAuth } from '../../../contexts/authContext';
import { CircleX, Asterisk, EyeOff, Eye } from 'lucide-react';

function Registering(){
    const {userLoggedIn} = useAuth();

    const [email, setEmail] = useState('');
    const [agreed, setAgreed] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    //onst [isRegistering, setIsRegistering] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmpasswordError, setConfirmPasswordError] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await doCreateUserWithEmailAndPassword(email, password);
            // Firebase Auth 應該會更新 userLoggedIn 狀態
            // 你也可以在這邊做其他動作
        } catch (error) {
            if(error.code === "auth/email-already-in-use") setErrorMessage("This email has already been used.");
            else setErrorMessage(error.message);
        }
    }

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

        // 清空 confirmPassword 與錯誤訊息
        setconfirmPassword('');
        setConfirmPasswordError('');
    
        if (!value) {
            setPasswordError("Please enter your password.");
        } else if (value.length < 8) {
            setPasswordError("Password must be at least 8 characters long.");
        } else if (!/[a-z]/.test(value)) {
            setPasswordError("Password must contain at least one lowercase letter.");
        } else if (!/\d/.test(value)) {
            setPasswordError("Password must contain at least one number.");
        } else {
            setPasswordError('');
        }
    };   
    
    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setconfirmPassword(value);

        if (value != password && password != '') {
            setConfirmPasswordError("Passwords do not match.");
        } else {
            setConfirmPasswordError('');
        }
    }; 

    const isDisabled = 
        !email || 
        !password || 
        !confirmPassword || 
        emailError !== '' || 
        passwordError !== '' || 
        confirmpasswordError !=='' ||
        password !== confirmPassword ||
        !agreed;

    const toggleShowPassword = () => {
        setShowPassword(prev => !prev);
    };

    return(
        <>
            {!userLoggedIn ? 
            <div className="register-container flex justify-center w-full">
                <form 
                    className="register" 
                    onSubmit={onSubmit}
                >
                    <h1>Register</h1>
                    <div className="divider mt-0 mb-10"></div>
                    {/* email */}
                    <div className='text-left w-80 md:w-90 lg:w-130'>
                        <div className="flex">
                            <label htmlFor="input-group-1">Your Email</label>
                            <Asterisk className='h-3 w-3 text-[#FA347F]'/>
                        </div>   
                        <p className='hint mb-2'>Your email will be your login. Please enter it correctly to keep your membership.</p>

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
                    <div className='text-left w-80 md:w-90 lg:w-130'>
                        <div className="flex">
                            <label htmlFor="input-group-1">Password</label>
                            <Asterisk className='h-3 w-3 text-[#FA347F]'/>
                        </div>  
                        <div className="relative mb-1">
                            <input 
                                type={showPassword ? 'text' : 'password'} 
                                autoComplete='current-password'
                                required placeholder="more than 8 characters, including number, letter" 
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

                    <div className='text-left w-80 md:w-90 lg:w-130'>
                        <div className="flex">
                            <label htmlFor="input-group-1">Confirm Password</label>
                            <Asterisk className='h-3 w-3 text-[#FA347F]'/>
                        </div>  
                        
                        <div className="relative mb-1">
                            <input 
                                disabled={password == '' || passwordError != ''}
                                type={showPassword ? 'text' : 'password'}
                                autoComplete='off'
                                required placeholder="Please confirm your password" 
                                value={confirmPassword} 
                                onChange={handleConfirmPasswordChange} 
                                className={` mb-1 placeholder="more than 8 characters, including number, lowercase letter"
                                    ${confirmpasswordError ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-red-950 focus:border-red-500 block w-full p-2.5 dark:text-red-200 dark:placeholder-red-500 dark:border-red-500" : 
                                    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                                    ${password === '' || passwordError !== '' ? 'opacity-50' : ''}
                                `}
                            />
                            <div className="absolute inset-y-0 end-0 flex items-center pe-3.5">
                                {!showPassword ? 
                                    <EyeOff 
                                        onClick={toggleShowPassword} 
                                        className={` w-4 h-4 cursor-pointer
                                            ${passwordError ? "text-gray-500 dark:text-red-200":"text-gray-500 dark:text-gray-400"}  
                                            ${password === '' || passwordError !== '' ? 'opacity-50' : ''}
                                        `}
                                    /> : 
                                    <Eye 
                                        onClick={toggleShowPassword} 
                                        className={` w-4 h-4 cursor-pointer
                                            ${passwordError ? "text-gray-500 dark:text-red-200":"text-gray-500 dark:text-gray-400"} 
                                            ${password === '' || passwordError !== '' ? 'opacity-50' : ''} 
                                        `}
                                    />
                            }    
                            </div>
                        </div>
                        <div className="h-6 mb-10">
                            {confirmpasswordError && 
                                <div className="flex gap-2 items-center text-red-500 ">
                                    <CircleX className='h-4 w-4'/>
                                    <p>{confirmpasswordError}</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 mb-1">
                        <input type="checkbox" id="privacy" className="border-gray-400" />
                        <label for="newsletter">
                            <p>我願意收到Zara電子報</p>
                        </label>
                    </div>
                    <div 
                        className="flex items-center space-x-2 mb-3"
                    >
                        <input type="checkbox" id="privacy" className="border-gray-400" onClick={() => setAgreed(!agreed)} />
                        <label for="agreement">
                            <div className="flex gap-1">
                                <p>我已閱讀並同意</p>
                                <p className="underline text-blue-600 cursor-pointer hover:opacity-50 duration-[.1s]">
                                    隱私條款
                                </p>
                                <Asterisk className='h-3 w-3 text-[#FA347F]'/>
                            </div>
                        </label>
                    </div>

                    <p 
                    className={`text-red-500 text-left 
                        ${errorMessage ? "": "opacity-0"}
                        `}
                    >
                        {errorMessage}
                    </p>
                    
                    <button
                        type = "submit"
                        disabled = {isDisabled}
                        className={`flex h-12 w-full justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                                    hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white
                                    ${isDisabled ? "opacity-50 pointer-events-none" : ""}
                                `}
                    >
                        Sign Up
                    </button>
                </form>
            </div> :

            <div>
                ok
            </div>
            }
        </>
    )
}

export default Registering;