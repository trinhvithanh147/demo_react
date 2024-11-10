import { createSlice,current } from '@reduxjs/toolkit'

const initialState = {
    hoTen: "Quang Khải"
}

const inputslice = createSlice({
  name: "input",
  initialState,
  reducers: {
    handleChangeValueHoTen:(state,action)=>{
        console.log(current(state))
        console.log(action)
        // dữ liệu chuỗi từ input
        state.hoTen=action.payload
    },
  }
});

export const {handleChangeValueHoTen} = inputslice.actions // tạo sự kiện dispath

export default inputslice.reducer