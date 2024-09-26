export function useSpotifyAuth() {

  const token = localStorage.getItem('spotifyFile')
  
  const storeToken = (token) =>{
    localStorage.setItem('spotifyFile', token)    
  }

  return {
    token,
    storeToken,
  };
}
