
import { useDispatch, useSelector } from "react-redux"
import { handlePlayGame } from "../../../redux/slice/xiNgauslice"

const Total = () => {
  const dispatch = useDispatch()
    const {banChon,tongSoBanChoi,tongSoBanThang,ketQua} = useSelector((state)=>state.xiNgauSlice)
    // khi bấm vào nút playgame, sẽ random ngẫu nhiên 3 con xí ngầu mới và sau đó tính tổng kết quả để xem người dùng thắng hay thua, nếu thắng thì Cộng tổng số bàn thắng và tăng số bàn chơi
    const renderType =(type)=> type?"Tài":"Xỉu"
  return (
    <div className='py-10 text-center space-y-3 text-3xl'>
        <p className='text-pink-500'>Bạn Chọn:<span>{renderType(banChon)}</span></p>
        <p className='text-blue-500'>Tổng số bàn chơi: <span>${tongSoBanChoi}</span></p>
        <p className='text-orange-500'>Tổng số bàn thắng: <span>${tongSoBanThang}</span></p>
        <p className='text-green-500'>Kết quả: <span>{renderType(ketQua)}</span></p>
        <button onClick={()=>{
          dispatch(handlePlayGame())
        }} className='py-2 px-5 bg-black text-white rounded-md'>Play game</button>
    </div>
  )
}

export default Total