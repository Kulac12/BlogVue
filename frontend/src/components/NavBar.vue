<template>
    <nav class="navbar navbar-expand-md mcustom-nav">
        <div class="container">
            <RouterLink class="navbar-brand" v-bind:to="{ name:'home' }"> {{brandName}} </RouterLink> 
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink class="nav-link" v-bind:to="{name:'home'}">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" v-bind:to="{name:'contact'}">Contact Us</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" v-bind:to="{name:'yandexmap'}">MAP</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" v-bind:to="{name:'appl'}">Applications</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" v-bind:to="{name:'login'}">Login</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" v-bind:to="{name:'register'}">Register</RouterLink>
                </li>
               


            </ul>
        </div>

    </nav>
</template>

<script>
    export default {
        name:"NavBar",

        data(){
            return{
                brandName: "Application",
            }
        }
    }
</script>

<style scoped>

.mcustom-nav{
    background-color: #063547; 
    padding: 15px,0;   
}
.navbar-brand{
    padding: 0;
    margin: 0;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
}
.nav-link{
    padding: 10px, 25px !important;
    color: #fff;
    text-align: center;

}

.nav-link:hover{
    color:#44b89d
}
.aktif-link{
    color:#44b89d
}
</style>