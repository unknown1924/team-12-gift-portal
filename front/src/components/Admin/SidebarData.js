import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/admin',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'User',
        path: '/admin/AdminUser',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text'
    },
    {
        title: 'Order',
        path: '/admin/AdminOrder',
        icon: <AiIcons.AiOutlineShoppingCart />,
        cName: 'nav-text'
    },
    {
        title: 'Complaint',
        path: '/admin/AdminComplaint',
        icon: <AiIcons.AiFillBook />,
        cName: 'nav-text'
    },
]
