import { useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";
import { useAuth } from "../contexts/authContext";
import { Link } from "react-router";
import { getUserProfile } from "../firebase/users";
import { auth } from "../firebase/config";
import { useAddReview } from "../firebase/product";

function WriteReview({ productId, product, onReviewAdded }) {
  const { userLoggedIn } = useAuth();
  const [user_profile, setProfile] = useState(null);
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);

  const size_list = ["S", "M", "L", "XL"];
  const color = product?.class?.map((item) => item.color) || [];
  const [rsize, setrSize] = useState(0);
  const [rcolor, setrColor] = useState(color[0]);
  const [loading, setloading] = useState(false);

  const addReviewMutation = useAddReview();

  useEffect(() => {
    const fetchProfile = async () => {
      const currentUser = auth.currentUser;

      if (userLoggedIn && currentUser && currentUser.uid) {
        try {
          const userData = await getUserProfile(currentUser.uid);
          setProfile(userData);
        } catch (error) {
          console.error("Failed to fetch profile:", error);
        }
      }
    };
    fetchProfile();
  }, [userLoggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content || rating === 0 || !user_profile) return;

    const date = new Date();

    await addReviewMutation.mutateAsync(
    {
        productId,
        newReview: {
        reviewer: user_profile.name,
        rating,
        comment: content,
        size: rsize,
        color: rcolor,
        time: Timestamp.fromDate(date),
        },
    },
    await {
        onSuccess: () => {
        onReviewAdded();
        setContent("");
        setRating(0);
        setrSize(0);
        setrColor(color[0]);
        },
        onError: (error) => {
        console.error("Failed to add review:", error);
        },
    }
    );
    setloading(false);
  };

  return (
    <>
      <div className="w-full text-left mt-20">
        <p className="font-bold">留言撰寫</p>
        {userLoggedIn && (
          <form onSubmit={handleSubmit}>
            {loading &&
              <div className="left-[49.5%] mt-35 absolute">
                <span className="loading loading-dots loading-sm"></span>
              </div>
            }
            <div className="flex justify-between items-center">
              <div className="rating rating-sm mb-3">
                {[1, 2, 3, 4, 5].map((value) => (
                  <input
                    key={value}
                    type="radio"
                    name="rating"
                    className="mask mask-star-2 mr-1"
                    aria-label={`${value} star`}
                    onChange={() => setRating(value)}
                    checked={rating === value}
                    value={value}
                  />
                ))}
              </div>

              <div className="flex gap-10">
                <div className="flex w-50 items-center">
                  <p className="hint w-20">size : </p>

                  <select
                    value={rsize}
                    className="select mb-2 md:mb-4 select-bordered w-full h-[40px] cursor-pointer hover:opacity-50 duration-150"
                    onChange={(e) => setrSize(e.target.value)}
                  >
                    {size_list.map((x, i) => (
                      <option key={x} value={i}>
                        {x}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex w-50 items-center">
                  <p className="hint w-20">color : </p>

                  <select
                    className="select mb-2 md:mb-4 select-bordered w-full h-[40px] cursor-pointer hover:opacity-50 duration-150"
                    onChange={(e) => setrColor(e.target.value)}
                    value={rcolor}
                  >
                    {color.map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <textarea
              className="textarea w-full h-50 mb-8"
              placeholder="請輸入文字"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            ></textarea>
            <div className="w-full flex justify-center">
              <button
                className={`flex h-12 w-[40%] justify-center items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                        hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white
                        ${
                          !content || rating == 0 || addReviewMutation.isLoading
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                        `}
                type="submit"
                disabled={!content || rating == 0 || addReviewMutation.isLoading}
                onClick = {()=>setloading(true)}
              >
                <p>SUBMIT</p>
              </button>
            </div>
          </form>
        )}
        {!userLoggedIn && (
          <div className="w-full flex flex-col items-center mt-10">
            <p className="hint mb-5">如欲撰寫留言，請先登入。</p>
            <Link to="/user/login">
              <div
                className={`flex h-12 w-90 justify-center items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                        hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white
                        `}
              >
                <p>LOGIN</p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default WriteReview;
