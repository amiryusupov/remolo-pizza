import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CategorySkeleton({ categories }) {
  return (
    <div className="skeleton__category">
      {
        Array(categories).fill(0).map((_, id) => {
          return (
            <div className="skeleton__category-item" key={id}>
              <div className="skeleton__category-icon">
                <Skeleton circle width="25px" height="25px" />
              </div>
              <div className="skeleton__category-text">
                <Skeleton width="110px" />
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default CategorySkeleton;
