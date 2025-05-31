function CollectionModal() {
  //   const dispatch = useDispatch();
  //   let favItems = useSelector(setFavoriteItems);
  //   console.log(favItems);
  //   const handleCheckOut = async () => {
  //     try {
  //       const currentUser = auth.currentUser;

  //       if (currentUser && favItems.length > 0) {
  //         // 建立訂單物件
  //         const order = {
  //           items: favItems,
  //           time: new Date().toLocaleString("zh-TW", { hour12: false }),
  //         };

  //         const userDocRef = doc(db, "user", currentUser.uid);

  //         // 將訂單 push 進 favItems 陣列中
  //         await updateDoc(userDocRef, {
  //           favItems: arrayUnion(order),
  //         });
  //         console.log("favItems uploaded.");
  //       }

  //       dispatch(clearFavoriteItems());
  //     } catch (err) {
  //       console.error("Check Out error:", err);
  //     }
  //   };

  return (
    <>
      <div className="w-full">
        <h1 className="text-center">Favorite Items</h1>
        {/* <div>
          {favItems.length === 0 ? (
            <p className="text-center">There is no favorite item</p>
          ) : (
            favItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-7 gap-15 items-center justify-center mb-15"
              >
                <Link to={`/products/id/${item.id}`}>
                  <div className="w-40 overflow-hidden">
                    <img
                      src={item.cover}
                      className="w-full object-cover object-center"
                    />
                  </div>
                </Link>

                <p className="text-left">{item.title}</p>

                <div
                  className="w-full flex justify-center hover:opacity-50 duration-[.2s]"
                  onClick={() => dispatch(removeCartItems(item.id))}
                >
                  <X className="h-4" />
                </div>
              </div>
            ))
          )}

          {favItems.length === 0 ? (
            <div className="hidden"></div>
          ) : (
            <div className="visible flex flex-col gap-5 items-center">
              <div
                className="w-full text-right"
                onClick={() =>
                  favItems.map((item) => dispatch(removeCartItems(item.id)))
                }
              >
                <p className="font-black hover:opacity-50 duration-150 cursor-pointer">
                  清空收藏清單
                </p>
              </div>
            </div>
          )}
        </div> */}
      </div>
    </>
  );
}

export default CollectionModal;
