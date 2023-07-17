import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, editCategory, getCategories } from "../../redux/actions/categoriesAction";
import PageHeader from "../../components/admin/PageHeader"
import TableList from "../../components/admin/TableList"
import Drawer from '../../components/admin/Drawer';
import { Input } from '../../components/form/Input';
function CategoriesPage() {
  const { items, loading } = useSelector((state) => state.categories)
  const [modalOpen, setModalOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(null)
  const [formLoading, setFormLoading] = useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  const form = useRef()
  const setValues = (data) => {
    for (let item in data) {
      const { current: { elements } } = form
      if (elements[item]) {
        elements[item].value = data[item]
      }
    }
  }
  const resetForm = () => {
    form.current.reset()
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { target } = e
    const obj = {}
    for (let i = 0; i < target.elements.length - 1; i++) {
      obj[target.elements[i].name] = target.elements[i].value
      console.log(obj);
    }
    setFormLoading(true)
    const response = isEdit ? await editCategory(obj, isEdit) : await addCategory(obj)
    console.log(response);
    if (response.id) {
      handleModalClose()
      dispatch(getCategories())
      setFormLoading(false)
    }
  }
  const handleEditBtn = (el) => {
    setValues(el)
    handleModalOpen()
    setIsEdit(el.id)
  }
  const tableColumns = [
    {
      title: "Name",
      dataKey: "name"
    },
    {
      title: "Actions",
      render: (el) => {
        return (
          <div className='admin-actions'>
            <button className='admin-btn' onClick={() => handleEditBtn(el)}>Edit</button>
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
    resetForm()
    setIsEdit(null)
  }
  return (
    <div className="products">
      <div className="products__container">
        <PageHeader title="Categories" children={
          <div className='admin-actions'>
            <button className='admin-btn' onClick={handleModalOpen}>Add category</button>
            <button className='admin-btn'>Refresh</button>
          </div>
        } />
        <TableList columns={tableColumns} data={items} loading={loading} />
        <Drawer open={modalOpen} close={handleModalClose} title={"Add category"}>
          <form onSubmit={handleSubmit} ref={form}>
            <div className="drawer-form__group">
              <Input labelInput="name" labelName="Name" placeholder="Enter product name" inputName="name" />
              <Input labelInput="icon" labelName="Icon" placeholder="Enter icon url" inputName="icon" />
            </div>
            <input className="admin-btn" type="submit" value={formLoading ? "Loading..." : isEdit ? "Edit" : "Add"} />
          </form>
        </Drawer>
      </div>
    </div>
  )
}

export default CategoriesPage;