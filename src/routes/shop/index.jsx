import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview";
import Category from "../category";

import { fetchCategoriesAsync } from '../../store/categories/categoryAction'

import './styles.scss'
import { useDispatch } from "react-redux";

const Shop = () => {

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchCategoriesAsync())
  }, [dispatch])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop