import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import CollectionModal from "../compenents/CollectionModal";
function MyCollectionPage() {
  return (
    <>
      <div className="header relative mb-10">
        <Header />
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-[80%]">
          <CollectionModal />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default MyCollectionPage;
