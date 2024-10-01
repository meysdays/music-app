<script setup>
const drop = ref(false)

const toggleDrop = () => {
    drop.value = !drop.value
    console.log(drop.value);
}

const router = useRouter();
// const redirectUri = "https://classy-paprenjak-c91f3a.netlify.app/fallBack"
const redirectUri = "http://localhost:3000/fallBack"
const scopes = 'user-read-private user-read-email playlist-read-private';


function loginWithSpotify() {
    const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=4a008d4c9834431c828be178f1d0e143&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
    window.location.href = spotifyAuthUrl;
}

</script>

<template>
    <div class="container">
        <div class="menu">
            <div class="head-cont">
                <div class="head">
                    <h1>Musicoo</h1>
                </div>
                <div class="menu-container">
                    <div class="menu-cont">
                        <div class="icon">
                            <img src="/assets/home.svg" alt="">
                            <p>Home</p>
                        </div>
                        <div @click="toggleDrop" class="drop">
                            <div v-if="!drop">
                                <img src="/assets/arrow-up.svg" alt="">
                            </div>
                            <div v-else-if="drop">
                                <img src="/assets/arrow-down.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="sub-cont">
                        <div :class="drop ? 'show' : 'group'">
                            <NuxtLink to="/fyp" class="link">For You</NuxtLink>
                            <NuxtLink to="/about" class="link">Relax</NuxtLink>
                            <NuxtLink to="/WorkOut" class="link">Workout</NuxtLink>
                            <NuxtLink class="link">Travel</NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="browse">
                    <div class="sub-browse">
                        <NuxtLink to="/Browse"class="icon brow">
                            <img src="/assets/search.svg" alt="">
                            <p>Browse Music</p>
                        </NuxtLink>
                    </div>
                </div>

                <div class="menu-container">
                    <div class="menu-cont">
                        <div class="icon">
                            <img src="/assets/library.svg" alt="">
                            <p>Your Library</p>
                        </div>
                        <span class="drop"><img src="/assets/arrow-down.svg" alt=""></span>
                    </div>
                    <div class="sub-cont">
                        <div class="group">
                            <NuxtLink class="link">Liked Songs</NuxtLink>
                            <NuxtLink to="/PlayList" class="link">Playlists</NuxtLink>
                            <NuxtLink class="link">Artists Following</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="page">
            <!-- <SearchBar/> -->
            <div class="nav">
                <div class="arrow">
                    <div>
                        <span><img src="/assets/arrow-left.svg" alt=""></span>
                    </div>
                    <div>
                        <span><img src="/assets/arrow-right.svg" alt=""></span>
                    </div>
                </div>

                <div class="search-end">
                    <div>
                        <input type="text" placeholder="search">
                    </div>

                    <div class="login">
                        <span><img src="/assets//bell.svg" alt=""></span>
                        <!-- <div><button>login</button></div> -->
                    </div>
                </div>
            </div>

            <div>
                <slot />
            </div>
        </div>


    </div>
</template>

<style>
.router-link-exact-active {
    color: white !important;
    background-color: gray;
}

body {
    margin: 0;
    font-family: sans-serif;
    color: white;
    background-color: rgb(14, 14, 14);
}

.head-cont {
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: black;
    height: 100vh;
}

.head {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em 0 5em 0;
    background-color: rgb(21, 17, 17, 0.3);
}

.container {
    display: flex;
}

.show {
    display: flex;
    flex-direction: column;
    height: 0;
    visibility: hidden;
}

.menu {
    /* visibility: hidden; */
    width: 20%;
   
    color: white;
    
    /* position: fixed; */
}

.menu img {
    color: white
}

.menu-container {
    /* background-color: blue; */
    width: 100%;
}

.menu-cont {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 90%;
    /* background-color: red; */
}

.menu-container span {
    justify-content: flex-end;
}

.icon {
    display: flex;
    font-size: 0.9rem;
    /* background-color: brown; */
}

.icon img {
    padding-right: 0.5em;
}

.drop {
    cursor: pointer;
}

.sub-cont {
    width: 78%;
    margin: 0 4em 0;
    /* background-color: green; */
}

.group {
    display: flex;
    flex-direction: column;
}

.link {
    width: 85%;
    font-size: 1.3rem;
    text-decoration: none;
    padding: 0.3em 0.5em;
    margin: 0.2em 0;
    border-radius: 5px;
    color: gray;
}

.link:hover {
    background-color: gray;
    color: white;
}

.browse {
    max-width: 100%;
    /* background-color: blue; */
}

.brow {
    text-decoration: none;
    color: white;
}

.sub-browse {
    display: flex;
    margin: 0 auto;
    max-width: 90%;
}

.nav {
    /* visibility: hidden; */
    /* height: 0; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* background-color: red; */
    width: 95%;
    margin: 0 auto;
    padding: 1.5em 0;
}

.page {
    /* background-color: yellow; */
    width: 80%;
}

.arrow {
    display: flex;
    justify-content: space-between;
    width: 5%;
}

.search-end {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 25%;
    /* background-color: blue; */
}

.search-end input {
    padding: 0.4em 1em;
    background-color: transparent;
    border-radius: 20px;
    border: 1px solid gray;
    color: rgb(201, 199, 199)
}

.login {
    display: flex;
    justify-content: space-between;
    /* background-color: green; */
    width: 30%;
}
</style>