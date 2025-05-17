import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router";
import Slides from "./page/Home";
import Category from "./page/Category";
import Product from "./page/Product";
import ShoppingCartPage from "./page/ShoppingCartPage";
import UserAccount from "./page/UserAccount";
import User from "./page/User";
import Register from "./page/Register"
import { selectCartItems } from "./redux/cartSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <div data-theme="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Slides />} />

            <Route path="products">
              <Route path="category/:categoryName" element={<Category />} />
              <Route path="id/:part1/:part2/" element={<Product />} />
              <Route path="shopping-cart" element={<ShoppingCartPage />} /> 
            </Route>

            <Route path="user">
              <Route path="login" element={<UserAccount />} />
              <Route path="detail" element={<User />} />
              <Route path="register" element={<Register />} />
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
    </>
  );
}

export default App;
