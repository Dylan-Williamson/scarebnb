import { Avatar } from '@material-ui/core';
import { ExpandMore, Language, Search } from '@material-ui/icons';
import React from 'react';
import '../Header.css'

function Header() {
    return (
        <div className="header">
            <img
                src="https://i.ibb.co/TqH9vfz/imageedit-27-2016598680.png"
                alt="logo"
                className="header__icon"
            />

            <div className="header__center">
                <input type="text"/>
                <Search/>
            </div>

            <div className="header__right">
               <p> Host a Haunting</p>
                <Language />
                <ExpandMore />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
