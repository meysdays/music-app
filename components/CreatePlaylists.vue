<script setup>

const name = ref('')
const description = ref('')

const abc = ref({})

const { token, user } = useSpotifyAuth();

const createPlaylist = async () => {
    const { data } = await useFetch(`https://api.spotify.com/v1/users/${user}/playlists`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: new URLSearchParams({
            "name": name.value,
            "description": description.value,
        }).toString()
    }
    )
    abc.value = data.value
}

console.log(abc.value);
console.log(name.value);
console.log(description, 'check');



</script>

<template>
    <Modal>
        <div class="addTodo">
            <div>
                <h2>CREATE PLAYLIST</h2>
            </div>
            <div class="add">
                <div>
                    <label for="name" :style="{ fontSize: '1.5em' }">Name: </label>
                    <input type="text" name="title" placeholder="create playlist" v-model="name">
                </div>
                <div>
                    <label for="description" :style="{ fontSize: '1.5em' }">Description: </label>
                    <input type="text" name="title" placeholder="description" v-model="description">
                </div>

            </div>
            <button @click="createPlaylist()">ADD</button>
        </div>
    </Modal>
</template>

<style>
.addTodo {
    /* background-color: blue; */
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center
}

.add {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
}

.add input {
    padding: 8px;
}
</style>