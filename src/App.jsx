import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Slides from "./page/Home";
import Category from "./page/Category";
import Product from "./page/Product";
import ShoppingCartPage from "./page/ShoppingCartPage";
import UserAccount from "./page/UserAccount";
import UserDetail from "./page/UserDetail";
import Register from "./page/Register";
import { selectCartItems } from "./redux/cartSlice";
import { selectFavoriteItems } from "./redux/favSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ForgetPassword from "./page/ForgetPassword";
import HowTo from "./page/HowTo";
import PaymentMethods from "./page/PaymentMethods";
import DeliveryMethods from "./page/DeliveryMethods";
import ScrollToTop from "./compenents/ScrollToTop";
import Size from "./page/Size";
import Purchases from "./page/Purchases";
import Company from "./page/Company";
import WorkWithUs from "./page/WorkWithUs";
import Location from "./page/Location";
import CartInit from "./compenents/auth/CartInite";
import MyCollectionPage from "./page/MyCollectionPage";
import FavoriteInit from "./compenents/auth/FavInit";
import Purchase from "./page/Purchase";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  const cartItems = useSelector(selectCartItems);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const favoriteItems = useSelector(selectFavoriteItems);

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  return (
    <>
     <QueryClientProvider client={queryClient}>
      <FavoriteInit />
      <CartInit />
      <div data-theme="">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Slides />} />

            <Route path="products">
              <Route path="category/:categoryName" element={<Category />} />
              <Route path="id/:part1/:part2/" element={<Product />} />
              <Route path="shopping-cart" element={<ShoppingCartPage />} />
              <Route path="my-collection" element={<MyCollectionPage />} />
              <Route path="purchase" element={<Purchase/>}/>
            </Route>

            <Route path="user">
              <Route path="login" element={<UserAccount />} />
              <Route path="detail" element={<UserDetail />} />
              <Route path="register" element={<Register />} />
              <Route path="forgetpassword" element={<ForgetPassword />} />
            </Route>

            <Route path="help-center">
              <Route path="how-to" element={<HowTo />} />
              <Route path="paymentmethods" element={<PaymentMethods />} />
              <Route path="deliverymethods" element={<DeliveryMethods />} />
              <Route path="size" element={<Size />} />
              <Route path="purchases" element={<Purchases />} />
            </Route>

            <Route path="company">
              <Route path="company-corp" element={<Company />} />
              <Route path="work-with-us" element={<WorkWithUs />} />
              <Route path="location" element={<Location />} />
            </Route>

            {/* 以下為有閒情再做的東西 */}
            {/* <Route path="user">
            login、signIn部份看是要在其他頁面做彈跳視窗還是拉出來獨立頁面
            <Route path="login" element={<Login />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="user-detail" element={<UserDetail />} />
          </Route> */}
          </Routes>
        </BrowserRouter>
      </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
