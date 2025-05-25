import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../contexts/authContext";
import { auth } from "../../firebase/config";
import { getUserCart } from "../../firebase/users";
import { setCartItems } from "../../redux/cartSlice";

function CartInit() {
  const dispatch = useDispatch();
  const { userLoggedIn } = useAuth();

  useEffect(() => {
    const fetchCart = async () => {
      const currentUser = auth.currentUser;
      if (userLoggedIn && currentUser) {
        const cart = await getUserCart(currentUser.uid);
        console.log(currentUser.uid);
        dispatch(setCartItems(cart));
      }
    };

    fetchCart();
  }, [userLoggedIn]);

  return null;
}

export default CartInit;