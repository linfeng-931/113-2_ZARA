import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from "react";

function ImageScroller({ images, isActiveImg, setisActiveImg }) {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 4;
    const maxStartIndex = Math.max(0, images.length - visibleCount);

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setStartIndex((prev) => Math.min(prev + 1, maxStartIndex));
    };

    return (
        <>
            <img
                className='w-full mb-3 h-120 rounded-[10px] object-cover object-center'
                src={images[isActiveImg]}
            />

            <div className="relative flex items-center">
                <button
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                    className={`cursor-pointer hover:opacity-50 absolute left-0 z-10 p-1 rounded-full shadow-md transition-opacity ${
                        startIndex === 0 ? "opacity-30 cursor-not-allowed" : "bg-white bg-opacity-80 hover:bg-opacity-100"
                    }`}
                >
                    <ChevronLeft />
                </button>

                <div className="w-full flex justify-center gap-2 px-10">
                    {images.slice(startIndex, startIndex + visibleCount).map((img,index)=>{
                        const actualIndex = startIndex + index;
                        return(
                            <div key={actualIndex} className="w-15 h-15 rounded-[1px] overflow-hidden">
                                <img
                                    onClick={() => setisActiveImg(actualIndex)}
                                    className={`
                                        object-cover object-center w-full h-full rounded transition-all duration-150
                                        ${isActiveImg === actualIndex ? "opacity-30 cursor" : "cursor-pointer hover:scale-105"}
                                    `}
                                    src={img}
                                    alt={`product-img-${actualIndex}`}
                                />
                            </div>
                        )
                    })}
                </div>

                {/* 右按鈕 */}
                <button
                    onClick={handleNext}
                    disabled={startIndex === maxStartIndex}
                    className={`cursor-pointer hover:opacity-50 absolute right-0 z-10 p-1 rounded-full shadow-md transition-opacity ${
                        startIndex === maxStartIndex ? "opacity-30 cursor-not-allowed" : "bg-white bg-opacity-80 hover:bg-opacity-100"
                    }`}
                >
                    <ChevronRight />
                </button>
            </div>
        </>
    );
}

export default ImageScroller;
