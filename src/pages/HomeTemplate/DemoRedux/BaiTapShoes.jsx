import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllShoes, getAllShoesApi } from "../../../redux/slice/shoesSlice";
const BaiTapShoes = () => {
  const dispatch = useDispatch();
  //    useEffect(()=>{
  //     axios({
  //         method:"GET",
  //         url:"https://shop.cyberlearn.vn/api/Product"
  //     }).then((res)=>{
  //         console.log(res)
  //         dispatch(getAllShoes(res.data.content))
  //     }).catch((err)=>{
  //         console.log(err)
  //     })
  //    },[])
  useEffect(() => {
    dispatch(getAllShoesApi());
  }, []);
  return (
    <div>
      <h2>Bài tập thực hiện thao tác kuu7 trữ các dữ liệu từ API lên redux</h2>
      <div className="grid grid-cols-4"></div>
    </div>
  );
};

export default BaiTapShoes;
