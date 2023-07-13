import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/admin/PageHeader';
import TableList from '../../components/admin/TableList';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productsAction';
import Drawer from '../../components/admin/Drawer';
import { Input } from '../../components/form/Input';

function ProductsPage() {
  const { items, loading } = useSelector((state) => state.products)
  const [modalOpen, setModalOpen] = useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [])
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
  const handleModalOpen = () => {
    setModalOpen(true)
  }
  const handleModalClose = () => {
    setModalOpen(false)
  }
  return (
    <div className="products">
      <div className="products__container">
        <PageHeader title="Products" children={
          <div className='admin-space'>
            <button className='admin-btn' onClick={handleModalOpen}>Add product</button>
            <button className='admin-btn'>Refresh</button>
          </div>
        } />
        <TableList columns={tableColumns} data={items} loading={loading} />
        <Drawer open={modalOpen} close={handleModalClose} title={"Add product"}>
          <form>
            <div className="drawer-form__group">
              <Input labelInput="name" labelName="Name" placeholder="Enter product name" inputName="name" />
              <Input labelInput="price" labelName="Price" type="number" placeholder="Enter product price" inputName="price" />
            </div>
            <div className="drawer-form__group">
              <Input labelInput="discount" labelName="Discount" type="number" placeholder="Enter product discount" inputName="discount" />
              <Input labelInput="image" labelName="Image" type="url" placeholder="Enter image url" inputName="image" />
            </div>
            <div className="drawer-form__group">
              <Input labelInput="rating" labelName="Rating" type="number" placeholder="Enter product rating" inputName="rating" />
              <Input labelInput="category" labelName="Category" type="textarea" placeholder="Enter product category" inputName="category" />
            </div>
            <div className="drawer-form__group">
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea name="description" cols="30" rows="10" placeholder="Enter product description" />
              </div>
            </div>
            <input className="admin-btn" type="submit" value="submit" />
          </form>
        </Drawer>
      </div>
    </div>
  )
}

export default ProductsPage;