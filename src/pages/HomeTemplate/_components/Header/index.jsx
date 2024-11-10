
import {NavLink} from "react-router-dom"
const index = () => {
    return (
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <NavLink className={({isActive})=>
                                 isActive ? `my-active nav-link` : `nav-link`
                            } to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>
                                isActive ? `my-active nav-link` : `nav-link`
                            } to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>
                                isActive ? `my-active nav-link` : `nav-link`
                            } to="/list-movie">List Movie</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>
                                isActive ? `my-active nav-link` : `nav-link`
                            } to="/demo-redux">Demo redux</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>
                                isActive ? `my-active nav-link` : `nav-link`
                            } to="/demo-form">Demo form</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

    )
}

export default index