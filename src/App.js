import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./Components/Login";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from 'spotify-web-api-js'
import Player from "./Components/Player";
import { useStateValue } from "./StateProvider";


const spotify = new SpotifyWebApi();

function App() {
  const [{user,token},dispatch]= useStateValue(); 
  //run on a condition - when app comp loads and input changes
  useEffect(() => {
    const hash = getTokenFromResponse();
    const _token = hash.access_token;
    //hide access token from url
    window.location.hash = "";
    // console.log("token >>>>>>", token);

    if (_token) {
        dispatch({
          token:_token,
          type:"SET_TOKEN"
        })
      //connecting api to react
      spotify.setAccessToken(_token)
      spotify.getMe().then(
        user=>{
          dispatch({
            user:user,
            type:"SET_USER"
          })
        }
      )
      
    }
    return () => {
      // cleanup
    };
  }, []);
  console.log("USER>>>>>",user)
  console.log("TOken>>>>>",token)
  return (
    <div className="app">
      {token ?
      <Player spotify={spotify}></Player>:
        <Login></Login>}</div>
  );
}

export default App;
