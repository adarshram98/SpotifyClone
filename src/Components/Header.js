import React from 'react'
import "./Header.css";
import { useStateValue } from ".././StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";

const Header = () => {

    const [{user},dispatch] = useStateValue()
    return (
        <div className="header">
        <div className="header__left">
            <SearchIcon>
           
            </SearchIcon>
            <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
        </div>
        <div className="header__right">
            <Avatar src={user?.images[0]?.url} alt={user?.display_name}></Avatar>
            <h4>{user?.display_name}</h4>
        </div>
        
    </div>
    )
}

export default Header
