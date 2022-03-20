import React from 'react'
import Icon from '@mdi/react'
import { mdiHome } from '@mdi/js';
import { mdiAccount } from '@mdi/js';
import { mdiChevronUp } from '@mdi/js'
import { mdiChevronDown } from '@mdi/js'
import { mdiInformationVariant } from '@mdi/js'
import { mdiEmailOutline } from '@mdi/js';


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <Icon path={mdiHome} />,
        iconClosed: <Icon path={mdiChevronDown} />,
        iconOpened: <Icon path={mdiChevronUp} />,

        dropDown: [
            {
                title: 'Portfolio',
                path: '/portfolio',
                icon: <Icon path={mdiAccount} />
            },
        ]
    },
    {
        title: 'About',
        path: '/about',
        icon: <Icon path={mdiInformationVariant} />,
        iconClosed: <Icon path={mdiChevronDown} />,
        iconOpened: <Icon path={mdiChevronUp} />,

        dropDown: [
            {
                title: 'Contact',
                path: '/contact',
                icon: <Icon path={mdiEmailOutline}/>,
                cName: 'sub-nav'
            }
        ]
    }
];

