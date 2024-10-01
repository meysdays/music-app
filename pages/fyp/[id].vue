<script setup>
const tracks = ref([])
const { id } = useRoute().params
const error = ref(null);

const route = useRoute();

const code = route.query.code;

const { token } = useSpotifyAuth()




  if (token) {
    try {
      const { data, error: fetchError } = await useFetch(`https://api.spotify.com/v1/albums/${id}/tracks`, {
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
  
      // Map the data to extract relevant track information
      tracks.value = data.value.items.map((track) => ({
        name: track.name,
        artists: track.artists.map((artist) => artist.name),
        track_number: track.track_number,
        duration_ms: track.duration_ms,
      }));
  
      console.log(tracks.value);
      
    } catch (err) {
      error.value = err;
    }
  }
// console.log("att all");


// onMounted(fetchAlbumTracks);

</script>
<template>
  <!-- <h1>Album Tracks</h1> -->
  <div v-if="error">Error: {{ error.message }}</div>
    <!-- <ul v-if="tracks && tracks.length">
      <li v-for="(track, index) in tracks" :key="index">
        {{ track.track_number }}. {{ track.name }} - {{ track.artists.join(', ') }}
      </li>
    </ul> -->
    <div v-if="tracks && tracks.length">
      <MusicList :tracks="tracks"/>
    </div>
    <div v-else>Loading...</div>
</template>

<style lang="scss" scoped></style>