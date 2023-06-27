import React from 'react'
import Skeleton from 'react-loading-skeleton';

function ProductSkeleton({products}) {
  return (
    <div className="skeleton__products">
      {
        Array(products).fill(0).map((_, id) => {
          return (
            <Skeleton key={id} width="260px" height="270px" borderRadius="16px"/>
          )
        }
        )
      }
    </div>
  )
}

export default ProductSkeleton;