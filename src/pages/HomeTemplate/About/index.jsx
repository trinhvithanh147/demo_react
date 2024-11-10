import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { http } from '../../../services/config'
import ListMovie from './../ListMovie'
const index = () => {
  const {id} = useParams()
  const [movieDetail, setMovieDetail] = useState() //OBJECT chứa thông tin phim

  //trạng thái didUpdate  sẽ cập nhật lại lần 2
  useEffect(() => {
    console.log("huhu");
    http.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((res) => {
        console.log(res)
        setMovieDetail(res.data.content)
      }).catch((err) => {
        console.log(err)
      })
  }, [id]) // nếu mà id thay đổi nó cần chạy lại useEffect 1 lần nữa
  return (
    <div className="container">
      <h3>About</h3>
      <div className="grid grid-cols-12">
        {movieDetail && <>
          <div className="col-span-4">
          <img src={movieDetail.hinhAnh} alt="" className='w-full'/>
        </div>
        <div className="col-span-8">
          <h4>{movieDetail.tenPhim}</h4>
          <p>Đánh giá từ người dùng:{movieDetail.danhGia}</p>
          {movieDetail.hot &&<div className='bg-red-500 text-white px-4 py-2 rounded-sm inline-block'>Hot</div>}
          {movieDetail.dangChieu?<div className='bg-blue-500 text-white px-4 py-2 rounded-sm inline-block'>Đang Chiếu</div>:<div className='bg-amber-600 text-white px-4 py-2 rounded-sm inline-block'>Chưa Chiếu</div>}
        </div>
        </>}
        
      </div>
      <ListMovie  started={0} ended={4}/>
    </div>
    
    // 8-4
    // 8 hình ảnh phim
    // 4 thông tin phim( tên phim- đánh giá - độ hot-đang chiếu)

  )
}

export default index