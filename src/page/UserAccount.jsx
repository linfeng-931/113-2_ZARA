import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import Login from "../compenents/auth/login/index"
import CreateAccount from "../compenents/auth/register/CreateAccount";
import { useAuth } from "../contexts/authContext";
import { Navigate } from "react-router";

function UserAccount(){
    const {userLoggedIn} = useAuth();

    return(
        <>
            {userLoggedIn && (<Navigate to={'/user/detail'} replace = {true} />)}
            <Header/>
            <div className="w-full mt-20 mb-90 md:mb-50 flex flex-col items-center">
                <div className="w-[85%] lg:w-[50%] text-left">
                    <h1>LOGIN</h1>
                    <div className="line w-60 h-[.5px] bg-black dark:bg-white mb-15"></div>
                    <div className="md:flex gap-15 h-64 justify-between">
                        <div className="md:w-[45%] mt-10 mb-10 md:mt-0">
                            <Login/>
                        </div>
                        <div className="divider md:divider-horizontal"></div>
                        <div className="h-50 md:h-full md:w-[45%] mt-10 mb-10 md:mt-0">
                            <CreateAccount/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default UserAccount;