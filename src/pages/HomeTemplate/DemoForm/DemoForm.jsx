import React, { useEffect, useState } from 'react'
import { Input, Select, Space } from 'antd'
import InputCustom from '../../../components/Input/InputCustom'
import SelectCustom from '../../../components/Select/SelectCustom'
import ButtonCustom from '../../../components/Button/ButtonCustom'
import {useFormik} from 'formik'
import TableCustom from '../../../components/Table/TableCustom'
import * as Yup from 'yup'
export const optionChucVu = [
    {
        label: "Trưởng phòng",
        value: "TP",
    }, {
        label: "Giám Đốc",
        value: "GĐ"
    }, {
        label: "Hậu cần",
        value: "HC"
    }
]
const DemoForm = () => {
    const notiErrorRequired ="Vui lòng không bỏ trống"
    const [listPerson,setListPerSon] = useState([])
    const [readOnLy,setReadOnly] = useState(false)
    // msnv,họ tên, email, số điện thoại, chức vụ, tiền lương
    //Giam1 đốc, trưởng phòng, hậu cần
    const {handleSubmit,handleChange,setFieldValue,values,setValues,resetForm,errors,handleBlur, touched,isValid} = useFormik({
        // dữ liệu mặc định dành cho các input giống như đang tạo state quản lí dữ liệu
        // state chứa dữ liệu
        initialValues: {
            msnv: "",
            hoTen: "",
            email: "",
            soDienThoai: "",
            chucVu: "HC",
            tienLuong: ""
        },
        // Phương thức hoạt động khi form được submit, giúp xử lí các thao tác dữ liệu
        onSubmit: (values,{resetForm }) =>{  //là một object chứa những phương thức
            const newListPerson = [...listPerson,values];
            //Đua dữ liệu xuống localStorage
            //chuyển đổi dữ liệu thành chuỗi Json
            setListPerSon(newListPerson)
            //clear toàn bộ dữ liệu từ form
            resetForm();
        },
        validationSchema: Yup.object({
            email : Yup.string().required(notiErrorRequired).email("Vui lòng nhập đúng định dạng"), // giúp Yup kiểm tra ở đây là dữ liệu dạng chuỗi
            //hoTen ==> không cho phép nhập số
            hoTen: Yup.string().required(notiErrorRequired).matches(/^[a-zA-Z]+$/,"Vui lòng nhập chữ không cho phép số"),
            //soDienThoai ==> đúng số việt nam
            soDienThoai: Yup.string().required(notiErrorRequired).matches(/^(?:(?:\+84|0)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-4|6-9])\d{7})$/,"Vui lòng nhập đúng sdt"),
            //tienLuong > 10tr tienLuong<30tr
            tienLuong:Yup.number().required(notiErrorRequired).min(10000000,"Vui lòng nhập tối thiểu 10tr") .max(20000000,"Vùi lòng nhập tối đa 20000000")
            //kiểm tra rổng
        })
        
        
    })
    const handleSetValueFormik =(fieldName, value)=>{
        setFieldValue(fieldName,value)
    }
    const handleDeleteValueUser = (msnv)=>{
        // tạo một mảng mới từ mảng trong state
        const newListPerson = [...listPerson];
        const index = newListPerson.findIndex((item)=>
            item.msnv == msnv)
            if(index != -1){
                newListPerson.splice(index,1)
                setListPerSon(newListPerson)
                
            }
        
        // findIndex tìm kiếm và dùng splice để xóa
        // Sử dụng setState để thực hiện cập nhật dữ liệu mới là mảng đã mất phần tử
        // Lưu trữ dữ liệu xuống localStorage
    }
    const handleGetInfoUser=(msnv) =>{
        // xử lí đưa hàm xuống cho button
        // tìm kiếm xem phần tử cần xóa là phẩn tử nào
        // setValues đưa phần tử lên form 
        // đưa input msnv về trạng thái readonly
        const person = listPerson.find((item)=> item.msnv == msnv)
        if(person){
            setValues(person)
            setReadOnly(true)
        }
    }
    const handleUpdaInforUser = ()=>{
        // lấy tất cả dữ lệu đang có trong input
        // tìm kiếm tới phần tử cần xóa
        // thay thế phần tử cũ bằng phần tử mới
        // cập nhật lại state
        //  resetForm()
        if(!isValid){
            return
        }
        const index = listPerson.findIndex((item)=>{
            return item.msnv == values.msnv
        })
        if(index != -1){
            const newListPerson = [...listPerson]
            newListPerson[index] = values;
            setListPerSon(newListPerson);
            resetForm()
        }
    }
    //component did mount
    useEffect(()=>{
        const dataLocal = localStorage.getItem("listPerson");
        dataLocal && setListPerSon(JSON.parse(dataLocal))
    },[])
    useEffect(()=>{
        console.log("Hello")
        const dataString = JSON.stringify(listPerson)
        localStorage.setItem("listPerson",dataString);
    },[listPerson])
    //Formik: name ="msnv"
    // useEffect(()=>{
    //     const data = {
    //         msnv:"FE140",
    //         hoTen: "Quach Khai",
    //         email:"huhu@gmail.com",
    //         soDienThoai:"0909111111",
    //         chucVu:"HC",
    //         tienLuong:"10000000",
    //     }
    //     setValues(data)
    // },[])
    return (
        <div>
            <h2 className='text-4xl font-medium'>Bài tập thực hành Formil và Yup</h2>
            <div className="container">
                <form onSubmit={handleSubmit} action="">
                    <div className='grid grid-cols-2 gap-3'>
                        <InputCustom reaOnly={readOnLy} error={errors.msnv} value={values.msnv} name="msnv" onChange={handleChange} labelContent="Mã số nhân viên" placeholder="Vui lòng nhập mã nhân viên" iconPrefix={<i className="fa-regular fa-id-card"></i>} />
                        <InputCustom touched={touched.hoTen} handleBlur={handleBlur} error={errors.hoTen} value={values.hoTen} name="hoTen" onChange={handleChange} labelContent="Họ tên" placeholder="Vui lòng nhập họ tên" iconPrefix={<i className="fa-regular fa-user"></i>} />
                        <InputCustom touched={touched.soDienThoai} error={errors.soDienThoai} value={values.soDienThoai} name="soDienThoai" onChange={handleChange} labelContent="Số điện thoại" placeholder="Vui lòng nhập số điện thoại" iconPrefix={<i className="fa-solid fa-phone"></i>} />
                        <InputCustom touched={touched.email} error={errors.email} value={values.email} name="email" onChange={handleChange} labelContent="Email" placeholder="Vui lòng nhập email" iconPrefix={<i className="fa-regular fa-envelope"></i>} />
                        <div >
                            <SelectCustom value={values.chucVu} name="chucVu" onChange={handleSetValueFormik} labelContent="Chức vụ" options={optionChucVu
                            } />
                        </div>
                        <InputCustom touched={touched.tienLuong} error={errors.tienLuong} value={values.tienLuong} name="tienLuong" onChange={handleChange} labelContent="Tiền lương" placeholder="Vui lòng nhập tiền lương" iconPrefix={<i className="fa-solid fa-sack-dollar"></i>} />
                        <div className='space-x-4'>
                            <ButtonCustom type='submit' buttonContent="Thêm nhân viên" className='bg-black text-white'/>
                            <ButtonCustom buttonContent="Reset Form" className='bg-red-500 text-white'/>
                            <ButtonCustom onClick={handleUpdaInforUser}  buttonContent="Cập nhật dữ liệu" className='bg-yellow-500 text-white'/>
                        </div>
                    </div>
                </form>
                <TableCustom handleGetInfoUser={handleGetInfoUser} handleDeleteValueUser={handleDeleteValueUser} data={listPerson}/>
            </div>
        </div>
    )
}

export default DemoForm