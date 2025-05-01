<script setup>
const newsDummy = [
  {
    header: "VI RYKKER SAMMEN",
    body: "Stå sammen på lægterne, når vi møder AC Horsens den 24. December kl. 21.30",
    image: "/src/assets/images/newsBG1.webp"
  },
  {
    header: "KOM TIL STADION",
    body: "Oplev stemningen når OB tager imod Brøndby IF den 10. Januar kl. 19.00",
    image: "/src/assets/images/newsBG2.webp"
  },
  {
    header: "SÆSONSTART 2025",
    body: "Vær klar fra første fløjt – første kamp mod FC Midtjylland den 1. Februar kl. 18.00",
    image: "/src/assets/images/newsBG3.webp"
  }
]

  
  
  
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
]

</script>


<template>
  <div class="newsSlider">
    <h2 class="titleMark">Nyheder</h2>
    <swiper-container
    grab-cursor = "true" 
    scrollbar = "true"  
    slides-per-view = "1"
    space-between = "20"
    loop = "true"
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
    scrollbar = "true"  
    slides-per-view = "1"
    space-between = "20"
    loop = "true"
>
    <swiper-slide v-for="element in gamesDummy">
      <div class="swiperContainer">
        <div class="club" style="grid-area: home;">
          <img :src="`src/assets/icons/${element.home}Logo.svg`" alt="" />                    
          <h3>{{ element.home }}</h3>
        </div>
        <div class="club" style="grid-area: away;">
          <img :src="`src/assets/icons/${element.away}Logo.svg`" alt="" />                    
          <h3>{{ element.away }}</h3>
        </div>
        <h3 style="grid-area: dateTime;">{{ element.dateTime }}</h3>
        <p>{{  }}</p>
      </div>
    </swiper-slide>
  </swiper-container>
  </div>
  <div class="OBMedia">

  </div>
  <div class="MyProfile">

  </div>
</template>
<style scoped>
  .newsSlider h3,p,a{
      color: #fff;
  }
  .titleMark{
      border-left: 6px solid; /* bredde styres her */
      border-image: linear-gradient(to bottom, transparent 0%, transparent 20%, var(--Blue) 20%, var(--Blue) 80%,transparent 80%, transparent 100%);
      border-image-slice: 1;
      padding-left: 20px; /* lidt afstand mellem kant og tekst */
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
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      "home homeScore dateTime awayScore away"
      "home homeScore stadion awayScore away"
      "home homeScore addCalendar awayScore away";
    gap: 0px; /* juster som ønsket */
  }

  .gamesSlider .club{
    width: 20vw;
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
</style>