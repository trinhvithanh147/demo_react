import React, { useState } from 'react'
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'

const DemoState = () => {

  // giá trị đại diện cho state,phương thức giúp cập nhật dữ liệu từ state
  const [score, setScore] = useState(9) //Quản lý dữ liệu thay đổi ở trên giao diện bên trong những component
  const [inforUser, setInfoUser] = useState({
    hoten: "Quang Khải",
    lop: "BC76",
    diaChi: "Quận 3",
  })
  function handleScore() {
    setScore(score + 1)
  }
  return (
    <div>
      <Link to="/dtdd" className='border-blue-500 py-2 px-5 rounded mt-2 ml-2 inline-block'>Bấm để chuyển hướng</Link>
      <h2 className='text-center text-4xl'>Bài tập Demo State trong React</h2>
      <div>
        <p>Số điểm {score}</p>
        <button onClick={handleScore} className="py-2 px-5 bg-back text-white rounded-md bg-black">Tăng điểm số </button>
      </div>
      <h3 className='text-2xl'>Bài tập thay đổi tên người dùng</h3>
      <input type="text" onChange={(event) => {
        console.log(event.target.value)
        setInfoUser({ ...inforUser, hoten: event.target.value })
      }} className='p-2 border border-black rounded' placeholder='Vui lòng nhập tên mới' />
      <div>
        <h4>{inforUser.hoten}</h4>
        <p>{inforUser.lop}</p>
        <p>{inforUser.diaChi}</p>
      </div>
      <Wrapper>
        <input type="text" placeholder='Vui lòng nhập họ tên' />
        
      </Wrapper>
      <br />
      <Wrapper>
      <button>Xem chi tiết</button>
      </Wrapper>
    </div>

  )
}

export default DemoState