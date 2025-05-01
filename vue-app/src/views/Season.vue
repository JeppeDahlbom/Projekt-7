<script setup>
import playerBG from '../assets/images/player-bg.png'
import bystandersBG from '../assets/images/bystanders-bg.png'
import changeBG from '../assets/images/change-bg.png'
import matchBG from '../assets/images/match-bg.jpg'
import squadBG from '../assets/images/squad-bg.jpg'
import teamworkBG from '../assets/images/teamwork-bg.webp'
import traningBG from '../assets/images/traning-bg.webp'

const links = [
{
    title: "Truppen",
    link: "/season",
    image: "/src/assets/images/traning-bg.webp"
  },{
    title: "Kampe",
    link: "/season",
    image: "/src/assets/images/match-bg.jpg"
  },{
    title: "Stilling",
    link: "/season",
    image: "/src/assets/images/teamwork-bg.webp"
  },{
    title: "Fanshop",
    link: "/season",
    image: "/src/assets/images/change-bg.png"
  },
  {
    title: "Transfer",
    link: "/season",
    image: "/src/assets/images/player-bg.png"
  },
  {
    title: "Månedens fan",
    link: "/season",
    image: "/src/assets/images/bystanders-bg.png"
  }
];

</script>



<template>
<a class="link" v-for="element in links" :href=" element.link ">
    <div class="background" v-bind:style="{ backgroundImage: `url('${element.image}')`  }">
                <div style="background-color: rgba(0, 0, 0, 0.1);">
                    <h3>{{ element.title }}</h3>
            </div>
        </div></a>
  </template>
  
  <style scoped>
  .link,div{
    width: 100%;
    height: 100px;
    position: relative;
  }
  .background {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

  }
  h3{
    margin-top: auto;
    position: absolute;
    bottom: 10px;
    left: 10px;
  }
  .link + .link{
    margin: 10px;
  }
  </style>