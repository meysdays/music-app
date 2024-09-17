<script setup>
const drop = ref(false)

const toggleDrop = () => {
    drop.value = !drop.value
    console.log(drop.value);
}
</script>

<template>
    <div class="container">
        <div class="menu">
            <div class="head-cont">
                <div class="head">
                    <h1>Musicoo</h1>
                </div>
                <div class="menu-container">
                    <div class="menu-cont">
                        <div class="icon">
                            <img src="/assets/home.svg" alt="">
                            <h1>Home</h1>
                        </div>
                        <div @click="toggleDrop" class="drop">
                            <div v-if="!drop">
                                <img src="/assets/arrow-up.svg" alt="">
                            </div>
                            <div v-else-if="drop">
                                <img src="/assets/arrow-down.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="sub-cont">
                        <div :class="drop ? 'show' : 'group'">
                            <NuxtLink to="/" class="link">For You</NuxtLink>
                            <NuxtLink to="/" class="link">Relax</NuxtLink>
                            <NuxtLink to="/" class="link">Workout</NuxtLink>
                            <NuxtLink to="/" class="link">Travel</NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="browse">
                    <div class="sub-browse">
                        <NuxtLink to="/" class="icon brow">
                            <img src="/assets/search.svg" alt="">
                            <h1>Browse Music</h1>
                        </NuxtLink>
                    </div>
                </div>

                <div class="menu-container">
                    <div class="menu-cont">
                        <div class="icon">
                            <img src="/assets/library.svg" alt="">
                            <h1>Your Library</h1>
                        </div>
                        <span class="drop"><img src="/assets/arrow-down.svg" alt=""></span>
                    </div>
                    <div class="sub-cont">
                        <div class="group">
                            <NuxtLink to="/" class="link">Liked Songs</NuxtLink>
                            <NuxtLink to="/" class="link">Playlists</NuxtLink>
                            <NuxtLink to="/" class="link">Artists Following</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page">
            <div class="nav">
                <div class="arrow">
                    <div>
                        <span><img src="/assets/arrow-left.svg" alt=""></span>
                    </div>
                    <div>
                        <span><img src="/assets/arrow-right.svg" alt=""></span>
                    </div>
                </div>

                <div class="search-end">
                    <div>
                        <input type="text" placeholder="search">
                    </div>

                    <div class="login">
                        <span><img src="/assets//bell.svg" alt=""></span>
                        <div><button>login</button></div>
                    </div>
                </div>
            </div>

            <div>
                <slot/>
            </div>
        </div>


    </div>
</template>

<style>
body {
    margin: 0;
    font-family: sans-serif;
    color: white;
    background-color: rgb(14, 14, 14);
}

.head-cont {
    display: flex;
    flex-direction: column;
}

.head {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em 0 5em 0;
    background-color: rgb(21, 17, 17, 0.3);
}

.container {
    display: flex;
}

.show {
    height: 0;
    visibility: hidden;
}

.menu {
    width: 20%;
    background-color: black;
    color: white;
    height: 100vh;
}

.menu img {
    color: white
}

.menu-container {
    /* background-color: blue; */
    width: 100%;
}

.menu-cont {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 90%;
    /* background-color: red; */
}

.menu-container span {
    justify-content: flex-end;
}

.icon {
    display: flex;
    font-size: 0.9rem;
    /* background-color: brown; */
}

.icon img {
    padding-right: 0.5em;
}

.drop {
    cursor: pointer;
}

.sub-cont {
    width: 78%;
    margin: 0 4em 0;
    /* background-color: green; */
}

.group {
    display: flex;
    flex-direction: column;
}

.link {
    font-size: 1.3rem;
    text-decoration: none;
    padding: 0.3em 0;
    margin: 0.2em 0;
    border-radius: 5px;
    color: gray;
}

.link:hover {
    background-color: gray;
    color: white;
}

.browse {
    max-width: 100%;
    /* background-color: blue; */
}

.brow {
    text-decoration: none;
    color: white;
}

.sub-browse {
    display: flex;
    margin: 0 auto;
    max-width: 90%;
}

.nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* background-color: red; */
    width: 95%;
    margin: 0 auto;
    padding: 1.5em 0;
}

.page {
    /* background-color: yellow; */
    width: 80%;
}

.arrow {
    display: flex;
    justify-content: space-between;
    width: 5%;
}

.search-end {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 25%;
    /* background-color: blue; */
}

.search-end input {
    padding: 0.4em 1em;
    background-color: transparent;
    border-radius: 20px;
    border: 1px solid gray;
    color: rgb(201, 199, 199)
}

.login {
    display: flex;
    justify-content: space-between;
    /* background-color: green; */
    width: 30%;
}
</style>