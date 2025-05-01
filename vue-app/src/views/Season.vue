<script setup>
import playerBG from '../assets/images/player-bg.png'
import newsBG2 from '../assets/images/newsBG2.webp'
import newsBG3 from '../assets/images/newsBG3.webp'

const links = [
  {
    title: "VI RYKKER SAMMEN",
    link: "/",
    image: playerBG
  },
  {
    title: "VI RYKKER SAMMEN",
    link: "/",
    image: playerBG
  }
];

</script>



<template>
<a class="link" v-for="element in links" :href=" element.link ">
    <div class="background" v-bind:style="{ backgroundImage: 'url(' + element.image + ')' }">
                <div style="background-color: rgba(0, 0, 0, 0.1);">
                    <h3>{{ element.title }}</h3>
            </div>
        </div></a>
  </template>
  
  <style scoped>
  .link,div{
    width: 100%;
    height: 100px;
  }
  .background {
    background-repeat: no-repeat;
    background-size: cover;
  }
  h3{
    margin-top: auto;
  }
  </style>