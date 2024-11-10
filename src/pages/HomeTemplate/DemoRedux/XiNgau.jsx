import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleChangeBanChon } from '../../../redux/slice/xiNgauslice'

const XiNgau = () => {
    const styleButton="bg-purple-500 p-20 text-4xl text-white rounded-md border-2 border-black"
    const dispatch = useDispatch()
    const {xiNgau1, xiNgau2, xiNgau3} = useSelector((state)=>state.xiNgauSlice)
    //Tạo một action trên redux để xử lí
    //Khi người dùng bấm tài sẽ thay đổi nội dung bạn chọn Tài hoặc ngược lại
  return (
    <div className='flex justify-between'>
        <button onClick={()=>{
          dispatch(handleChangeBanChon("tài"))
        }} className={styleButton}>Tài</button>
        <div className='grid grid-cols-3 gap-5'>
        <img src={`./gameXiNgau/${xiNgau1}.png`} alt="" className='h-20 w-20'/>
        <img src={`./gameXiNgau/${xiNgau2}.png`} alt="" className='h-20 w-20'/>
        <img src={`./gameXiNgau/${xiNgau3}.png`} className='h-20 w-20'/>
        </div>
        <button onClick={()=>{
          dispatch(handleChangeBanChon("xỉu"))
        }} className={styleButton}>Xỉu</button>
    </div>
  )
}

export default XiNgau