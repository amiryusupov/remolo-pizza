import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/admin/PageHeader';
import TableList from '../../components/admin/TableList';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, getProducts } from '../../redux/actions/productsActions';
import Drawer from '../../components/admin/Drawer';
import { Input } from '../../components/form/Input';
import { getCategories } from '../../redux/actions/categoriesAction';
import SelectForm from '../../components/form/Select';

function ProductsPage() {
  const { items, loading } = useSelector((state) => state.products)
  const [modalOpen, setModalOpen] = useState(false)
  const { categories } = useSelector((state) => state)
  // const {items: productItems, loading: productLoading} = products
  const { items: categoryItems, loading: categoryLoading } = categories
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
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
          <div className='admin-actions'>
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
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { target } = e
    const obj = {}
    for (let i = 0; i < target.elements.length-1; i++) {
      obj[target.elements[i].name] = target.elements[i].value
      console.log(obj);
    }
    const response = await addProduct(obj)
    console.log(response);
    if(response.id) {
      handleModalClose()
      dispatch(getProducts())
    }
  }
  console.log(categoryItems);
  return (
    <div className="products">
      <div className="products__container">
        <PageHeader title="Products">
          <div className='admin-actions'>
            <button className='admin-btn' onClick={handleModalOpen}>Add product</button>
            <button className='admin-btn'>Refresh</button>
          </div>
        </PageHeader>
        <TableList columns={tableColumns} data={items} loading={loading} />
        <Drawer open={modalOpen} close={handleModalClose} title={"Add product"}>
          <form onSubmit={handleSubmit}>
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
              <SelectForm options={categoryItems.map((item) => ({ label: item.name, value: item.id }))} defaultValue={1} labelValue="category" labelName="Category" inputName="category" />
            </div>
            <div className="drawer-form__group">
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea name="description" cols="30" rows="10" id="description" placeholder="Enter product description" />
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