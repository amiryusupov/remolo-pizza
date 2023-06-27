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
            <button onClick={() => handleCategoryChange(item.id)} className={`main__category-item${item.id === activeCategory ? " active" : ""}`} key={item.id}>
              <div className="main__category-icon">
              {parse(item.icon)}
              </div>
              <span className="main__category-text">{item.name}</span>
            </button>
          )
        })
      }
    </div>
  )
}

export default MainCategory;