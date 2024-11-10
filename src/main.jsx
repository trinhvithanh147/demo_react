
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import { store } from './redux/configStore.js'
createRoot(document.getElementById('root')).render(
  //  quản lý phần chuyển hướng
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
// nó sẽ render , nó sẽ lấy những cái đoạn code có trong component apps và nó đưa lên trên giao diện