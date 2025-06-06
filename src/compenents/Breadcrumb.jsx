import { useParams } from "react-router";

const Breadcrumb = ({ product }) => {
  const { categoryName } = useParams();

  const mainCategory = product[0].category1;
  const sideCategory = categoryName.toUpperCase();
  return (
    <div className="breadcrumbs flex items-center gap-2 text-sm  ml-[8.33vw]  my-8  ">
      <div className="line w-[6rem] h-[1.5px] bg-black"></div>
      <ul>
        <li>{mainCategory}</li>
        <li>{sideCategory}</li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
