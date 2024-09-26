<script setup>
import { useRouter } from 'vue-router';
import { useSpotifyAuth } from '~/composables/useSpotifyAuth';

const router = useRouter();
const route = useRoute();

const code = route.query.code;
// const token = ref('')
const { token } = useSpotifyAuth()


if (!token) {
    router.push("/Workout")
}

const abc = ref({})

    if (token) {
        const {data} = await useFetch('https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA', {
            method: "get",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        )
        abc.value = data.value
    }

// const saveToken = useState('token', () => localStorage.getItem('spotifyFile'))
console.log(token);
</script>
<template>
    <div>
        <h1>GETTING THINGS READY FOR YOU...</h1>
        <br>

        <div class="fyp-cont">
        <div class="fyp" v-for="(lip, index) in abc?.tracks" :key="index">
            <div class="inn-fyp">
                <MusicFyp :song="lip" />
            </div>
        </div>
    </div>
    </div>
</template>


<style></style>