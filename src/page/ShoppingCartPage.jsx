import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import BasketModal from "../compenents/BasketModal";
function ShoppingCartPage(){

    return(
        <>
            <div className="header relative mb-10">
                <Header/>
            </div>
            <div className="w-full flex flex-col items-center">
                <div className="w-[80%]">
                    <BasketModal/>
                </div>     
            </div>
            <Footer/>
        </>
    )
}
export default ShoppingCartPage;