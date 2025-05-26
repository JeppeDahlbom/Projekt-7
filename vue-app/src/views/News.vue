<script setup>
import { ref } from 'vue'
import newsBG1 from '../assets/images/newsBG1.webp'
import newsBG2 from '/assets/images/natureEnergyPark.webp'
import newsBG3 from '../assets/images/newsBG3.webp'
import addCalendar from '../assets/icons/addCalendar.png'


const newsDummy = [
  {
    header: "VI RYKKER SAMMEN",
    body: "Stå sammen på lægterne, når vi møder AC Horsens den 24. December kl. 21.30",
    image: newsBG1
  },
  {
    header: "KOM TIL STADION",
    body: "Oplev stemningen på stadion når OB tager imod Brøndby IF den 10. Januar kl. 19.00",
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


const postDummy = [
  {
    thumbnailPath: 'interview-tumbnail.png',
    videoPath: 'interview.mp4',
    postLink: '/'
  },
  {
    thumbnailPath: 'fan-tumbnail.png',
    videoPath: 'faninterview.mp4',
    postLink: '/'
  },
  {
    thumbnailPath: 'postIMG.png',
    videoPath: '',
    postLink: '/'
  }
]
const stored = localStorage.getItem('localPlayersDummy');
const players = ref([]);
if(stored){
  players.value = JSON.parse(stored);
}



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
        <h2 class="score"  style="grid-area: homeScore;">  {{ element.dateTime < new Date() ? element.result[0] : '' }}</h2>
        <div class="club" style="grid-area: away;">
          <img :src="`/assets/icons/${element.away}Logo.svg`" alt="" />                    
        </div>
        <h2 class="score" style="grid-area: awayScore;">{{ element.dateTime < new Date() ? element.result[1] : '' }}</h2>

        <h3 class="time" style="grid-area: dateTime;">{{ element.dateTime.toLocaleDateString('da-DK', { weekday: 'short' }).replace('.', '').replace(/^./, c => c.toUpperCase()) }} {{ element.dateTime.getDate() }} {{ element.dateTime.toLocaleDateString('da-DK', { month: 'short' }).replace('.', '').replace(/^./, c => c.toUpperCase()) }} - {{ element.dateTime.toLocaleTimeString('da-DK', { hour: '2-digit', hour12: false }) }}:{{ element.dateTime.toLocaleTimeString('da-DK', { minute: '2-digit' }).padStart(2, '0') }}</h3>
        <p class="location" style="grid-area: stadion;">{{ element.stadion.trim() }}</p>
        <a class="addToCalendar" style="grid-area: addCalendar;" href=""><img :src="addCalendar" alt=""></a>
      </div>
    </swiper-slide>
  </swiper-container>
  </div>
  <div class="OBMedia">
    <h2 class="titleMark">OB Media</h2>
    <swiper-container
    grab-cursor = "true" 
    scrollbar = "true"  
    slides-per-view = "2"
    space-between = "10"
    :loop = "false"
    > 
      <swiper-slide v-for="element in postDummy" class="swiperSlide">
        <video v-if="element.videoPath" :src="`/assets/video/${element.videoPath}`" :poster="`/assets/images/${element.thumbnailPath}`" controls ></video>
        <img v-else :src="`/assets/images/${element.thumbnailPath}`" alt="" />        
      </swiper-slide>
    </swiper-container>
  </div> 
  <div class="MyProfile">
    <h2 class="titleMark">Min profil</h2>
    <div class="container">
      <div class="background">
        <div class="badges">
          <div class="badgeIcons">
            <img src="/assets/icons/verifiedBadge.png" alt="">
            <img src="/assets/icons/seasonCard2.png" alt="">
          </div>
          <a href="/"><h3>Se dine badges</h3></a>
        </div>
        <h2>Odense</h2>
        <img class="bgStripes" src="/assets/images/myProfileBG.svg" alt="">
      </div>
      <div class="foreground">
        <div class="shirt">
          <h2>Gustavo</h2>
          <h2 class="shirtNumber">28</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

.MyProfile .background .badges{
  display: flex;
  height: 36px;
}

.MyProfile .background .badges div{
  height: 100%;
}
.MyProfile .background .badges div img{
  height: 100%;
  width: auto;
}
.MyProfile .background .badges a h3{
  background-color: var(--Blue);
  padding: 5px;
  font-size: 20px;
  border-radius: 8px;

}
.MyProfile .background .badges a{
  margin-left: auto;
}
.MyProfile .background .badges .badgeIcons{
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.MyProfile .background img{
  width: 100%;
}
.MyProfile .background .bgStripes{
  position: absolute;
  bottom: 0;
}
.MyProfile .background h2{
  font-size: 30vw;
  text-align: center;
  text-transform: uppercase;
}

.MyProfile .container{
  margin: 10px;
  width: calc(100% - 20px);
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "stack";
}
.MyProfile .background, .MyProfile .foreground{
  grid-area: stack;
}
.MyProfile .background{
  position: relative;
}
.MyProfile .foreground{
  padding-top: 90px;
  z-index: 10;

}

.MyProfile .foreground .shirt{
  background-image: url('/assets/images/shirt.png');
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
    background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.MyProfile .foreground .shirt h2{
  color: #D32840;
  letter-spacing: 0px;
  line-height: 1.3em;
  text-transform: uppercase;
}
.MyProfile .foreground .shirt .shirtNumber{
  font-size: 90px;
  margin-bottom: 50px;
  
}

.OBMedia .swiperSlide img, .OBMedia .swiperSlide video{
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}

.OBMedia .swiperSlide video:fullscreen{
  object-fit: contain;
}



.newsSlider, .gamesSlider, .OBMedia, .MyProfile{
  padding-bottom: 10px;
  padding-top: 10px;
}
.newsSlider h3, .newsSlider p, .newsSlider a{
    color: #fff;
}
.gamesSlider h3{
  color: var(--Blue);
}
.newsSlider p{
  margin-top: 10px;
  margin-bottom: 10px;
}
.newsSlider .CallToActionButton a{
  background-color: var(--Blue);
  text-decoration: none;
  padding: 3px 7px;
  border-radius: 5px;
  text-transform: uppercase;
}
.newsSlider h3{
  font-size: 30px;
  font-weight: 700;
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
    grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
    grid-template-areas:
      "home homeScore dateTime awayScore away"
      "home homeScore stadion awayScore away"
      "home homeScore addCalendar awayScore away";
    padding: 5px;

    padding-bottom: 0px;
    padding-top: 20px;
    background-color: white;
  }
  .gamesSlider swiper-container{
    box-shadow: 0px 0px 7px 1px #00000044;
    overflow: hidden;
    border-radius: 12px;


  }
  .gamesSlider swiper-slide{
    margin-bottom: 0;
  }

  .gamesSlider .club{
    width: 100%;
    margin: auto;
    margin-top: 5px;
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
    font-weight: 700;
    font-size: 30px;
    margin-top: 5px;
  }
  .gamesSlider .time{
    font-size: 19px;
    text-align: center;
    font-weight: 1000;
  }
  .gamesSlider .location{
    font-size: 14px;
    text-align: center;
    margin-bottom: 30px;
    color: var(--Blue);

  }
  .gamesSlider .addToCalendar{
    text-align: center;
    margin: auto;
    margin-bottom: 15px;
    background-color: #fff;
    color: var(--Blue);
    box-shadow: 0px 0px 6px 1px #00000060;
    padding: 8px 12px;
    height: 20px;
    border-radius: 5px;
  }
  .gamesSlider .addToCalendar img{
    display: block;
    width: auto;
    height: 100%;
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