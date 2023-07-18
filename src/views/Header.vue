<script setup>

</script>

<template>
    <nav class="navbar">
        <div class="container">
            <div class="logo"> <router-link to="/" style="border-bottom: none;">সহজ<span>জীবন</span></router-link> </div>
            <ul class="menu float-end">
                <li> <router-link to="/">হোম</router-link></li>
                <li> <router-link to="/bazar">বাজার-লিস্ট</router-link></li>
                <li> <router-link to="/notebook">নোট-বুক</router-link></li>
                <li> <router-link to="/age-calculator">বয়স-হিসাব</router-link></li>
                <li> <router-link to="/hisab-khata">হিসাব খাতা</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.navbar{
    background: #116A7B;
}
.navbar .logo a{
    color: #fff;
    font-size: 35px;
    font-weight: 600;
    text-decoration: none;
}
.navbar .logo a span{
    color: crimson;
    transition: all 0.3s ease;
}
.navbar .menu{
    padding: 0;
    margin: 0;
}
.navbar .menu li{
    list-style: none;
    display: inline-block;
}
.navbar .menu li a{
    display: block;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    margin-left: 25px;
    transition: color 0.3s ease;
    text-decoration: none;
    cursor: pointer;
}
.router-link-exact-active{
    border-bottom: 2px solid #fff;
    font-weight: bold !important;
}


/* Responsive for Mobile View */
  
@media only screen and (max-width: 767px){
    .navbar{
        padding: 20px 0;
    }
    .navbar ul{
        display: none;
    }
    .logo{
        width: 100%;
    }
    .navbar .logo a{
        display: flex;
        justify-content: center;
    }
    .navbar .container{
        justify-content: center;
    }
    .navbar .menu li a{
        margin-left: 10px;
    }
}
    

</style>