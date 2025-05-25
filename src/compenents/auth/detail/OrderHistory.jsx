
function OrderHistory({orderhistory}){
    console.log(orderhistory);
    const size = ["S", "M", "L", "XL"];
    return(
        <>
            {!orderhistory || orderhistory.length === 0 ?(    
                <div className="w-full rounded-md shadow-md p-5">
                    <p>暫無購買紀錄</p>
                </div>
            ):(
                orderhistory.map((order, index) => (
                    <div key={index} className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3"/>
                        <div className="collapse-title flex justify-between items-center">
                            <p>{new Date(order.time).toLocaleDateString()}</p>
                            <p className="hint">品項數量：{order.items.reduce((total, item) => 
                                total + Number(item.qty), 0)}</p>
                            <p>Total Price：{order.items.reduce((total, item) => 
                                total + Number(item.price), 0)}</p>
                        </div>
                        <div className="collapse-content">
                            <div className="line w-full h-[1.5px] bg-black dark:bg-white opacity-10 mb-5"></div>
                            <div className="flex justify-between">
                                <div className="text-left w-40 flex flex-col">
                                    <p className="font-bold mb-5">PRODUCT</p>
                                    {order.items.map((item, index) => (
                                        <p key={index} className="flex items-center h-20">{item.title}</p>
                                    ))}
                                </div>
                                
                                <div className="w-20 flex flex-col items-center">
                                    <p className="font-bold mb-5">COLOR</p>
                                    {order.items.map((item, index) => (
                                        <p key={index} className="flex items-center h-20">{item.color}</p>
                                    ))}
                                </div>

                                <div className="w-10 flex flex-col items-center">
                                    <p className="font-bold mb-5">SIZE</p>
                                    {order.items.map((item, index) => (
                                        <p key={index} className="flex items-center h-20">{size[item.size]}</p>
                                    ))}
                                </div>

                                <div className="w-10 flex flex-col items-center">
                                    <p className="font-bold mb-5">QTY</p>
                                    {order.items.map((item, index) => (
                                        <p key={index} className="flex items-center h-20">{item.qty}</p>
                                    ))}
                                </div>

                                <div className="text-right w-10 flex flex-col">
                                    <p className="font-bold mb-5">PRICE</p>
                                    {order.items.map((item, index) => (
                                        <p key={index} className="flex items-center h-20 justify-end">{item.price}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    // <div key={index} className="w-full rounded-md shadow-md flex justify-between p-5">
                        
                    //     <p>{new Date(order.time).toLocaleDateString()}</p>
                    //     <p className="hint">品項數量：{order.items.reduce((total, item) => 
                    //         total + Number(item.qty), 0)}</p>
                    //     <p>Total Price：{order.items.reduce((total, item) => 
                    //         total + Number(item.price), 0)}</p>
                    // </div>
                ))
            )}
        </>
    )
}
export default OrderHistory;