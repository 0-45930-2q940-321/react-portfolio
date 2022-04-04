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
                <div>
                    <Icon className='icons' path={mdiMenu} onClick={showSidebar} />
                </div>
                <div className={sidebar ? 'nav-bar active' : 'nav-bar'}>
                    <ul>
                        <li className='nav-data-toggle'>
                            <Link to='#' className='nav-menu'>
                                <Icon className='icons' path={mdiClose} onClick={showSidebar}/>
                            </Link>
                        </li>
                        {SidebarObjects.map((data, key) => {
                            return (
                                <li key={key} className='nav-text'>
                                    <Link to={data.path}>
                                        {data.icon}
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