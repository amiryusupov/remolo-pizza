import React from "react";
import search from "../../assets/images/icons/search.svg";
import Products from "./Products";
import MainCategory from "./MainCategory";
import burger__menu from "../../assets/images/icons/burger_menu.svg";

function Main({ store }) {
  const { categories, product } = store.getState();
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
            Elige nuestras deliciosas pizzas{" "}
          </span>
        </div>
        <MainCategory
          store={store}
          categoriesData={categories.items}
          activeCategory={categories.activeCategory}
        />
        <Products
          product={product.items.filter(
            (item) => item.category === categories.activeCategory
          )}
          store={store}
        />
      </div>
    </div>
  );
}

export default Main;
