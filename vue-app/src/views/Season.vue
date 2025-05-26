<script setup>

const links = [
{
    title: "Truppen",
    link: "/Holdet",
    image: `/assets/images/traning-bg.jpg`
  },{
    title: "Kampe",
    link: "https://ob.dk/kampprogram",
    image: `/assets/images/match-bg.jpg`
  },{
    title: "Stilling",
    link: "https://ob.dk/stillinger",
    image: `/assets/images/teamwork-bg.jpg`
  },{
    title: "Fanshop",
    link: "https://www.unisport.dk/v/ob/",
    image: `/assets/images/change-bg.jpg`
  },
  {
    title: "Transfer",
    link: "/season",
    image: `/assets/images/player-bg.jpg`
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