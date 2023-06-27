import React from 'react'
import { useDispatch } from 'react-redux';
import { setActiveCategory } from '../../redux/slices/categoriesSlice';
import parse from "html-react-parser"
function MainCategory({categoriesData, activeCategory}) {
  const dispatch = useDispatch()
  const handleCategoryChange = (name) => {
    dispatch(setActiveCategory(name))
  }
  return (
    <div className="main__category">
      {
        categoriesData.map(item => {
          return (
            <button onClick={() => handleCategoryChange(item.name)} className={`main__category-item${item.name === activeCategory ? " active" : ""}`} key={item.id}>
              {
              parse(item.icon)
              }
              <span className="main__category-text">{item.name}</span>
            </button>
          )
        })
      }
    </div>
  )
}

export default MainCategory;