<script setup>
// import { useRouter } from 'vue-router';

const router = useRouter();
const { storeToken } = useSpotifyAuth();
const route = useRoute();

const code = route.query.code;
// console.log(code);

const redirectUri = "http://localhost:3000/fallBack";
// const redirectUri = "https://classy-paprenjak-c91f3a.netlify.app/fallBack";

const clientId = "4a008d4c9834431c828be178f1d0e143";
const clientSecret = "40fa43a922324e2e96b436840b630828";
const authHeader = btoa(`${clientId}:${clientSecret}`);

const abc = ref('')


  if (code) {
    console.log(code, 'songs');
    
      const {data: user,  error} = await useFetch(
          "https://accounts.spotify.com/api/token",
          {
            method: "POST",
            headers: {
              Authorization: `Basic ${authHeader}`,
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              grant_type: "authorization_code",
              code: code,
              redirect_uri: redirectUri,
            }).toString(),
          }          
        );
        
        console.log(user.value.access_token, 'music');

        storeToken(user.value.access_token)
      
        router.push('/');
  
  }

// if (code) {
//     exchangeCodeForToken(code).then(() => {
//         router.push('/fyp'); 
//         // console.log(code);
        
//     }).catch(error => {
//         console.error('Error during authentication:', error);
//         console.log(error);
//         // console.log(code);
//     });
// }
</script>

<template>
    <div>
        <h1>Logging in...</h1>
    </div>
</template>

<style>
</style>