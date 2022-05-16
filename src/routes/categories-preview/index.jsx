import { useContext } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview";
import { CategoriesContext } from "../../context/categoriesContext";
import { selectCategoriesMap } from "../../store/categories/categorySelector";

const CategoriesPreview = () => {
  //const { categoriesMap } = useContext(CategoriesContext)

  const categoriesMap = useSelector(selectCategoriesMap)

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </>
  );
};

export default CategoriesPreview