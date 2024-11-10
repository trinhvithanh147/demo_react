
import { Outlet } from 'react-router-dom'
const index = () => {
  return (
    <div>
    <h3>Tôi là admin</h3>
    <Outlet />
    </div>
  )
}

export default index