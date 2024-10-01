export function useSpotifyAuth() {

  const token = localStorage.getItem('spotifyFile')
  const user = localStorage.getItem('user')
  
  const storeToken = (token) =>{
    localStorage.setItem('spotifyFile', token)    
  }

  return {
    token,
    storeToken,
    user,
  };
}
