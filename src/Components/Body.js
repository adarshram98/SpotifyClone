import React from 'react'
import { useStateValue } from '../StateProvider'
import './Body.css'
import Header from './Header'
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";


const Body = ({spotify}) => {
    const [{discover_weekly}] = useStateValue()
    return (
        <div className="body">
           <Header spotify={spotify}></Header>

           <div className="body__info">
               <img src={discover_weekly?.images[0].url}alt=""/>
               <div className="body__infoText">
                   <string>PLAYLIST</string>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
               </div>
           </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__play"></PlayCircleFilledIcon>
                    <FavoriteIcon className="body__fav"></FavoriteIcon>
                    <MoreHorizIcon className="body__more"></MoreHorizIcon>

                </div>
                {/* list of songs */}
                {discover_weekly?.tracks.items.map(
                    item =>
                    <SongRow track={item.track}></SongRow>
                )}
            </div>
        </div>
    )
}

export default Body
