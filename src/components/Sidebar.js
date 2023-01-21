import { NavLink } from 'react-router-dom';

//styles & images

import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg';
import AddIcon from '../assets/add_icon.svg';




export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-content'>
                <div className='user'>
                    {/* Avatar and username later */}
                    <p>Hey user</p>
                </div>
                <nav className='links'>
                    <ul>
                        <li>
                            <NavLink to="/">
                                <img src={DashboardIcon} alt="add project icon" />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <img src={AddIcon} alt="add project icon" />
                                <span>New Project</span>
                            </NavLink>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    )
}