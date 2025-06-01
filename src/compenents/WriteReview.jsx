import { useState } from "react";
import { addReview } from "../firebase/product";
import { Timestamp } from "firebase/firestore";

function WriteReview({productId, product, onReviewAdded}){
    console.log(productId);
    const [content, setContent] = useState("");
    const [rating, setRating] = useState(0);

    const size_list = ['S', "M", "L", "XL"];
    const color = product?.class?.map(item => item.color) || [];
    const [rsize, setrSize] = useState(0);
    const [rcolor, setrColor] = useState(color[0]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!content || rating === 0) return;
        
        const date = new Date();
        await addReview(productId, {
            reviewer: "Name",
            rating: rating,
            comment: content,
            size: rsize,
            color: rcolor,
            time: Timestamp.fromDate(date),
        });

        onReviewAdded();
        setContent("");
        setRating(0);
        setrSize(0);
        setrColor(color[0]);
        console.log("Review updated successfully");
    };

    return(
        <>
            <div className="w-full text-left mt-20">
                <p className="font-bold">留言撰寫</p>
                <form onSubmit={handleSubmit}>
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
                                onChange={(e)=>setrSize(e.target.value)}
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
                        // disabled
                    ></textarea>
                    <div className="w-full flex justify-center">
                        <button 
                            className={`flex h-12 w-[40%] justify-center items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                                    hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white
                                    ${!content ? "pointer-events-none opacity-50":""}
                                    `}
                            type="submit" disabled={!content}
                        >
                        <p>SUBMIT</p> 
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default WriteReview;