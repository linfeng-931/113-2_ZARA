import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import Forget from "../compenents/auth/forget";

function ForgetPassword(){
    
    return(
        <>
            <Header/>
            <div className="w-full mt-20 mb-90 md:mb-50 flex flex-col items-center">
                <div className="w-[85%] lg:w-[40%] text-left">
                    <h1>Forget Password</h1>
                    <div className="line w-60 h-[.5px] bg-black dark:bg-white mb-15"></div>
                    <Forget/>
                </div>
            </div>
            
            <Footer/>
        </>
    )
}

export default ForgetPassword;