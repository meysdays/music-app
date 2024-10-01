<script setup>
const abc = ref({})

const { token } = useSpotifyAuth();

if (token) {
    const { data } = await useFetch('https://api.spotify.com/v1/me/playlists', {
        method: "get",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    )
    abc.value = data.value
}
console.log(abc.value);


const { popupTrigger, TogglePopup: togglePopup } = usePopupState();
</script>

<template>
    <div>
        <div class="cont">
            <h1>Playlists</h1>
            <button @click="togglePopup('createPlaylistTrigger')">
                <img src="/assets/add.svg" alt="">
                <p>New Playlist</p>
            </button>
        </div>

        <CreatePlaylists v-if="popupTrigger.createPlaylistTrigger"/>

        <div class="num">
            <p>{{ abc.total }} playlists</p>
        </div>
        <div class="playlist-cont">
            <div class="playlist" v-for="(lip, index) in abc?.items" :key="index">
                <div class="inn-playlist">
                        <img class="playlist-img" :src="`${lip?.images[0]?.url}`" alt="photo">
                    <p>{{ lip.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.num {
    margin-left: 20px;
    color: rgb(129, 127, 127);
    font-size: 1.3em;
}

.cont {
    display: flex;
    /* background-color: red; */
    width: 40%;
    margin: 0 0 0 1rem;
}

.cont button {
    background-color: rgb(129, 127, 127);
    border: none;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 45%; */
    height: 55px;
    margin: 0.8rem auto;
    font-size: 1.3em;
    padding: 0 2.8rem;
    cursor: pointer;
}

.cont button:hover {
    background-color: rgb(129, 127, 127, 0.5);
}

.cont button p {
    padding-left: 1.8rem;
}

.playlist-cont {
    background-color: rgb(25, 24, 24);
    width: 95%;
    margin: 0 auto;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 1rem;

}


.playlist {
    /* background-color: red; */
    /* font-size: 1.5em; */
    padding: 0.5rem 0rem;
    width: 18%;
    text-align: center;
    text-decoration: none;
    color: white;
}

.playlist p {
    display: flex;
    width: 95%;
    margin: 0.4rem auto;
}

.inn-palylist {
    /* padding: rem; */
    /* margin-right: 1rem; */
}

.playlist-img {
    width: 95%;
}
</style>