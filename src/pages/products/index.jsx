import React, { useEffect } from 'react'
import PageHeader from '../../components/admin/PageHeader';
import TableList from '../../components/admin/TableList';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productsAction';

function ProductsPage() {
  const { items, loading } = useSelector((state) => state.products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
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
      title: "Category",
      dataKey: "category"
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
        <PageHeader title="Products" children={
          <div className='admin-space'>
            <button className='admin-btn'>Add product</button>
            <button className='admin-btn'>Refresh</button>
          </div>
        } />
        <TableList columns={tableColumns} data={items} loading={loading} />
      </div>
    </div>
  )
}

export default ProductsPage;