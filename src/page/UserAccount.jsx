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
            <div className="w-full h-150 lg:h-auto mt-20 mb-90 md:mb-50 flex flex-col items-center">
                <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-left">
                    <h1>LOGIN</h1>
                    <div className="line w-60 h-[.5px] bg-black dark:bg-white mb-15"></div>
                    <div className="flex flex-col lg:flex-row gap-15 h-69 items-center justify-between">
                        <div className="w-90 lg:w-[45%] mt-10 lg:mb-10 md:mt-0">
                            <Login/>
                        </div>
                        <div className="divider lg:divider-horizontal"></div>
                        <div className="lg:h-full lg:w-[45%] w-90 mt-10 mb-10 md:mt-0">
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