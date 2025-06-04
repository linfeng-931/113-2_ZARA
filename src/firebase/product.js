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

  const productSnap = await getDoc(productRef);

  // 如果文件不存在，先建立它（可根據需要初始化其它欄位）
  if (!productSnap.exists()) {
    await setDoc(productRef, {
      reviews: [newReview], // 初始化 reviews 陣列
    });
    console.log("文件不存在，已建立並新增 review");
    return;
  }

  // 文件存在，執行 arrayUnion 新增 review
  await updateDoc(productRef, {
    reviews: arrayUnion(newReview),
  });

  console.log("新增 review 成功");
};
