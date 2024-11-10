import React from 'react'

const ListXe = (props) => {
  console.log(props)
  //Destructuring
  let {arrListXe,showModal} = props
  return (
    <div>
      <h3>Danh sách xe</h3>
      <div className="grid grid-cols-4 gap-5">
        {arrListXe.map((xe,index)=>{
          return (
            <div className="border p-2" key={index}>
              <img src={xe.img} alt={xe.name} />
              <p>{xe.name}</p>
              <p>{xe.price}</p>
              <button onClick={()=>{
                showModal(xe)
              }}
               className='bg-green-700 py-2 px-5 text-white rounded capitalize'>xem chi tiết</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListXe