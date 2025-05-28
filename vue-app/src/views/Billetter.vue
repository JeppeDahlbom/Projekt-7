<script setup>
import heroImage from '../assets/images/heroImageBilletter.png'
const gamesDummy = [
  {
    home: "OB",
    away: "EFB",
    stadion:"Nature energy park",
    stadionPosition:"to be added",
    dateTime:   new Date('2025-04-20T09:30:00'), // Før i dag, kl. 09:30
    result:[1,1],
    league: "Super liga",
    matchID: 1
  },{
    home: "FCM",
    away: "OB",
    stadion:"Nature energy park",
    stadionPosition:"to be added",
    dateTime:   new Date('2025-05-02T08:00:00'), // Efter i dag, kl. 08:00
    result:[1,1],
    league: "Super liga",
    matchID: 3
  },
  {
    home: "OB",
    away: "ACH",
    stadion:"Nature energy park",
    stadionPosition:"to be added",
    dateTime:   new Date('2025-04-28T15:45:00'), // Før i dag, kl. 15:45
    result:[1,1],
    league: "Super liga",
    matchID: 2
  },
  
  {
    home: "EFB",
    away: "OB",
    stadion:"Nature energy park",
    stadionPosition:"to be added",
    dateTime:   new Date('2025-05-10T18:15:00'), // Efter i dag, kl. 18:15
    result:[1,1],
    league: "Super liga",
    matchID: 4
  }
];
const getLogoLink = (team) =>{return `/assets/icons/${team}SLogo.svg`};
</script>
<template>
  <div class="hero-image">
    <img :src="heroImage" alt="Stadionbillede"  />
    <h3>For klubben, for byen, for altid.</h3>
  </div>
  <h2 class="titleMark">Kommende kampe</h2>
    
  <div class="background" v-for="element in gamesDummy">
    <div class="container" >
      <h3 class="liga">{{ element.league }}</h3>
      <h3 class="homeName">{{ element.home }}</h3> 
      <h3 class="v">vs</h3>
      <h3 class="awayName">{{ element.away }}</h3>
      <h3 class="timeDate" >{{ element.dateTime.toLocaleDateString('da-DK', { weekday: 'short' }).replace('.', '').replace(/^./, c => c.toUpperCase()) }} {{ element.dateTime.getDate() }} {{ element.dateTime.toLocaleDateString('da-DK', { month: 'short' }).replace('.', '').replace(/^./, c => c.toUpperCase()) }} - {{ element.dateTime.toLocaleTimeString('da-DK', { hour: '2-digit', hour12: false }) }}:{{ element.dateTime.toLocaleTimeString('da-DK', { minute: '2-digit' }).padStart(2, '0') }}</h3>
      <img :src="getLogoLink(element.home)" alt="" class="home logoImg">
      <img :src="getLogoLink(element.away)" alt="" class="away logoImg">
    </div>
    <div class="buyBG">
      <h3 class="teams">{{ element.home }} - {{ element.away }}</h3>
      <h3 class="dateLocation">{{ element.dateTime.toLocaleDateString('da-DK', { weekday: 'long' }).replace('.', '').replace(/^./, c => c.toUpperCase()) }} {{ element.dateTime.getDate() }}. {{ element.dateTime.toLocaleDateString('da-DK', { month: 'short' }).replace('.', '').replace(/^./, c => c.toUpperCase()) }} - {{ element.stadion }}</h3>
      <h3 class="time">{{ element.dateTime.toLocaleTimeString('da-DK', { hour: '2-digit', hour12: false }) }}:{{ element.dateTime.toLocaleTimeString('da-DK', { minute: '2-digit' }).padStart(2, '0') }}</h3>
      <a href="https://ob.eventii.dk/?utm_source=website&utm_medium=header_menu&utm_campaign=kob_billet">Køb billet</a>
    </div>
  </div>
  

</template>
  
<style scoped>
* {
    box-sizing: border-box;
  }
  
  
  
  .container h3{
    text-align: center;
    text-transform: uppercase;
    line-height: 1;
    display: inline-block
  }
  

  .category-buttons {
    display: flex;
    justify-content: space-around;
    padding: 12px;
    background-color: #f2f2f2;
  }
  
  .category-buttons button {
    flex: 1;
    margin: 0 4px;
    padding: 10px;
    border: 1px solid #999;
    background-color: white;
    font-size: 14px;
  }
  
  
  .ticket-card {
    background-color: #e6e6e6;
    margin: 16px;
    border: 1px solid #ccc;
    overflow: hidden;
  }
  
  .ticket-image {
    background-color: #ccc;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: italic;
    font-size: 16px;
    text-align: center;
  }
  
  .ticket-details {
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }
  
  .buy-button {
    align-self: flex-end;
    margin-top: 8px;
    padding: 6px 12px;
    background-color: white;
    border: 1px solid #999;
    cursor: pointer;
  }
  .background{
    padding: 0px 5px 5px 5px;
    box-shadow: 0px 2px 3px 0.5px rgba(0, 0, 0, 0.235);
    margin-bottom: 15px;
    background-image: url('/assets/images/3FSuperliga.svg');
    background-repeat: no-repeat;
    background-position: 80% 85%;
    background-size: 65%;

  }

  .background .container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "home liga away"
      "home homeName away"
      "home v away"
      "home awayName away"
      "home dateTime away";
      
    margin: 10px; /* juster som ønsket */
    background-image: url('/assets/images/ticketBG.svg');
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100%;
    padding-bottom: 10px;
    margin-bottom: 0;
  }
  h3.timeDate{
    grid-area: dateTime;
    font-size: 12px;
   text-align: center;
   margin-top: 5px;
  }
  .home{
    grid-area: home;
  }
  .away{
    grid-area: away;
  }
  h3.liga{
    grid-area: liga;
    font-size: 8px;
    background-color: white;
    color: var(--Blue);
    width: max-content;
    margin: auto;
    margin-top: 0;
    padding: 5px 7px;
    border-radius: 0px 0px 10px 10px;
    margin-bottom: 5px;
  }
  h3.awayName{
    grid-area: awayName;
    font-size: 18px;
  }
  h3.homeName{
    grid-area: homeName;
    font-size: 18px;
  }

  h3.v{
    grid-area: v;
    font-size: 12px;
    margin: 7px auto;
    
  }
  .logoImg{
    margin: auto;
    width: 50%;

  }
  .buyBG {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  margin: 10px;
  margin-top: 0;
  margin-bottom: 10px;
  }
  .buyBG h2 {
    font-size: 16px;
    flex-basis: 100%;
    color: black;
  }

  .buyBG a {
    background-color: var(--Blue); 
    color: white;
    padding: 4px 8px; 
    border-radius: 8px;
    margin-left: auto;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .buyBG h3 {
    color: black;
    flex-basis: 100%;

  }
  .buyBG .teams{
    font-size: 25px;
  }
  .buyBG .dateLocation{
    font-size: 15px;

  }
  .buyBG .time{
    font-size: 15px;

  }
.hero-image{
  width: calc(100% + 16px);
  margin: 0px -8px;
  margin-bottom: 15px;
  border-radius: 0px 0px 5px 5px;
  overflow: hidden;
  position: relative;
}
  .hero-image h3{
    position: absolute;
    display: block;
    margin: auto;
    top: 5%;
    left: 5%;
    right: 5%;
    bottom: 5%;
    text-align: center;
    height: min-content;
    text-shadow: 0 0px 8px black;
  }

  .hero-image img{
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
  
  

  </style>