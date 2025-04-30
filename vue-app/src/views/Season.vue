<script setup>
import playerBG from '../assets/images/player-bg.png'
import newsBG2 from '../assets/images/newsBG2.webp'
import newsBG3 from '../assets/images/newsBG3.webp'

const links = [
  {
    title: "VI RYKKER SAMMEN",
    link: "Stå sammen på lægterne, når vi møder AC Horsens den 24. December kl. 21.30",
    image: playerBG
  },
  {
    title: "VI RYKKER SAMMEN",
    link: "Stå sammen på lægterne, når vi møder AC Horsens den 24. December kl. 21.30",
    image: playerBG
  }
]

</script>



<template>
    <div class="image-container">
      <img src="../assets/images/newsBG3.webp" alt="News Background">
    </div>
<a v-for="element in links href="">
    <div v-bind:style="{ backgroundImage: 'url(' + element.image + ')' }">
            
                <div class="backgroundCover" style="background-color: rgba(0, 0, 0, 0.5);">
                    <h3>{{ element.title }}</h3>
                    <p>{{ element.link }}</p>
            </div>
        </div></a>
  </template>
  
  <style scoped>
  .image-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
  }
  img {
    width: 100%;
    height: 200px;
    display: block;
  }
  </style>