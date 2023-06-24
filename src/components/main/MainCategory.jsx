import React from 'react'
import { useDispatch } from 'react-redux';

function MainCategory({categoriesData, activeCategory}) {
  const dispatch = useDispatch()
  const handleCategoryChange = (name) => {
    dispatch({
      type: "setActiveCategory",
      payload: {categoryName: name}
    })
  }
  return (
    <div className="main__category">
      {
        categoriesData.map(item => {
          return (
            <button onClick={() => handleCategoryChange(item.name)} className={`main__category-item ${item.name === activeCategory ? " active" : ""}`} key={item.id}>
              {item.icon}
              <span className="main__category-text">{item.name}</span>
            </button>
          )
        })
      }
    </div>
  )
}

export default MainCategory;