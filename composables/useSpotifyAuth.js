import axios from "axios";
export function useSpotifyAuth() {
  const accessToken = ref("");
  const refreshToken = ref("");

  const { spotifyID, spotifyKey } = useRuntimeConfig;

  const exchangeCodeForToken = async (code) => {
    try {
      const clientId = "4a008d4c9834431c828be178f1d0e143";
      const clientSecret = "40fa43a922324e2e96b436840b630828";
      const redirectUri = "http://localhost:3000/fallBack";

      const authHeader = btoa(`${clientId}:${clientSecret}`);
      console.log(authHeader);
      console.log(clientId);
      console.log(clientSecret);
      
      

      const {data:user,  error} = await useFetch(
        "https://accounts.spotify.com/api/token",
        {
          method: "POST",
          body: new URLSearchParams({
            grant_type: "authorization_code",
            code,
            redirect_uri: redirectUri,
          }).toString(),
          headers: {
            Authorization: `Basic ${authHeader}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      // const response = await axios.post(
      //   "https://accounts.spotify.com/api/token",
      //   new URLSearchParams({
      //     grant_type: "authorization_code",
      //     code,
      //     redirect_uri: redirectUri,
      //   }),
      //   {
      //     headers: {
      //       'Authorization': `Basic ${authHeader}`,
      //       "Content-Type": "application/x-www-form-urlencoded",
      //     },
      //   }
      // );

      if (user.value) {
        console.log("here success");
        console.log(user.value);
        
        accessToken.value = user.access_token;
        refreshToken.value = user.refresh_token;
        // accessToken.value = response.data.access_token;
        // refreshToken.value = response.data.refresh_token;
  
        localStorage.setItem("spotifyAccessToken", accessToken.value);
        localStorage.setItem("spotifyRefreshToken", refreshToken.value);
        localStorage.setItem("spotifyResponse", user.value);
      }
      console.log("not yet");
      
    } catch (error) {
      console.error("Error exchanging code for token:", error);
      console.log(error);
      console.log("here failure");
      throw error;
    }
  };

  const storeToken = (token) =>{
    accessToken.value = token
    // console.log(accessToken);
    
  }

  const getAccessToken = () => {return accessToken.value;}

  return {
    exchangeCodeForToken,
    storeToken,
    getAccessToken,
  };
}
