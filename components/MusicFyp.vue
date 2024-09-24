<script setup>
// import { NuxtLink } from '#build/components';
const {song} = defineProps(['song'])

</script>
<template>
    <NuxtLink class="fyp-inn-cont">
        <img :src="`${song.album.images[1].url}`" alt="">
        <p>{{ song.album.name}}</p>
        <!-- <div v-for="(name, index) in song.artists">
            {{ name.name }}
        </div> -->
    </NuxtLink>
</template>

<style>
.fyp-inn-cont{
}

</style>