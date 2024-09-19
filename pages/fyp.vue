<script setup>
const {getAccessToken} = useSpotifyAuth();
const token = getAccessToken();

console.log(token);

// const tok = inject('token')
// const acc = ref('')

const {error,data: user} = await useFetch('https://api.spotify.com/v1/me', {
    method: "get",
    headers: {
        'Authorization': `Bearer ${token}`
    }
})



console.log(user.value);
console.log(error.value);

</script>

<template>
    <div v-if="error">
        <!-- <p>name: {{ user.name }}</p>
        <p>email: {{ user.email }}</p> -->
        <p>{{ error.message }}</p>
    </div>

    <div>
        <p>recommendations</p>
    </div>
</template>

<style scoped>

</style>