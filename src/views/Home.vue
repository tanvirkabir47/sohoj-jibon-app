<script setup>

</script>


<template>
    <section class="section-padding">
        <div class="container">
            <div class="card">
                <RouterLink to="/bazar">
                    <div class="card-body">
                        <h5 class="card-title">বাজার-লিস্ট</h5>
                    </div>
                </RouterLink>

                <RouterLink to="/notebook">
                    <div class="card-body">
                        <h5 class="card-title">নোট বুক</h5>
                    </div>
                </RouterLink>

                <RouterLink to="/age-calculator">
                    <div class="card-body">
                        <h5 class="card-title">বয়স-হিসাব</h5>
                    </div>
                </RouterLink>

                <RouterLink to="/stop-watch">
                    <div class="card-body">
                        <h5 class="card-title">বিরাম ঘড়ি</h5>
                    </div>
                </RouterLink>

                <RouterLink to="/hisab-khata">
                    <div class="card-body">
                        <h5 class="card-title">হিসাব খাতা</h5>
                    </div>
                </RouterLink>
                
            </div>
            <div class="signeture">
                <p class="text-end">Develop by <a href="https://tanvirkabir47.netlify.app/">Tanvir kabir</a></p>
            </div>
        </div>
    </section>
</template>

<style scoped>
    
    .card-body {
        height: 100%;
        background-image: url(../assets/card-2.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .card{
        display: grid;
        grid-gap: 40px;
        grid-template-columns: repeat(auto-fit,minmax(300px, 1fr));
        grid-auto-rows: 250px;
        grid-auto-flow: dense;
        margin: 0 auto;
        border: none;
        
    }
    .card-body{
        border-radius: 8px;
        box-shadow:
            inset 0 -3em 3em rgba(0, 0, 0, 0.1),
            0 0 0 2px rgb(255, 255, 255),
            0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    }
    .card-title{
        font-size: 25px;
        font-weight: bold;
    }
    .card a{
        text-decoration: none;
        color: #fff;
    }
    section.section-padding {
        background: #fff;
        padding: 100px 0px;
    }
    .signeture p{
        padding: 15px 0;
    }
    /* Responsive for Mobile View */

    @media only screen and (max-width: 767px){
        section.section-padding {
            padding: 40px 0px;
        }
    }
</style>