import React from 'react'
import { Table, Tag } from 'antd'
import { optionChucVu } from '../../pages/HomeTemplate/DemoForm/DemoForm'


const TableCustom = ({data,handleDeleteValueUser,handleGetInfoUser}) => {
    const columns = [
        {
            title: "MSNV",
            dataIndex:"msnv", // giúp xác định lấy dữ liệu của thuộc tính nào
            render: (text,record,index)=>{
                console.log(text)
                console.log(record)
                console.log(index);
                // dữ liệu lấy được từ thuộc tính cấy trong dataindex
                return text
            }
        }, {
            title: "Họ tên",
            dataIndex:"hoTen"
        }, {
            title: "Email",
            dataIndex:"email"
    
        }, {
            title: "Số điện thoại",
            dataIndex:"soDienThoai"
        }, {
            //Ở dữ liệu chức vụ, sẽ hiển thị chi tiết cho người dùng biết và sử dụng component từ antd là badge để hiển thị chi tiết hơn
            title: "Chức vụ",
            dataIndex:"chucVu",
            render: (text,record,index)=>{
                const checkLabel = optionChucVu.find((item)=>{
                    return text == item.value
                })
                //HC,RD,TP == "Hậu"
                return <Tag color='volcano'>
                    {checkLabel.label}
                    </Tag>
            }
        }, {
            title: "Tiền lương",
            dataIndex:"tienLuong",
        },{
            title:"Thao tác",
            render: (text,record,index)=>{
                const styleButton = "py-2 px-5 rounded"
                return <div className='space-x-3'>
                    <button onClick={()=>{
                        handleDeleteValueUser(record.msnv)
                    }} className={`${styleButton} text-white bg-red-500 `}>Xóa</button>
                    <button onClick={()=>{
                        handleGetInfoUser(record.msnv)
                    }} className={`${styleButton} text-white bg-yellow-500 `}>Sửa</button>
                </div>
            }
        }
    ]
    return (
        <Table
            const columns={columns}
            dataSource={data}
        />
    )
}

export default TableCustom