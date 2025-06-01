import { db } from "./config";
import { doc, getDoc, updateDoc, setDoc, arrayUnion } from "firebase/firestore";

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

export const addReview = async (productId, newReview) => {
  const productRef = doc(db, "products", productId);

  // 再執行 arrayUnion 新增 review
  await updateDoc(productRef, {
    reviews: arrayUnion(newReview),
  });

  console.log("新增 review 成功");
};
