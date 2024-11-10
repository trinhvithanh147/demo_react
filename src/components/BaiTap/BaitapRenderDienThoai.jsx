import React from 'react'

const BaitapRenderDienThoai = () => {
    let arrPhone = [
        {
            ten: "I Phone 16 Promax",
            hinhAnh: "https://cdn.tgdd.vn/Products/Images/42/329149/iphone-16-pro-max-tu-nhien-thumb-600x600.jpg",
            giaTien: "25.000.000đ",
            trangThai: true,
        },
        {
            ten: "Samsung S24 Ultra",
            hinhAnh: "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-grey-thumbnew-600x600.jpg",
            giaTien: "30.000.000đ",
            trangThai: false,
        }, {
            ten: "I phone 14 Promax",
            hinhAnh: "	https://cdn.tgdd.vn/Products/Images/42/289700/iphone-14-pro-max-bac-thumb-600x600.jpg",
            giaTien: "15.000.000đ",
            trangThai: false,
        }
    ]
    function renderDienThoai() {
        return arrPhone.map((item, index) => {
            return <div className='border-2 border-blue-500 p-5' key={index}>
                <img src={item.hinhAnh} alt="" />
                <h3>{item.ten}</h3>
                <p>{item.giaTien}</p>
                <p>Trạng thái: {item.trangThai ? "Còn hàng" : "Hết hàng"}</p>
            </div>
        })
    }
    /** Bài tập render điện thoại
     *  Từ cấu trúc layout được cung cấp, hãy xử lí cho thẻ div bên dưới h2 
     * sẽ có cấu trúc 3 cột, mỗi cột sẽ hiển thị thông tin của một điện thoại
     * thoai đang có trên mảng arrPhone
     * Cấu trúc hiển thị bao gồm: Hình ảnh, tên điện thoại, giá tiền, trạng thái
     * còn hàng nếu thuộc tính trangThai: true và ngược lại
     * Ở thẻ H2, tạo một biến hoTen để chưa thông tin tên người làm bt và hiển thị
     * vào cuối nạo dung thẻ h2 đang có
     */
    return (
        <div className="container">
            <h2>Bài tập render danh sách điện thoại của</h2>
            {/* <div className="grid grid-cols-3">
                    {arrPhone.map((item, index) => {
            return <div className='border-2 border-blue-500 p-5' key={index}>
                <img src={item.hinhAnh} alt="" />
                <h3>{item.ten}</h3>
                <p>{item.giaTien}</p>
                <p>Trạng thái: {item.trangThai ? "Còn hàng" : "Hết hàng"}</p>
            </div>
        })}
            </div> */}
            <div className="grid grid-cols-3">
                {renderDienThoai()}
            </div>
        </div>
    )
}
export default BaitapRenderDienThoai