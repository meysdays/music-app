<script setup>

</script>

<template>
    <div>
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
                    <div><button @click="loginWithSpotify">login</button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>