import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleChangeValueHoTen } from '../../../redux/slice/inputSlice'
import BaiTapXiNgau from './BaiTapXiNgau'
import BaiTapShoes from './BaiTapShoes'

const DemoRedux = () => {
  const dispatch = useDispatch()
  const param = useSelector((state)=> state.inputSlice) //destructuring
  console.log(param)
  return (
    <div>
        <h2>Demo về cách sử dụng redux toolkit</h2>
        
<form>
  <div className="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">First name</label>
      <input onChange={(event)=>{
        // console.log(event.target.value)
        dispatch(handleChangeValueHoTen(event.target.value))
      }} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:border-blue-500" placeholder="John" value={param.hoTen}/>
    </div>
  </div>
</form>

      <BaiTapXiNgau/>
      <BaiTapShoes/>
    </div>
  )
}

export default DemoRedux