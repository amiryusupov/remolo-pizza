import React, { useEffect } from "react";
import search from "../../assets/images/icons/search.svg";
import Products from "./Products";
import MainCategory from "./MainCategory";
import burger__menu from "../../assets/images/icons/burger_menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions/categoriesAction";
import CategorySkeleton from "../skeleton/CategorySkeleton";
import ProductSkeleton from "../skeleton/ProductSkeleton";
import { getProducts } from "../../redux/actions/productsAction";

function Main() {
  const { categories, products } = useSelector((state) => state);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [])
  return (
    <div className="main">
          <div className="main-row">
        <div className="main__search">
          <img src={search} alt="search__img" />
          <input type="text" placeholder="Busca algo de nuestro menu..." />
        </div>
        <div className="main__search-mobile">
          <img src={burger__menu} alt="" />
          <img src={search} alt="search__img" />
        </div>
        <div className="main__title">
          <span className="main__title-text1">Categorias</span>
          <span className="main__title-text2">
            Elige nuestras deliciosas pizzas
          </span>
        </div>
        {categories.loading === true && <CategorySkeleton categories={4}/>}
        <MainCategory
          categoriesData={categories.items}
          activeCategory={categories.activeCategory}
        />
        {products.loading === true && <ProductSkeleton products={4}/>}
        <Products
        product={products.items.filter(
          (item) => item.category === categories.activeCategory
        )}
      />
      </div>
    </div>
  );
}

export default Main;
