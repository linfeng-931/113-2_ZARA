import { db } from "./config";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

export const getProduct = async (id) => {
  if (!id) throw new Error("ID is required to fetch product");

  const productsRef = doc(db, "products", id);
  const docSnap = await getDoc(productsRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const reviewsArray = data.reviews ? Object.values(data.reviews) : [];

    return {
      ...data,
      reviews: reviewsArray,
    };
  } else {
    throw new Error("Product not found");
  }
};
