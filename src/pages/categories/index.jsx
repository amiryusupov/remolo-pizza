import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from "../../redux/actions/categoriesAction";
import PageHeader from "../../components/admin/PageHeader"
import TableList from "../../components/admin/TableList"
import Drawer from '../../components/admin/Drawer';
function CategoriesPage() {
  const { items, loading } = useSelector((state) => state.categories)
  const [modalOpen, setModalOpen] = useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  const tableColumns = [
    {
      title: "Name",
      dataKey: "name"
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
        <PageHeader title="Categories" children={
          <div className='admin-space'>
            <button className='admin-btn' onClick={handleModalOpen}>Add category</button>
            <button className='admin-btn'>Refresh</button>
          </div>
        } />
        <TableList columns={tableColumns} data={items} loading={loading} />
        <Drawer open={modalOpen} close={handleModalClose} title={"Add product"}>
          <span>category</span>
        </Drawer>
      </div>
    </div>
  )
}

export default CategoriesPage;