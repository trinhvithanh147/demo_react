import { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const index = (props) => {
  // một state dùng để quản lý api
  //useEffect dùng để xử lí gọi API
  //useEffect đang chạy quá trình mounting và ở đây là trạng thái của component didmount
  const [listMovie, setListMovie] = useState([]) // mảng(array)
  const navigate = useNavigate()
  console.log("Tôi là component ListMovie")
  console.log(listMovie)
  //Thực hiện sau khi giao diện component hiển thị trên trang web
  useEffect(() => {
    console.log("Tôi là useEffect nè")
    axios({
      method: "GET",
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      headers: {
        "TokenCybersoft": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NiIsIkhldEhhblN0cmluZyI6IjIyLzA0LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0NTI4MDAwMDAwMCIsIm5iZiI6MTcxNzA4ODQwMCwiZXhwIjoxNzQ1NDI3NjAwfQ.a2GNW-Uz9iEgJEYu556bmpJxt1RW5ypggQazVphPdc4"
      }
    }).then((res) => {
      // console.log(isNaN(props.started)&& isNaN(props.ended))
      console.log()
      const dataMovie = res.data.content.slice(props.started,props.ended)
      
      setListMovie(dataMovie) //reRender Component
    }).catch((err) => {
      console.log(err)
    })
  },[])
  function renderLayout() {
    console.log("Tôi là giao diện của component listMovie listmovie")
    return listMovie.map((phim, index) => (<div key={index}>
      <img src={phim.hinhAnh} alt="" className='w-full' />
      <h3>{phim.tenPhim}</h3>
      <button onClick={()=>{
        //Chuyển hướng người dùng thông qua navigate từ react router dom
        navigate(`/about/${phim.maPhim}`)
      }} className='inline-block w-100 py-2 bg-black text-white rounded-md'>Mua ngay</button>
    </div>))
  }
  return (
    <div className='container'>
      <h3>ListMovie</h3>
      <div className='grid grid-cols-4 mt-4 gap-5'>
      {renderLayout()}
      </div>
    </div>
  )
}

export default index