import  Footer  from './_components/Footer'
import  Header  from './_components/Header'
import {Outlet} from "react-router-dom"

const index = () => {
  return (
    <div>
    <Header />
    {/* giúp định tuyến các trang nhỏ */}
    <Outlet />
    <Footer />
    </div>
  )
}

export default index