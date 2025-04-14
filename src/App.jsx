import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Home from './page/Home'
import Product from './page/Product'
function App() {
  return (
    <>
      <div data-theme="">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}/>

          {/*<Route path = "products">
            <Route path = "category/:categoryName" element={<Category/>}/>
            <Route path = "id/:productId" element = {<Product/>}/>
            <Route path = "shopping-cart" element = {<ShoppingCart/>}/>
          </Route>*/}

          {/*以下為有閒情再做的東西
          <Route path = "user">
            login、signIn部份看是要在其他頁面做彈跳視窗還是拉出來獨立頁面
            <Route path = "login" element = {<Login/>}/>
            <Route path = "sign-in" element = {<SignIn/>}/>
            <Route path = "user-detail" element = {<UserDetail/>}/>
          </Route>*/}
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
