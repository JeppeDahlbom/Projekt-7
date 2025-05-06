<script setup>

const gamesDummy = [
  {
    home: "OB",
    away: "SIF",
    dateTime:   new Date('2025-04-20T09:30:00'), // Før i dag, kl. 09:30
    result:[1,1],
    league: "Super league",
    matchID: 1
  },{
    home: "BIF",
    away: "OB",
    dateTime:   new Date('2025-05-02T08:00:00'), // Efter i dag, kl. 08:00
    result:[1,1],
    league: "Super league",
    matchID: 3
  },
  {
    home: "OB",
    away: "VFF",
    dateTime:   new Date('2025-04-28T15:45:00'), // Før i dag, kl. 15:45
    result:[1,1],
    league: "Super league",
    matchID: 2
  },
  
  {
    home: "VFF",
    away: "OB",
    dateTime:   new Date('2025-05-10T18:15:00'), // Efter i dag, kl. 18:15
    result:[1,1],
    league: "Super league",
    matchID: 4
  }
];
const getLogoLink = (team) =>{return `/assets/icons/${team}Logo.svg`};
</script>
<template>
    

  <section class="ticket-card">
    <div class="ticket-image">General kamp logo</div>
    <div class="ticket-details">
      <div>
        <p><strong>Kamp title</strong></p>
        <p>dato - lokation<br>Tidspunkt</p>
        <p>Pris</p>
      </div>
      <button class="buy-button">Køb billet</button>
    </div>
  </section>

    <div class="background" v-for="element in gamesDummy">
                <div class="container" >
                    <h3 class="liga">{{ element.league }}</h3>
                    <h3 class="homeName">{{ element.home }}</h3> 
                    <h3 class="v">v</h3>
                    <h3 class="awayName">{{ element.away }}</h3>
                    <h3 class="timeDate" >{{ element.dateTime.toLocaleDateString('da-DK', { weekday: 'short' }).replace('.', '').replace(/^./, c => c.toUpperCase()) }} {{ element.dateTime.getDate() }} {{ element.dateTime.toLocaleDateString('da-DK', { month: 'short' }).replace('.', '').replace(/^./, c => c.toUpperCase()) }} - {{ element.dateTime.toLocaleTimeString('da-DK', { hour: '2-digit', hour12: false }) }}:{{ element.dateTime.toLocaleTimeString('da-DK', { minute: '2-digit' }) }}</h3>
                    <img :src="getLogoLink(element.home)" alt="" class="home logoImg">
                    <img :src="getLogoLink(element.away)" alt="" class="away logoImg">

            </div>
        </div>
  

</template>
  
<style scoped>
* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: sans-serif;
    background-color: white;
  }
  
  .container h3{
    text-align: center;
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

  .background .container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
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
    background-size: contain;
  }
  .timeDate{
    grid-area: dateTime;
    font-size: 15px;
   text-align: center;
  }
  .home{
    grid-area: home;
  }
  .liga{
    grid-area: liga;
    font-size: 8px;
    background-color: white;
    color: var(--Blue);
    width: max-content;
    margin: auto;
    margin-top: 0;
    padding: 5px 7px;
    border-radius: 0px 0px 10px 10px;
  }
  .away{
    grid-area: away;
    
  }
  .awayName{
    grid-area: awayName;
    font-size: 25px;
  }
  .homeName{
    grid-area: homeName;
    font-size: 25px;
}
.v{
  grid-area: v;
}
.logoImg{
  margin: auto;
  width: 70%;

}
  </style>