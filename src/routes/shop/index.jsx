import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import CategoriesPreview from "../categories-preview";
import Category from "../category";

import { setCategories } from '../../store/categories/categoryAction'

import './styles.scss'
import { useDispatch } from "react-redux";

const Shop = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories')
      //console.log(categoriesArray)
      dispatch(setCategories(categoriesArray))
    }

    getCategoriesMap()
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop