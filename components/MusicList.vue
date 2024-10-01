<script setup>
const convertMs = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

const hoveredTrack = ref("")
const backImg = ref(localStorage.getItem('img'))

const backgroundStyle = computed(() => ({
    backgroundImage: `url(${backImg.value})`,
    backgroundSize: '100% 105%',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat',
    position: 'relative', 
    height: '52vh'
}))

const { tracks } = defineProps(['tracks'])
</script>
<template>
    <div>
        <div :style="backgroundStyle" class="img-back">
            <SearchBar/>
            
            <!-- <img :src="backImg" alt=""> -->
        </div>
    </div>

    <div class="tracklist-container">
        <table class="tracklist">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <!-- <th>Album</th> -->
                    <th>Artists</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                <tr class="track" v-for="(track, index) in tracks" :key="index" @mouseenter="hoveredTrack = index"
                    @mouseleave="hoveredTrack = null">
                    <span v-if="hoveredTrack !== index">
                        <td>{{ track.track_number }}</td>
                    </span>
                    <span v-else class="play-icon">
                        <td><img src="/assets/play-hover.svg" alt=""></td>
                    </span>
                    <td>{{ track.name }}</td>
                    <td>{{ track.artists.join(', ') }}</td>
                    <td>{{ convertMs(track.duration_ms) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
.img-back {
    background-color: red;
    /* background-image: url(); */
    /* width: 100%; */
    /* height: 30%; */
}

.play-icon {
    cursor: pointer;

    /* background-color: red;
  transition: transform 0.2s; */
}

.tracklist-container {
    margin-bottom: 20px;
}

.tracklist {
    width: 98%;
    border-collapse: collapse;
    /* margin-top: 10px; */
    margin: 0 auto;
}

.tracklist th,
.tracklist td {
    padding: 10px;
    /* border-bottom: 1px solid #444; */
    text-align: left;
}

.tracklist th {
    /* background-color: #2e2e2e; */
    border-bottom: 1px solid #444;
}

.track:hover {
    background-color: #333;
}
</style>