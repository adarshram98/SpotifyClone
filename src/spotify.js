
export const authEndPoint = "https://accounts.spotify.com/authorize"

//After login redirect back to localhost
const redirectUrl = "http://localhost:3000/";
const clientId ="68b195f067654735a99219ad749e424e"

//things user can do
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
]
export const getTokenFromResponse = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl
}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
