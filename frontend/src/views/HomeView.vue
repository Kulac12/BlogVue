<template>
    <div>
        HomeView Page
    </div>
    <img v-bind:src="imgeSrc" v-bind:alt="imgAlt">
    <RouterLink v-bind:to="url">Application deneme</RouterLink>
</template>

<script>
    export default {
        name:"HomeView",
        data(){
            return{
                imgeSrc:"https://assets.ggwp.id/2022/06/one-punch-man-live-action-640x360.jpg",
                imgAlt:"OPM",
                url:"/appl"
            }
        }
    }
</script>

<style scoped>

</style>