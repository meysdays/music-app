<script setup>

const genre = ref({})
const { token } = useSpotifyAuth();
const error = ref(null);

if (token) {
    try {
        const { data, error: fetchError } = await useFetch(`https://api.spotify.com/v1/recommendations/available-genre-seeds`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // Check if an error occurred during fetch
        // if (fetchError.value) {
        //   throw new Error(fetchError.value.message);
        //   console.log(fetchError.value.message);

        // }

        console.log(data.value);

        // for (let i = 0; i <= 19; i++) {
        //     genre.value.push(data.value.genres[i])
        // }
        genre.value = data.value.genres

    } catch (err) {
        error.value = err;
    }
}
</script>

<template>
    <div>
        <NuxtLink>See More</NuxtLink>
        <div class="genre-cont">
            <NuxtLink :to="`/Browse/${genre}`" v-for="(genre, index) in genre" :key="index" class="genre-card">
                <div class="inn-card">
                    {{ genre }}
                </div>
            </NuxtLink>

        </div>
        <!-- {{ genre }} -->
    </div>
</template>

<style>
.genre-cont {
    background-color: rgb(25, 24, 24);
    width: 95%;
    margin: 0 auto;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
}

.genre-card {
    /* background-color: green; */
    font-size: 1.5em;
    padding: 2.3rem 0.2rem;
    margin: 0.5rem auto;
    width: 20%;
    text-align: center;
    text-decoration: none;
    color: white;
}
.genre-card:hover{
    background-color: grey;
    border-radius: 20px;
}
</style>