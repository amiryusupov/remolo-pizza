import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from "../../redux/actions/categoriesAction";
import PageHeader from "../../components/admin/PageHeader"
import TableList from "../../components/admin/TableList"
function CategoriesPage() {
  const { items, loading } = useSelector((state) => state.categories)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  console.log(items);
  const tableColumns = [
    {
      title: "Name",
      dataKey: "name"
    },
    {
      title: "Price",
      dataKey: "price"
    },
    {
      title: "Actions",
      render: (el) => {
        return (
          <div className='admin-space'>
            <button className='admin-btn' onClick={() => console.log(el)}>Edit</button>
            <button className='admin-btn' onClick={() => console.log(el)}>Delete</button>
          </div>
        )
      }
    }
  ]
  return (
    <div className="products">
      <div className="products__container">
        <PageHeader title="Categories" children={
          <div className='admin-space'>
            <button className='admin-btn'>Add category</button>
            <button className='admin-btn'>Refresh</button>
          </div>
        } />
        <TableList columns={tableColumns} data={items} loading={loading} />
      </div>
    </div>
  )
}

export default CategoriesPage;