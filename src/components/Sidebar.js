import React, { useState } from 'react'
import Icon from '@mdi/react'
import { mdiMenu } from '@mdi/js'
import { mdiClose } from '@mdi/js';
import './Sidebar.css'
import { Link } from 'react-router-dom';
import { SidebarObjects } from './SidebarObjects';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <nav>
                <div className='hamburger'>
                    <Icon className='hamburger-svg' path={mdiMenu} onClick={showSidebar} />
                </div>
                <div className={sidebar ? 'nav-bar active' : 'nav-bar'}>
                    <ul>
                        <li className='sidebar-exit'>
                                <Icon className='sidebar-exit' path={mdiClose} onClick={showSidebar}/>
                        </li>
                        {SidebarObjects.map((data, key) => {
                            return (
                                <li key={key} className='nav-text'>
                                    <Link to={data.path}>
                                        <div className='sidebar-icons'>{data.icon}</div>
                                        <div>{data.title}</div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default Sidebar;