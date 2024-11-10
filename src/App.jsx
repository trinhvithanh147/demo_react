
// import Content from './components/Content'
// import Footer from './components/Footer'
// import Header from './components/Header'
// import Navigation from './components/Navigation'
import { Route, Routes } from 'react-router-dom';
import BaiTapRenderXe from './components/BaiTap/BaiTapRenderXe/BaiTapRenderXe';
import BaiTapState1 from './components/BaiTap/demo_State/BaiTapState1'
import BaiTapState2 from './components/BaiTap/demo_State/BaiTapState2'
import DemoState from './components/BaiTap/demo_State/DemoState'
import { DatePicker } from 'antd';
import HomeTemplate from "./pages/HomeTemplate"
import AdminTemplate from "./pages/AdminTemplate"
import Dashboard from "./pages/AdminTemplate/Dashboard"
import AddUser from "./pages/AdminTemplate/AddUser"
import Home from "./pages/HomeTemplate/Home"
import About from "./pages/HomeTemplate/About"
import ListMovie from "./pages/HomeTemplate/ListMovie"
import { renderRoutes } from './routes';
function App() {

  return (
    <>
      {/* <Header />
      <div className="grid grid-cols-12">
        <Navigation />
        <Content />
      </div>
      <Footer /> */}
      {/** Cách đầu tiên để hiển thị hình ảnh */}
      {/* <img src="./public/img1.webp" alt="" /> */}
      {/* Cách 2 để hiển thị hình ảnh  */}
      {/* <div className="my-container">

        <img className='theHinhAnh' src={hinhAnh1} alt="" />
      </div>
      <BaitapRenderDienThoai /> */}
      {/* <DemoState/>
      <BaiTapState1/>
      <BaiTapState2/>
      <DatePicker /> */}
      {/* <BaiTapRenderXe/> */}
      <Routes>
        {/*Route Định danh các tuyến đường(path) */}
        {/* <Route path="/dtdd" element={<div className='h-screen flex items-center justify-center text-4xl text-red-500'>Hello tôi là trang dtdd đây</div>} /> */}
        {/* Tạo một tuyến đường cho trang chủ hiển thị component DemoState */}
        {/* <Route path="/" element={<DemoState/>} /> */}
        {/* Định tuyến trang template- local host: 5173*/}
        {/* <Route path='' element={<HomeTemplate />} >
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='list-movie' element={<ListMovie />} />
        </Route> */}
        {/* Định tuyến trang template- local host: 5173/admin */}
        {/* <Route path='admin' element={<AdminTemplate />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='add-user' element={<AddUser />} />
        </Route> */}
        {renderRoutes()}
      </Routes>
    </>
  )
}

export default App
