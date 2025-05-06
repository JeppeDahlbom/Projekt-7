<script setup>
import newsBG1 from '../assets/images/newsBG1.webp'
import newsBG2 from '../assets/images/newsBG2.webp'
import newsBG3 from '../assets/images/newsBG3.webp'
import OBMedia from '../assets/images/OBMedia.png'
import postIMG from '../assets/images/postIMG.png'


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
];

  
  
  
const gamesDummy = [
  {
    home: "OB",
    away: "SIF",
    stadion:"Nature energy park",
    stadionPosition:"to be added",
    dateTime:   new Date('2025-04-20T09:30:00'), // Før i dag, kl. 09:30
    result:[1,1],
    league: "Super league",
    matchID: 1
  },
  {
    home: "SIF",
    away: "OB",
    stadion:"Nature energy park",
    stadionPosition:"to be added",
    dateTime:   new Date('2025-04-28T15:45:00'), // Før i dag, kl. 15:45
    result:[1,1],
    league: "Super league",
    matchID: 2
  },
  {
    home: "OB",
    away: "SIF",
    stadion:"Nature energy park",
    stadionPosition:"to be added",
    dateTime:   new Date('2025-05-02T08:00:00'), // Efter i dag, kl. 08:00
    result:[1,1],
    league: "Super league",
    matchID: 3
  },
  {
    home: "OB",
    away: "SIF",
    stadion:"Nature energy park",
    stadionPosition:"to be added",
    dateTime:   new Date('2025-05-10T18:15:00'), // Efter i dag, kl. 18:15
    result:[1,1],
    league: "Super league",
    matchID: 4
  }
];




const getLogoLink = (team) =>{return `/assets/icons/${team}Logo.svg`};

</script>


<template>
  <div class="newsSlider">
    <h2 class="titleMark">Nyheder</h2>
    <swiper-container
    grab-cursor = "true" 
    scrollbar = "true"  
    slides-per-view = "1"
    space-between = "20"
    :loop = "false"
    >
      <swiper-slide v-for="element in newsDummy">
          <div class="swiperBackground" v-bind:style="{ backgroundImage: `url('${element.image}')` }">
              <div class="backgroundCover" style="background-color: rgba(0, 0, 0, 0.5);">
                  <h3>{{ element.header }}</h3>
                  <p>{{ element.body }}</p>
                  <div class="CallToActionButton"><a href="https://ob.eventii.dk/" target="_blank">KØB BILLET HER</a></div>
              </div>
          </div>
      </swiper-slide>
    </swiper-container>
  </div>
  <div class="gamesSlider">
    <h2 class="titleMark">Kampe</h2>
    <swiper-container
    grab-cursor = "true" 
    slides-per-view = "1"
    space-between = "20"
    :loop = "false"
    pagination = "true"
> 
    <swiper-slide v-for="element in gamesDummy">
      <div class="swiperContainer" :style="{ backgroundImage: 'url(/assets/images/gamesBG.svg)' }">
        <div class="club" style="grid-area: home;">
          <img :src="getLogoLink(element.home)" alt="" />                    
        </div>
        <h3 class="score" style="grid-area: homeScore;">{{ element.result[0] }}</h3>
        <div class="club" style="grid-area: away;">
          <img :src="`/assets/icons/${element.away}Logo.svg`" alt="" />                    
        </div>
        <h3 class="score" style="grid-area: awayScore;">{{ element.result[1] }}</h3>

        <h3 class="time" style="grid-area: dateTime;">{{ element.dateTime.toLocaleDateString('da-DK', { weekday: 'short' }).replace('.', '').replace(/^./, c => c.toUpperCase()) }} {{ element.dateTime.getDate() }} {{ element.dateTime.toLocaleDateString('da-DK', { month: 'short' }).replace('.', '').replace(/^./, c => c.toUpperCase()) }} - {{ element.dateTime.toLocaleTimeString('da-DK', { hour: '2-digit', hour12: false }) }}:{{ element.dateTime.toLocaleTimeString('da-DK', { minute: '2-digit' }) }}</h3>
        <p class="location" style="grid-area: stadion;">{{ element.stadion.trim() }}</p>
        <a class="addToCalendar" style="grid-area: addCalendar;" href="">Add to Calendar</a>
      </div>
    </swiper-slide>
  </swiper-container>
  </div>
  <div class="OBMedia">
    <h2 class="titleMark">OB Media</h2>
    <div class="container">
      <div class="playButton">
        <a href="">
          <img :src="OBMedia" alt="">
      </a>
      </div>
      <div class="post">
        <a href="">
          <img :src="postIMG" alt="">
        </a>
      </div>
    </div>
  </div>
  <div class="MyProfile">
    <h2 class="titleMark">Min profil</h2>
    <div>
      <div class="background">
        <h3>Odense</h3>
      </div>
    </div>
  </div>
</template>
<style scoped>
.OBMedia .container{
  display: flex;
  flex-direction: row;
}
.OBMedia .container .playButton, .OBMedia .container .post{
  width: 100%;
}
.OBMedia .container a, .OBMedia .container img{
  width: calc(100% - 16px);
  aspect-ratio: 1/1;
  border-radius: 10px;
  overflow: hidden;
}
.OBMedia .container a{
  margin: 10px 8px ;
}

.newsSlider, .gamesSlider, .OBMedia, .MyProfile{
  padding-bottom: 10px;
  padding-top: 10px;
}
  .newsSlider h3, .newsSlider p, .newsSlider a{
      color: #fff;
  }
  .gamesSlider h3, .newsSlider p{
    color: var(--Blue);
  }
  .titleMark{
      border-left: 6px solid; /* bredde styres her */
      border-image: linear-gradient(to bottom, transparent 0%, transparent 20%, var(--Blue) 20%, var(--Blue) 80%,transparent 80%, transparent 100%);
      border-image-slice: 1;
      padding-left: 20px; /* lidt afstand mellem kant og tekst */
      font-size: 20px;
      text-transform: uppercase;
  }
  .swiperBackground, .backgroundCover{
      width: 100%;
      background-size: cover;
      background-position: center;
      border-radius: 10px; /* hvis du vil have runde hjørner */
  }
  .backgroundCover{
      padding: 20px;
      width: calc(100% - 40px);
  }
  swiper-slide{
      margin-bottom: 16px;
  }
  swiper-container{
      margin: 10px;
  }

  .gamesSlider .swiperContainer{
    display: grid;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100% auto;
    grid-template-columns: 1fr 1fr 4fr 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      "home homeScore dateTime awayScore away"
      "home . stadion . away"
      "home . addCalendar . away";
    padding-bottom: 0px;
    padding-top: 20px;

  }

  .gamesSlider .club{
    width: 100%;
  }
  .gamesSlider .club img{
    width: 100%;
    object-fit: contain;
  }
  .gamesSlider .club h3{
    width: 100%;
    text-align: center;
    color: #000;
  }
  .gamesSlider .score{
    text-align: center;
    margin: auto;
  }
  .gamesSlider .time{
    font-size: 19px;
    text-align: center;
    font-weight: 1000;
  }
  .gamesSlider .location{
    font-size: 14px;
    text-align: center;
    max-height: 20px;
  }
  .gamesSlider .addToCalendar{
    text-align: center;
    margin: auto;
    padding: 3px 6px;
    margin-bottom: 15px;
    background-color: #fff;
    box-shadow: 0px 0px 3px 2px #00000080;
  }
  .gamesSlider .swiper-pagination-horizontal{
    position: absolute;
    top: 0px !important;
  }
  ::v-deep(swiper-container::part(pagination)) {
  top: 0;
}
.gamesSlider .swiperContainer {
  fill: #CCDAFF;
}
</style>