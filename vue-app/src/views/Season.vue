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
    link: "/Holdet",
    image: traningBG
  },{
    title: "Kampe",
    link: "https://ob.dk/kampprogram",
    image: matchBG
  },{
    title: "Stilling",
    link: "/Stilling",
    image: teamworkBG
  },{
    title: "Fanshop",
    link: "https://www.unisport.dk/v/ob/",
    image: changeBG
  },
  {
    title: "Transfer",
    link: "/Transfers",
    image: playerBG
  },
  {
    title: "Månedens fan",
    link: "/MånedensFan",
    image: squadBG
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