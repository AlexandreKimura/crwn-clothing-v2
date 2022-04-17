import { useContext } from "react";
import CategoryPreview from "../../components/category-preview";
import { CategoriesContext } from "../../context/categoriesContext";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products}/>
      })}
    </>
  );
};

export default CategoriesPreview