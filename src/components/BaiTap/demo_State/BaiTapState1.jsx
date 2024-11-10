import React, { useState } from 'react'

const BaiTapState1 = () => {
    //16px, cứ mỗi lần click, giá trị fontsize của h2 tăng thêm 2 hoặc 4px tùy thích,
    //giảm giá trị fontsize của h2 đi 2 hoặc 4px tùy thích
  let styleButton  = 'py-2 px-5 text-white rounded';
  const [fontSize,setfontSize] = useState(16)
  //tang => tang gia tri, giam => giam gia tri
  function updateFontSize(type){
    if(type == "tang"){
      setfontSize(fontSize + 2)
    }else if(type == "giam"){
      setfontSize(fontSize - 2)
    }
  }
  return (
    <div>
        <h2 style={{fontSize}} className='mb-10'>Thực hiện sử dụng và tạo state để giúp thực hiện tang9 giảm font size 
            cho nội dung đang có thẻ h2
        </h2>
        <button onClick={()=>{
          updateFontSize("tang")
        }} className={`${styleButton} bg-black`}>Tăng font size</button>
        <button onClick={()=>{
          updateFontSize("giam")
        }} className={`${styleButton} bg-purple-500`}>Giảm font size</button>
    </div>
  )
}

export default BaiTapState1