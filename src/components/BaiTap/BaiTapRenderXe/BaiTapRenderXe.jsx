import React, { useState } from 'react'
import ListXe from './ListXe'
import ModalXeDetail from './ModalXeDetail'

const BaiTapRenderXe = () => {
  const [isModalOpen,setIsModalOpen] = useState(false);
  //Tạo một state để quản lý thông tin chi tiết xe
  const [XeDetail, setXeDetail] = useState();
  // xử lí dữ liệu chi tiết loại xe người dùng cần coi khi bấm setModalOpen
  // Đưa dữ liệu từ state xuống component modal để hiển thị chi tiết xe
  function setModalCancel(){
    setIsModalOpen(false)
  }
  function showModal(xe){
    setIsModalOpen(true)
    setXeDetail(xe)
  }
  let arrListXe = [{
    id: 1,
    img: './imgCar/products/black-car.jpg',
    name: "black car",
    price: 1000
  },{
    id: 2,
    img: './imgCar/products/red-car.jpg',
    name: "red car",
    price: 2000
  },{
    id: 3,
    img: './imgCar/products/silver-car.jpg',
    name: "sliver car",
    price: 2000
  },{
    id: 4,
    img: './imgCar/products/silver-car.jpg',
    name: "Steel car",
    price: 2000
  }]
  return (
    <div>
    <h2>Bài tập hiển thị danh sách xe</h2>
     {/* Hiển thị danh sách xe */}
    <ListXe arrListXe={arrListXe} showModal={showModal}/>
    {/* modal hiển thị thông tin chi tiết xe */}
    <ModalXeDetail XeDetail={XeDetail} arrListXe={arrListXe} setModalCancel={setModalCancel} isModalOpen={isModalOpen}/>
    </div>
  )
}

export default BaiTapRenderXe