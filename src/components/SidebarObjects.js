import React from 'react'
import Icon from '@mdi/react'
import { mdiHome } from '@mdi/js';
import { mdiAccount } from '@mdi/js';
import { mdiInformationVariant } from '@mdi/js'
import { mdiEmailOutline } from '@mdi/js';

export const SidebarObjects = [
    {
        title: 'Home',
        path: '/',
        icon: <Icon path={mdiHome} />
    },
    {
        title: 'Portfolio',
        path: '/portfolio',
        icon: <Icon path={mdiAccount} />
    },
    {
        title: 'About',
        path: '/about',
        icon: <Icon path={mdiInformationVariant} />
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <Icon path={mdiEmailOutline} /> 
    }
];

