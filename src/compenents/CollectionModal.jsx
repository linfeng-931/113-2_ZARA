import { selectFavoriteItems } from "../redux/favSlice";
import Heart from "./Heart";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { handleClearFavorites } from "./HandleClearFavorites";
import { useAuth } from "../contexts/authContext";

function CollectionModal() {
  const { userLoggedIn } = useAuth();
  const dispatch = useDispatch();
  let favItems = useSelector(selectFavoriteItems);
  return (
    <>
      <div className="w-full">
        <h1 className="text-center mb-10">Favorite Items</h1>
        <div>
          {favItems.length === 0 ? (
            <div>
              <p className="text-center">There is no favorite item</p>
            </div>
          ) : (
            <div className="grid grid-cols-9 lg:grid-cols-12 gap-2 min-h-auto">
              {favItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-2 col-span-3  2xl:col-span-2 mb-4"
                >
                  <Link to={`/products/id/${item.id}`}>
                    <div className="w-40 overflow-hidden ">
                      <img
                        src={item.cover}
                        className="w-full object-cover object-center "
                      />
                    </div>
                  </Link>

                  <p className="text-left">{item.title}</p>
                  <Heart userLoggedIn={userLoggedIn} product={item} />
                </div>
              ))}
            </div>
          )}

          {favItems.length === 0 ? (
            <div className="hidden"></div>
          ) : (
            <div className="visible flex flex-col gap-5 items-center">
              <div
                className="w-full text-right"
                onClick={() => handleClearFavorites(favItems, dispatch)}
              >
                <p className="font-black hover:opacity-50 duration-150 cursor-pointer">
                  清空收藏清單
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CollectionModal;
