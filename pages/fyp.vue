<script setup>

const tok = ref("")
const abc = ref({})

onMounted(async () => {
    const token = useState('token')
    tok.value = token.value
    console.log(tok.value);

    const { error, data: user } = await useFetch('https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA', {
        method: "get",
        headers: {
            'Authorization': `Bearer ${tok.value}`
        }
    })
    abc.value = user.value
    console.log(user);
    console.log(abc.value);

})
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
    /* background-color: green; */
    width: 90%;
    margin: 0 auto;
    /* position: relative;
    left: 25%; */
}

.fyp {
    flex: 1 1 230px;
    width: 100%;
    /* background-color: blue; */
    margin: 0 auto;
    padding: 0.5em 0em;
    border-radius: 20px;
    text-align: center;

    /* border: 1px solid black; */

}
.fyp:hover{
    background-color: rgb(159, 155, 155);
}

.fyp img {
    width: 80%;
    object-fit: cover;
    /* aspect-ratio: 10/12; */
    /* border-radius: 20px; */
}
.inn-fyp{
    width: 95%;
    margin: 0 auto;
}
</style>