import Modal from 'antd/es/modal/Modal'
import React from 'react'

const ModalXeDetail = (props) => {
  //Destructuring
  let {isModalOpen,setModalCancel,XeDetail} = props //render -> re-render
  return (
    <Modal title="Hiển thị thông tin xe" open={isModalOpen} onCancel={setModalCancel} >
      {XeDetail ?(<div>
      <img src={XeDetail.img} alt="" />
      <p>{XeDetail.name}</p>
      <p>{XeDetail.price}</p>
    </div>)
    : <p>Không có chiếc xe nào hiển thị</p> }
    
  </Modal>
  )
}

export default ModalXeDetail