import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                Album and song details
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green"></ShuffleIcon>
                <SkipPreviousIcon className="footer__icon"></SkipPreviousIcon>
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon"></PlayCircleOutlineIcon>
                <SkipNextIcon className="footer__icon"></SkipNextIcon>
                <RepeatIcon className="footer__green"></RepeatIcon>
            </div>
            <div className="footer__right">
            Volume
            </div>
            
        </div>
    )
}

export default Footer
