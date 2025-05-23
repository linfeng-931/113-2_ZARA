import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { doPasswordChange } from '../../../firebase/auth';
import { EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { CircleX ,EyeOff, Eye } from 'lucide-react';
import { auth } from '../../../firebase/config';

function DoPasswordChange({setPage}){
    const [newPassword, setnewPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [checkPassword, setcheckPassword] = useState(false);
    const [currentPassword, setcurrentPassword] = useState('');

    const [confirmpasswordError, setConfirmPasswordError] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

    const navigate = useNavigate();
    const [completeFlag, setCompleteFlag] = useState(false);

    useEffect(() => {
        if (completeFlag) {
            setPage(0);
            navigate('/user/detail');
        }
    }, [completeFlag, navigate]);

    const onSubmit = async (e) => {
        console.log("hi");
        e.preventDefault();

        if (passwordError) return;

        if (!checkPassword) {
            try {
                const user = auth.currentUser;
                if (!user) throw new Error("User not logged in");

                // 重新認證
                const credential = EmailAuthProvider.credential(user.email, currentPassword);
                console.log(credential);
                await reauthenticateWithCredential(user, credential);
                setcheckPassword(true);

            } catch (error) {
                console.error('Change password error:', error);

                switch (error.code) {
                    case 'auth/wrong-password':
                        setPasswordError('Incorrect current password.');
                        break;
                    case 'auth/invalid-credential':
                        setPasswordError('Incorrect current password.');
                        break;
                    default:
                        setPasswordError('An unexpected error occurred.');
                        console.error('Unhandled Firebase error:', error.code);
                        break;
                }
            }
        }
    };

    const onSubmittwo = async (e) => {
        e.preventDefault();

        if (passwordError) return;

        try {
            const user = auth.currentUser;
            if (!user) throw new Error("User not logged in");

            // 認證過，才執行變更密碼
            await doPasswordChange(user, newPassword);
            alert("Password changed successfully!");

            // 清空欄位
            setcurrentPassword('');
            setnewPassword('');
            setcheckPassword(false);
            setCompleteFlag(true);
            

        } catch (error) {
            console.error('Change password error:', error);

            switch (error.code) {
                case 'auth/invalid-credential':
                    setPasswordError('Change password unsecessed.');
                    break;
                default:
                    setPasswordError('Password re-authentication timed out or an unexpected error occurred. Please try again.');
                    console.error('Unhandled Firebase error:', error.code);
                    break;
            }
        }
    };
    
    const handlecheckPasswordChange = (e) => {
        const value = e.target.value;
        setcurrentPassword(value);
    
        if (!value) {
            setPasswordError("Please enter your password.");
        } else if (value.length < 8) {
            setPasswordError("Invalid password format.");
        } else {
            setPasswordError('');
        }
    };    
    const handleNewPasswordChange = (e) => {
        const value = e.target.value;
        setnewPassword(value);
        setconfirmPassword("");

        if (!value) {
            setPasswordError("Please enter your password.");
        } else if (value.length < 8) {
            setPasswordError("Invalid password format.");
        } else {
            setPasswordError('');
        }
    };   

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setconfirmPassword(value);

        if (value != newPassword && newPassword != '') {
            setConfirmPasswordError("Passwords do not match.");
        } else {
            setConfirmPasswordError('');
        }
    }; 

    const toggleShowPassword = () => {
        setShowPassword(prev => !prev);
    };

    return(
        <>
            <div className="w-full rounded-md shadow-md p-10 h-100">
                {!checkPassword  &&
                    <form className="passwordchange flex flex-col justify-between h-full" onSubmit={onSubmit}>
                        {/* password */}
                        <div className='text-left w-full'>
                            <h1 className='mb-5'>Password Verification</h1>
                            <label htmlFor="input-group-1">Current Password</label>
                                
                            <div className="relative mb-1">
                                <input 
                                    type={showPassword ? 'text' : 'password'} 
                                    autoComplete='current-password'
                                    required placeholder="your password" 
                                    value={currentPassword} 
                                    onChange={handlecheckPasswordChange} 
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
                            disabled = {currentPassword == "" || passwordError != ""}
                            className={`mt-5 flex h-12 w-full justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                                        hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white
                                        ${currentPassword == "" || passwordError != "" ? "opacity-50 pointer-events-none" : ""}
                                    `}
                        >
                            Verify Password
                        </button>
                    </form>
                }
                {checkPassword &&
                <div>
                    <form className="passwordchange flex flex-col justify-between h-full" onSubmit={onSubmit}>
                            {/* newpassword */}
                            <div className='text-left w-full'>
                                <h1 className='mb-5'>Change Password</h1>
                                <label htmlFor="input-group-1">New Password</label>
                                    
                                <div className="relative mb-1">
                                    <input 
                                        type={showPassword ? 'text' : 'password'} 
                                        autoComplete='current-password'
                                        required placeholder="your password" 
                                        value={newPassword} 
                                        onChange={handleNewPasswordChange} 
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
                        </form>

                        <form className="passwordchange flex flex-col justify-between h-full" onSubmit={onSubmittwo}>
                            {/*confirm password */}
                            <div className='text-left w-full'>
                                <div className="flex">
                                    <label htmlFor="input-group-1">Confirm New Password</label>
                                </div>  
                                
                                <div className="relative mb-1">
                                    <input 
                                        disabled={newPassword == '' || passwordError != ''}
                                        type={showPassword ? 'text' : 'password'}
                                        autoComplete='off'
                                        required placeholder="Please confirm your password" 
                                        value={confirmPassword} 
                                        onChange={handleConfirmPasswordChange} 
                                        className={` mb-1 placeholder="more than 8 characters, including number, lowercase letter"
                                            ${confirmpasswordError ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-red-950 focus:border-red-500 block w-full p-2.5 dark:text-red-200 dark:placeholder-red-500 dark:border-red-500" : 
                                            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                                            ${newPassword === '' || passwordError !== '' ? 'opacity-50' : ''}
                                        `}
                                    />
                                    <div className="absolute inset-y-0 end-0 flex items-center pe-3.5">
                                        {!showPassword ? 
                                            <EyeOff 
                                                onClick={toggleShowPassword} 
                                                className={` w-4 h-4 cursor-pointer
                                                    ${passwordError ? "text-gray-500 dark:text-red-200":"text-gray-500 dark:text-gray-400"}  
                                                    ${newPassword === '' || passwordError !== '' ? 'opacity-50' : ''}
                                                `}
                                            /> : 
                                            <Eye 
                                                onClick={toggleShowPassword} 
                                                className={` w-4 h-4 cursor-pointer
                                                    ${passwordError ? "text-gray-500 dark:text-red-200":"text-gray-500 dark:text-gray-400"} 
                                                    ${newPassword === '' || passwordError !== '' ? 'opacity-50' : ''} 
                                                `}
                                            />
                                    }    
                                    </div>
                                </div>
                                <div className="h-6">
                                    {confirmpasswordError && 
                                        <div className="flex gap-2 items-center text-red-500 ">
                                            <CircleX className='h-4 w-4'/>
                                            <p>{confirmpasswordError}</p>
                                        </div>
                                    }
                                </div>
                            </div>

                            <button
                                type = "submit"
                                disabled = {newPassword == "" || passwordError != "" || confirmPassword == "" || confirmpasswordError != ""}
                                className={`mt-5 flex h-12 w-full justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                                            hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white
                                            ${newPassword == "" || passwordError != "" || confirmPassword == "" || confirmpasswordError != "" ? "opacity-50 pointer-events-none" : ""}
                                        `}
                            >
                                COMPLETE
                            </button>
                        </form>
                    </div>
                }

                {/* {errorMessage && (
                    <p className='text-red-600 font-blod'>{errorMessage}</p>
                )} */}
            </div>
        </>
    )
}

export default DoPasswordChange;