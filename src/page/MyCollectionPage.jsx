import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import CollectionModal from "../compenents/CollectionModal";
function MyCollectionPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="header relative mb-10">
          <Header />
        </div>
        <div className="w-full flex flex-col flex-1 items-center">
          <div className="w-[80%]">
            <CollectionModal />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default MyCollectionPage;
