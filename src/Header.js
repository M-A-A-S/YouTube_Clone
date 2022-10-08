import React, { useState } from 'react';
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

function Header() {

    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
                        alt=""
                    />
                </Link>
            </div>
            <div className="header__input">
                <input type="text" placeholder="Search" value={ inputSearch } onChange={ e => setInputSearch(e.target.value) } />
                <Link to={ `/search/${inputSearch}` }>
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon"  />
                <NotificationsIcon className="header__icon"  />
                <Avatar
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV6MFTckQaqk8Keh4QzWVwIDVd-KWncnB1DI1aEBg&s"
                    alt="ZAmericanEnglish"
                />
            </div>
        </div>
    )
}

export default Header;