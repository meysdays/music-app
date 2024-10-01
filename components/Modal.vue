<script setup>
const { TogglePopup: togglePopup } = usePopupState();
</script>

<template>
    <div class="popup">
        <div class="popup-inner">

            <div class="close">
                <button @click="togglePopup('createPlaylistTrigger')">X</button>
            </div>

            <slot></slot>

        </div>
    </div>
</template>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);

    display: flex;
    align-items: center;
    justify-content: center;
}

.popup-inner {
    background: grey;
    padding: 32px 0;
    width: 35%;
}

.close {
    display: flex;
    justify-content: flex-end;
    padding: 10px
}
</style>