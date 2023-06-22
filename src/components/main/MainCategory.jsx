import React from 'react'

function MainCategory({categoriesData, store, activeCategory}) {
  const handleCategoryChange = (name) => {
    store.setActiveCategory(name);
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