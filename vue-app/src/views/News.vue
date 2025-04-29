<script setup>
const newsDummy = [
  {
    header: "VI RYKKER SAMMEN",
    body: "Stå sammen på lægterne, når vi møder AC Horsens den 24. December kl. 21.30",
    image: "../assets/icons/AppLogo.png"
  },
  {
    header: "KOM TIL STADION",
    body: "Oplev stemningen når OB tager imod Brøndby IF den 10. Januar kl. 19.00",
    image: "https://via.placeholder.com/1200x500?text=Banner+2"
  },
  {
    header: "SÆSONSTART 2025",
    body: "Vær klar fra første fløjt – første kamp mod FC Midtjylland den 1. Februar kl. 18.00",
    image: "https://via.placeholder.com/1200x500?text=Banner+3"
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
</style>