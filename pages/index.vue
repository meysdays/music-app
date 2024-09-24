<script setup>
import { useRouter } from 'vue-router';
import { useSpotifyAuth } from '~/composables/useSpotifyAuth';

const router = useRouter();
const route = useRoute();

const code = route.query.code;
const token = ref('')

try {
    token.value = localStorage.getItem('spotifyFile')
    console.log(token);
} catch (error) {
    console.log(error, 'index');

}


if (!token.value) {
    router.push("/Workout")
}

const saveToken = useState('token', () => localStorage.getItem('spotifyFile'))
console.log(saveToken.value);
</script>
<template>
    <div>
        <h1>GETTING THINGS READY FOR YOU...</h1>
    </div>
</template>


<style></style>