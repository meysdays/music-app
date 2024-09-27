<script setup>
// import { NuxtLink } from '#build/components';
const { song } = defineProps(['song'])

</script>
<template>
    <NuxtLink :to="`/fyp/${song.album.id}`" class="fyp-inn-cont">
        <div>
            <img class="album-img" :src="`${song.album.images[1].url}`" alt="">
            <img class="play" src="/assets/play.svg" alt="">
        </div>
        <div style="display:flex; justify-content: center; margin-top: -4.7em; ">

            <div class="artist-name">
                <p>{{ song.album.name }}</p>
            </div>
        </div>
        <!-- <div v-for="(name, index) in song.artists">
            {{ name.name }}
        </div> -->
    </NuxtLink>
</template>

<style>
.play {
    width: 30% !important;
    position: relative;
    bottom: 4em;
    right: 4em;
    /* transform: translateY(-50px); */
}

.img-cont {
    display: flex;
    background-color: red;
}

.album-img {
    padding-bottom: 0px;
}
</style>