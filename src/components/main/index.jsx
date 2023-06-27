import React, { useEffect } from "react";
import search from "../../assets/images/icons/search.svg";
import Products from "./Products";
import MainCategory from "./MainCategory";
import burger__menu from "../../assets/images/icons/burger_menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts } from "../../redux/actions/categoriesAction";
import Loading from "../Loading";

function Main() {
  const { categories, products } = useSelector((state) => state);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [])
  return (
    <div className="main">
      {
        products.loading === true ? <Loading/> : (
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
          <MainCategory
          categoriesData={categories.items}
          activeCategory={categories.activeCategory}
        />
        <Products
        product={products.items.filter(
          (item) => item.category === categories.activeCategory
        )}
      />
      </div>
        )
      }
    </div>
  );
}

export default Main;
