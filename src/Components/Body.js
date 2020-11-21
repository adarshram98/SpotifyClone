import React from 'react'
import './Body.css'
import Header from './Header'

const Body = ({spotify}) => {
    return (
        <div className="body">
           <Header spotify={spotify}></Header>

           <div className="body__info">
               <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
               <div className="body__infoText">
                   <string>PLAYLIST</string>
                    <h2>Discover Weekly</h2>
                    <p>description</p>
               </div>
           </div>
        </div>
    )
}

export default Body
