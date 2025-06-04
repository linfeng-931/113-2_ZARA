function ReviewOrder({items, detail}){
    console.log(items);
    const delivery_method = ["門市取貨", "寄送到府", "超商取貨"];
    const payment_method = ["信用卡付款", "門市付款"];
    const sizeList = ["S", "M", "L", "XL"];
    return(
        <>
        <div className="w-150 text-left mb-10">
            <h1>配送資訊</h1>
            <div className="divider mt-0"></div>
            <div className="flex gap-5"><p className="font-bold">訂貨人</p><p>{detail.name}</p></div>
            <div className="flex gap-5"><p className="font-bold">聯絡電話</p><p>{detail.phone}</p></div>
            <div className="flex gap-5"><p className="font-bold">配送方式</p><p>{delivery_method[detail.delivery_method]}</p></div>
            <div className="flex gap-5 mb-15"><p className="font-bold">配送地點</p><p>{detail.address}</p></div>
             
            <h1>付款資訊</h1>
            <div className="divider mt-0"></div>
            <div className="flex gap-5"><p className="font-bold">付款方式</p><p className={`${detail.payment_method == 1 ? "mb-10":""}`}>{payment_method[detail.payment_method]}</p></div>
            {detail.payment_method == 0 &&
                <div className="flex gap-5"><p className="font-bold mb-15">信用卡卡號</p><p>{detail.card.number}</p></div>
            }

            <h1>商品內容</h1>
            <div className="divider mt-0"></div>
            <div className="hidden lg:grid grid-cols-6 items-center mb-8">
              <p className="hint">PRODUCT</p>
              <p></p>
              <p className="hint text-center">COLOR</p>
              <p className="hint text-center">SIZE</p>
              <p className="hint text-center">QUANTITY</p>
              <p className="hint text-right">PRICE</p>
            </div>

            {items.map((item, index) => (
                <div key={index} className="grid grid-cols-6 items-center mb-15">
                    <div className="flex gap-4 items-center">
                        <img
                            src={item.cover}
                            className="w-[90%] object-cover object-center"
                        />
                        <p>{item.title}</p>
                    </div>
                    <p></p>
                    <p className="text-center">{item.color}</p>
                    <p className="text-center">{sizeList[item.size]}</p>
                    <p className="text-center">{item.qty}</p>
                    <p className="text-right">{item.price*item.qty}</p>
                </div>
            ))}
        </div>
        </>
    )
}
export default ReviewOrder;