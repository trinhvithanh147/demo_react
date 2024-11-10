import HomeTemplate from '../pages/HomeTemplate'
import Home from '../pages/HomeTemplate/Home'
import About from '../pages/HomeTemplate/About'
import ListMovie  from '../pages/HomeTemplate/ListMovie'
import AdminTemplate from '../pages/AdminTemplate'
import AddUser from '../pages/AdminTemplate/AddUser'
import Dashboard from '../pages/AdminTemplate/Dashboard'
import {Route} from "react-router-dom"
import Contact from '../pages/HomeTemplate/Contact'
import PageNotFound from '../pages/PageNotFound'
import DemoRedux from '../pages/HomeTemplate/DemoRedux/DemoRedux'
import DemoForm from '../pages/HomeTemplate/DemoForm/DemoForm'
const routes = [
    {
        path: "",
        element: HomeTemplate,
        children: [
            {
                path: "",
                element: Home
            },{
                path: "about",
                element: About
            },{
                path: "about/:id", //slug
                element: About
            },{
                path: "list-movie",
                element: ListMovie
            },{
                path:"contact",
                element: Contact
            },{
                path:"demo-redux",
                element: DemoRedux
            },{
                path:"demo-form",
                element: DemoForm,
            }
        ]
    },
    {
        path: "admin",
        element: AdminTemplate,
        childer: [
            {
                path: "dasboard",
                element: Dashboard
            },{
                path: "add-user",
                element: AddUser
            },
        ]
    },
    {
        path: "*",
        element: PageNotFound
    }

]

const renderRoutes = ()=>{
    return routes.map((route)=>{
        if(route.children){
            return (
            <Route key={route.path} path={route.path} element={<route.element/>}>
                {route.children.map((child)=> 
                    (
                        <Route key={child.path} path={child.path} element={<child.element/>} />
                    )
                )}
            </Route>)
        }else{
            return <Route key={route.path} path={route.path} element={<route.element/>}/>
        }
    })
}
export {renderRoutes}