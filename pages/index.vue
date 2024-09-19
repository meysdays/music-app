<script setup>
import { useRouter } from 'vue-router';
import { useSpotifyAuth } from '~/composables/useSpotifyAuth';

const router = useRouter();
const {exchangeCodeForToken} = useSpotifyAuth();
const route = useRoute();

const code = route.query.code;

if (code) {
    exchangeCodeForToken(code).then(() => {
        router.push('/fyp')
    }).catch(error =>{
        console.error('Error during authentication:', error);
    })
}
</script>
<template>
    <div>
        <h1>GETTING THINGS READY FOR YOU...</h1>
    </div>
</template>


<style></style>