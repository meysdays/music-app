<script setup>
// import { NuxtLink } from '#build/components';
const {song} = defineProps(['song'])

</script>
<template>
    <NuxtLink :to="`/fyp/${song.album.id}`" class="fyp-inn-cont">
        <div >
            <img :src="`${song.album.images[1].url}`" alt="">
            <img class="play" src="/assets/play.svg" alt="">
        </div>
        <div style="display:flex; justify-content: center;">

            <div class="artist-name">
                <p>{{ song.album.name}}</p>
            </div>
        </div>
        <!-- <div v-for="(name, index) in song.artists">
            {{ name.name }}
        </div> -->
    </NuxtLink>
</template>

<style>
.play{
    width: 30% !important;
    position: relative;
    bottom: 4em;
    right: 4em;
}

</style>