//import giúp file khác import được file này và sử dụng
const Header = () => {

    //thẻ jsx giúp viết html trong file js, jsx là object của react
    // nền màu đỏ, padding 30px, màu chữ trắng, font size 20px, canh giữa nội dung

  //data binding
  // string, number, array(JSX) là một object của React
  let hoTen = "Quang Khải"
  let classLayout ="bg-[#ffd400] text-center text-white p-section-padding"
  let sinhVien ={
    name:"Lý Tín",
    tuoi: 15
  }
  let theP = <div>Hello</div> //Object đặc biệt
  let arrString =["Lan","My","Quỳnh",4,20, <p>Hello Nhân</p>];
  let arrData = [
    {
      hoten: "Chế Công Bình",
      tuoi: "40"
    },
    {
      hoten: "Trương Tấn Khải",
      tuoi: "35",
    }
  ]
  let newArrData = arrData.map((items, index)=>{
    return<div>
      <p>{items.hoten}</p>
      <p>{items.tuoi}</p>
    </div>
  })
  return (
    <div className={classLayout}>{hoTen}
      <div className={classLayout}>{10*25}</div>
      <p>{sinhVien.name}</p>
      <div>{theP}</div>
      <div>{arrString}</div>
      <div className="data">{newArrData}</div>
    </div>
  )
}

//export giúp các file khác import được file này và sử dụng
export default Header