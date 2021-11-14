import React, { useContext } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import { userContext } from "../../App";
// const { userData } = useContext(userContext);
// const [user, setUser] = userData;

export const NavbarData = [
    {
        title: 'Home',
        path: '/Home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About Us',
        path: '/AboutUs',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/Products',
        icon: <AiIcons.AiOutlineShoppingCart />,
        cName: 'nav-text'
    },
    {
        title: 'Order',
        path: '/Order',
        icon: <AiIcons.AiFillBook />,
        cName: 'nav-text'
    },
    {
        title: 'Send Gift',
        path: '/SendGift',
        icon: <AiIcons.AiFillBook />,
        cName: 'nav-text'
    },
    {
        title: 'Complaint',
        path: '/RaiseComplaint',
        icon: <AiIcons.AiFillBook />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/Login',
        icon: <AiIcons.AiFillBook />,
        cName: 'nav-text'
    },
  
    // {
    //     title: 'Account',
    //     path: '/User',
    //     icon: <AiIcons.AiFillBook />,
    //     cName: 'nav-text'
    // },
]
