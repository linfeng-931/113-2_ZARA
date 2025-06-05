import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { db } from "./config";
import { doc, getDoc, updateDoc, setDoc, arrayUnion } from "firebase/firestore";

// 原本的資料取得函式
const fetchProduct = async (id) => {
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

// 原本的新增評論函式
const postReview = async ({ productId, newReview }) => {
  const productRef = doc(db, "products", productId);

  const productSnap = await getDoc(productRef);

  if (!productSnap.exists()) {
    await setDoc(productRef, {
      reviews: [newReview],
    });
    return;
  }

  await updateDoc(productRef, {
    reviews: arrayUnion(newReview),
  });
};

// React Query Hook: 取得商品
export const useProduct = (id) => {
  return useQuery(["product", id], () => fetchProduct(id), {
    enabled: !!id, // id 存在才執行
  });
};

// React Query Hook: 新增評論
export const useAddReview = () => {
  const queryClient = useQueryClient();

  return useMutation(postReview, {
    onSuccess: (_, variables) => {
      // 新增評論成功後，重新抓取該商品資料
      queryClient.invalidateQueries(["product", variables.productId]);
    },
  });
};
