<script setup>
const abc = ref({})

const { token } = useSpotifyAuth();


if (token) {
    const { data } = await useFetch('https://api.spotify.com/v1/recommendations?seed_genres=afrobeat', {
        method: "get",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    )
    abc.value = data.value
}
console.log(abc.value);



</script>

<template>
    <div class="fyp-cont">
        <div class="fyp" v-for="(lip, index) in abc?.tracks" :key="index">
            <div class="inn-fyp">
                <MusicFyp :song="lip" />
            </div>
        </div>
    </div>
</template>

<style>
.fyp-cont {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
    width: 90%;
    margin: 0 auto;

}

.fyp {
    flex: 1 1 180px;
    width: 100%;
    /* background-color: blue; */
    /* margin: 0 auto; */
    padding: 0.5em 0em;
    border-radius: 7px;
    text-align: center;

    /* border: 1px solid black; */

}

.fyp:hover {
    background-color: rgb(159, 155, 155);
}

.fyp img {
    width: 98%;
    object-fit: cover;
    /* aspect-ratio: 10/12; */
    /* border-radius: 20px; */
}

.inn-fyp {
    width: 95%;
    margin: 0 auto;

}

.artist-name {
    text-align: left;
    width: 98%;
    margin: 0;
    /* background-color: black; */
    /* height: 0; */
}
</style>