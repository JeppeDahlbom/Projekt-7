<script setup>
import playerBG from '../assets/images/player-bg.jpg'
import bystandersBG from '../assets/images/bystanders-bg.jpg'
import changeBG from '../assets/images/change-bg.jpg'
import matchBG from '../assets/images/match-bg.jpg'
import squadBG from '../assets/images/squad-bg.jpg'
import teamworkBG from '../assets/images/teamwork-bg.jpg'
import traningBG from '../assets/images/traning-bg.jpg'

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
    link: "/MaanedensFan",
    image: squadBG
  }
];

</script>



<template>
  <router-link v-for="element in links"  :to="element.link" class="link" >
    <div class="background" v-bind:style="{ backgroundImage: `url('${element.image}')`  }">
      <div style="background-color: rgba(0, 0, 0, 0.1);">
        <h3>{{ element.title }}</h3>
      </div>
    </div>
  </router-link>
</template>
  
  <style scoped>
  .link,div{
    width: 100%;
    height: 100px;
    position: relative;
    border-radius: 5px;
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
  .link{
    margin: 10px;
  }
  </style>