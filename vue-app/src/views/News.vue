<script setup>
import newsBG1 from '../assets/images/newsBG1.webp'
import newsBG2 from '../assets/images/newsBG2.webp'
import newsBG3 from '../assets/images/newsBG3.webp'

const newsDummy = [
  {
    header: "VI RYKKER SAMMEN",
    body: "Stå sammen på lægterne, når vi møder AC Horsens den 24. December kl. 21.30",
    image: newsBG1
  },
  {
    header: "KOM TIL STADION",
    body: "Oplev stemningen når OB tager imod Brøndby IF den 10. Januar kl. 19.00",
    image: newsBG2
  },
  {
    header: "SÆSONSTART 2025",
    body: "Vær klar fra første fløjt – første kamp mod FC Midtjylland den 1. Februar kl. 18.00",
    image: newsBG3
  }
]

</script>


<template>
    <div class="NewsSlider">
        <h2>Nyheder</h2>
        <swiper-container
        center-insufficient-slides = "true"  
        grab-cursor = "true" 
        lazy-preload-prev-next = "1" 
        scrollbar = "true"  
        slide-to-clicked-slide = "true" 
        centered-slides = "true" 
        slides-per-view = "1"
        space-between = "20"
    >
        <swiper-slide v-for="element in newsDummy">
            <div class="swiperBackground" v-bind:style="{ backgroundImage: 'url(' + element.image + ')' }">
                <h3>{{ element.header }}</h3>
                <p>{{ element.body }}</p>
                <div class="CallToActionButton"><a href="https://ob.eventii.dk/" target="_blank">KØB BILLET HER</a></div>
            </div>
        </swiper-slide>
    </swiper-container>
    </div>
    <div class="gamesSlider">

    </div>
    <div class="OBMedia">

    </div>
    <div class="MyProfile">

    </div>
</template>
<style scoped>
    swiper-slide{
        width: 100%;
    }
    h2{
        border-left: 6px solid; /* bredde styres her */
        border-image: linear-gradient(to bottom, transparent 0%, transparent 20%, var(--Blue) 20%, var(--Blue) 80%,transparent 80%, transparent 100%);
        border-image-slice: 1;
        padding-left: 20px; /* lidt afstand mellem kant og tekst */

        }
    .swiperBackground{
        width: 100%;
        background-size: cover;
        background-position: center;
        border-radius: 10px; /* hvis du vil have runde hjørner */
    }
</style>