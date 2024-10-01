<script setup>

// const redirectUri = "http://localhost:3000/fallBack"
const redirectUri = "https://classy-paprenjak-c91f3a.netlify.app/fallBack";
const scopes = 'user-read-private user-read-email playlist-read-private playlist-modify-public playlist-modify-private';


function loginWithSpotify() {
    const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=4a008d4c9834431c828be178f1d0e143&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
    window.location.href = spotifyAuthUrl;
}

</script>

<template>
    <Modal class="close-log">
        <div class="button-cont">
            <div class="button" @click="loginWithSpotify">Login</div>
        </div>
    </Modal>
</template>

<style>
.popup{
   
}
.close-log {
    
    background-color: rgba(0, 0, 0, 0.9)  !important;
}
.close-log button{
    visibility: hidden;
}
.button-cont{
    display: flex;
    justify-content: center;
    margin-bottom: 2em;

    /* margin: 0 auto; */
}
.button{
    color: white;
    background-color: black;
    border: none;
    font-size: 2em;
    padding: 1rem 5rem;
    border-radius: 30px;
    cursor: pointer;
}
.button:hover{
    background-color: white;
    color: black;
    transition: ease-out 0.2s;
}
</style>