<script setup>
// https://api.spotify.com/v1/recommendations?seed_genres=afrobeat

const tracks = ref({})
const { id } = useRoute().params
const error = ref(null);

const { token } = useSpotifyAuth()

if (token) {
    try {
      const { data, error: fetchError } = await useFetch(`https://api.spotify.com/v1/recommendations?seed_genres=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      tracks.value = data.value
      // Check if an error occurred during fetch
      // if (fetchError.value) {
      //   throw new Error(fetchError.value.message);
      //   console.log(fetchError.value.message);
  
      // }
  
      console.log(data.value);
  
      // Map the data to extract relevant track information
    //   tracks.value = data.value.items.map((track) => ({
    //     name: track.name,
    //     artists: track.artists.map((artist) => artist.name),
    //     track_number: track.track_number,
    //     duration_ms: track.duration_ms,
    //   }));
  
      console.log(tracks.value);
      
    } catch (err) {
      error.value = err;
    }
  }
</script>

<template>
     <div class="fyp-cont">
        <div class="fyp" v-for="(lip, index) in tracks?.tracks" :key="index">
            <div class="inn-fyp">
                <MusicFyp :song="lip" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>