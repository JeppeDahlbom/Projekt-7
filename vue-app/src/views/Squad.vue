<script setup>
import { ref, watch } from 'vue'
let playersDummy = ref([
  {
    firstName: "Martin",
    lastName: "Hansen",
    number: 1,
    favourite: false,
    position: "Målmand"
  },
  {
    firstName: "Viljar",
    lastName: "Myhra",
    number: 16,
    favourite: false,
    position: "Målmand"
  },
  {
    firstName: "Nicholas",
    lastName: "Mickelson",
    number: 2,
    favourite: false,
    position: "Forsvarer"
  },
  {
    firstName: "Adam",
    lastName: "Sørensen",
    number: 3,
    favourite: false,
    position: "Forsvarer"
  },
  {
    firstName: "Bjørn",
    lastName: "Paulsen",
    number: 4,
    favourite: false,
    position: "Forsvarer"
  },
  {
    firstName: "Julius",
    lastName: "Berthel Askou Harvey",
    number: 13,
    favourite: false,
    position: "Forsvarer"
  },
  {
    firstName: "Marcus",
    lastName: "McCoy",
    number: 15,
    favourite: false,
    position: "Forsvarer"
  },
  {
    firstName: "Leeroy",
    lastName: "Owusu",
    number: 20,
    favourite: false,
    position: "Forsvarer"
  },
  {
    firstName: "Yaya",
    lastName: "Bojang",
    number: 24,
    favourite: false,
    position: "Forsvarer"
  },
  {
    firstName: "Nicolas",
    lastName: "Bürgy",
    number: 25,
    favourite: false,
    position: "Forsvarer"
  },
  {
    firstName: "James",
    lastName: "Gomez",
    number: 29,
    favourite: false,
    position: "Forsvarer"
  },
  {
    firstName: "Jakob",
    lastName: "Bonde",
    number: 6,
    favourite: false,
    position: "Midtbane"
  },
  {
    firstName: "Tom",
    lastName: "Trybull",
    number: 7,
    favourite: false,
    position: "Midtbane"
  },
  {
    firstName: "Markus",
    lastName: "Jensen",
    number: 11,
    favourite: false,
    position: "Midtbane"
  },
  {
    firstName: "Gustav",
    lastName: "Grubbe",
    number: 14,
    favourite: false,
    position: "Midtbane"
  },
  {
    firstName: "Max",
    lastName: "Ejdum",
    number: 18,
    favourite: false,
    position: "Midtbane"
  },
  {
    firstName: "Nikolaj",
    lastName: "Jull-Sandberg",
    number: 21,
    favourite: false,
    position: "Midtbane"
  },
  {
    firstName: "William",
    lastName: "Martin",
    number: 23,
    favourite: false,
    position: "Midtbane"
  },
  {
    firstName: "Don",
    lastName: "Deedson Louicius",
    number: 10,
    favourite: false,
    position: "Angriber"
  },
  {
    firstName: "Luca",
    lastName: "Kjerrumgaard",
    number: 17,
    favourite: false,
    position: "Angriber"
  },
  {
    firstName: "Elias",
    lastName: "Hansborg-Sørensen",
    number: 26,
    favourite: false,
    position: "Angriber"
  },
  {
    firstName: "Jay-Roy",
    lastName: "Grot",
    number: 31,
    favourite: false,
    position: "Angriber"
  }
]);
const stored = localStorage.getItem('localPlayersDummy');
if(stored){
  playersDummy.value = JSON.parse(stored);
}


// Toggle favourite
const toggleFavourite = (player) => {
  playersDummy.value.forEach(element => {
    element.favourite = false;
  });
  player.favourite = true;
  savePlayers();
}
const savePlayers = () => {
  localStorage.setItem('localPlayersDummy', JSON.stringify(playersDummy.value));
}

watch(playersDummy, savePlayers, { deep: true });

//sortere object listen
playersDummy.value.sort((a, b) => a.number - b.number);

</script>

<template>
  <div class="background">
    <h2 class="titleMark">Målmand</h2>
    <div class="playerCard" v-for="player in playersDummy.filter(p => p.position === 'Målmand')">
      <div class="text" >
          <h2 class="number">#{{ player.number }}</h2>
          <h2 class="name">{{ player.firstName }} {{ player.lastName }}</h2>
      </div>
      <img class="playerImage" :src="`/assets/images/holdet/${player.firstName.replaceAll(' ', '')}${player.lastName.replaceAll(' ', '')}.png`" alt="">
      <button @click="toggleFavourite(player)" class="star"><img :src="player.favourite ? '/assets/icons/StarIconFilled.svg' : '/assets/icons/StarIcon.svg'" alt=""></button>
    </div>

    <h2 class="titleMark">Forsvarer</h2>
    <div class="playerCard" v-for="player in playersDummy.filter(p => p.position === 'Forsvarer')">
      <div class="text" >
          <h2 class="number">#{{ player.number }}</h2>
          <h2 class="name">{{ player.firstName }} {{ player.lastName }}</h2>
      </div>
      <img class="playerImage" :src="`/assets/images/holdet/${player.firstName.replaceAll(' ', '')}${player.lastName.replaceAll(' ', '')}.png`" alt="">
      <button @click="toggleFavourite(player)" class="star"><img :src="player.favourite ? '/assets/icons/StarIconFilled.svg' : '/assets/icons/StarIcon.svg'" alt=""></button>
    </div>

    <h2 class="titleMark">Midtbane</h2>
    <div class="playerCard" v-for="player in playersDummy.filter(p => p.position === 'Midtbane')">
      <div class="text" >
          <h2 class="number">#{{ player.number }}</h2>
          <h2 class="name">{{ player.firstName }} {{ player.lastName }}</h2>
      </div>
      <img class="playerImage" :src="`/assets/images/holdet/${player.firstName.replaceAll(' ', '')}${player.lastName.replaceAll(' ', '')}.png`" alt="">
      <button @click="toggleFavourite(player)" class="star"><img :src="player.favourite ? '/assets/icons/StarIconFilled.svg' : '/assets/icons/StarIcon.svg'" alt=""></button>
    </div>

    <h2 class="titleMark">Angriber</h2>
    <div class="playerCard" v-for="player in playersDummy.filter(p => p.position === 'Angriber')">
      <div class="text" >
          <h2 class="number">#{{ player.number }}</h2>
          <h2 class="name">{{ player.firstName }} {{ player.lastName }}</h2>
      </div>
      <img class="playerImage" :src="`/assets/images/holdet/${player.firstName.replaceAll(' ', '')}${player.lastName.replaceAll(' ', '')}.png`" alt="">
      <button @click="toggleFavourite(player)" class="star"><img :src="player.favourite ? '/assets/icons/StarIconFilled.svg' : '/assets/icons/StarIcon.svg'" alt=""></button>
    </div>
  </div>
</template>

<style scoped>
.background{
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 20px;
    position: relative;
}
.background .playerCard{
  position: relative;
   display: grid;
  
  grid-template-columns: 4fr 1fr;
  grid-template-areas:
    "text image";
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  background-repeat: no-repeat;
  background-position: 100% 130%;
  background-size: 130% auto;
  background-image: url('/assets/images/LightBGStripes.svg');
  overflow: hidden;
}
.background .playerCard .text{
  grid-area: text;
  width: 100%;
  margin-bottom: 20px;
  margin-left: 20px;
}
.background .playerCard .number{
  font-size: 35px;
}
.background .playerCard .name{
  font-size: 20px;
}
.background .playerCard .playerImage{
  grid-area: image;
  height: 180px;
  margin-top: 10px;
  margin-bottom: -80px;
}
.background .playerCard .star{
  background: none;
  border: none;
}
.background .playerCard .star img{
  display: block;
  position: absolute;
  width: 30px;
  top: 10px;
  right: 10px;
  z-index: 9;
}
.background .playerCard .star:hover{
  cursor: pointer;
}
.titleMark{
  margin-top: 20px;
}
</style>