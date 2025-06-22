<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const position = document.getElementById('position');
  const cone = document.getElementById('cone');
  
  position.style.left = window.getComputedStyle(position).left;
  position.style.top = window.getComputedStyle(position).top;

  let currentRotation = 0; 
  const intervals = {};

  const move = (x, y) => {
    position.style.top = `calc(${y}px + ${position.style.top})`;
    position.style.left = `calc(${x}px + ${position.style.left})`;
  };

  const rotate = (degrees) => {
    currentRotation = (currentRotation + degrees) % 360;
    cone.style.transform = `translate(0%, -50%) rotate(${currentRotation}deg)`;
  };

  const startMove = (key, x, y) => {
    if (intervals[key]) return;

    intervals[key] = setInterval(() => {
      move(x, y);
    }, 20);
  };

  const startRotate = (key, degrees) => {
    if (intervals[key]) return;

    intervals[key] = setInterval(() => {
      rotate(degrees);
    }, 20);
  };

  const stopMove = (key) => {
    if (!intervals[key]) return;

    clearInterval(intervals[key]);
    delete intervals[key];
  };

  document.addEventListener('keydown', (event) => {
    if (event.repeat) return; // ignore repeats

    switch (event.key.toLowerCase()) {
      case 'w':
        startMove('w', 0, -2);
        break;
      case 'a':
        startMove('a', -2, 0);
        break;
      case 's':
        startMove('s', 0, 2);
        break;
      case 'd':
        startMove('d', 2, 0);
        break;
      case 'arrowleft':
        startRotate('arrowleft', -5); 
        break;
      case 'arrowright':
        startRotate('arrowright', 5); 
    }
  });

  document.addEventListener('keyup', (event) => {
    switch (event.key.toLowerCase()) {
      case 'w':
      case 'a':
      case 's':
      case 'd':
      case 'arrowleft':
      case 'arrowright':
        stopMove(event.key.toLowerCase());
        break;
    }
  });
});
</script>


<template>
  <div id="map">
    <div id="position">
      <svg id="cone" viewBox="0 0 25 14">
        <path d="M0 4 L25 0 L25 14 L0 10 Z"></path>
          <defs>
            <radialGradient id="coneGradient" cx="0" cy="0.5" r="1">
              <stop offset="0%" stop-color="black" stop-opacity="0.5" />
              <stop offset="20%" stop-color="black" stop-opacity="0.4" />
              <stop offset="40%" stop-color="black" stop-opacity="0.3" />
              <stop offset="60%" stop-color="black" stop-opacity="0.2" />
              <stop offset="80%" stop-color="black" stop-opacity="0.1" />
              <stop offset="100%" stop-color="black" stop-opacity="0" />
            </radialGradient>
          </defs>
      </svg>
      <div class="dot"></div>
    </div>
  </div>
  <h2 class="titleMark">Find sæde</h2>
  <input type="text">
  <button class="search"><a>Søg</a></button>

  <div class="background">
    <div class="container" >
      <h3 class="liga">Super Liga</h3>
      <h3 class="homeName">OB</h3> 
      <h3 class="v">vs</h3>
      <h3 class="awayName">EFB</h3>
      <h3 class="timeDate" >Søn 20 Apr - 09:30</h3>
      <img :src="`assets/icons/OBLogo.svg`" alt="" class="home logoImg">
      <img :src="`assets/icons/EFBLogo.svg`" alt="" class="away logoImg">
    </div>
    <div class="buyBG">
      <h3 class="teams">OB - EFB</h3>
      <h3 class="dateLocation">Søndag 20. Apr - Nature energy park<br>Sæde A8 - 47</h3>
      <h3 class="time">09:30</h3>
      <router-link to="/Kort">Find plads</router-link>

    </div>
  </div>
</template>

<style scoped>
input{
  border-width: 2px;
  border-style: solid;
  border-color: darkgray;
  padding: 2px 6px;
  margin: auto;
  color: #0048FF;
  font-family: "Anton", sans-serif;
  font-style: normal;
  transform:scaleY(1.1);
  letter-spacing: 2.5px; 
}
#map {
  --positionDotSize: 16px;
  position: relative;
  padding: 0 calc(var(--positionDotSize) / 2);
  width: calc(100% - var(--positionDotSize));
  height: 300px;
  overflow: hidden;
  background-image: url('/assets/images/stadion.webp');
  background-size: contain;
  background-repeat: no-repeat;
}

#position {
  position: absolute;
  width: var(--positionDotSize);
  height: var(--positionDotSize);
  top: 250px;
  left: 240px;
  overflow: visible;
}
.dot{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--Blue);
  border-radius: 50%;
  z-index: 3;
  border-color: white;
  border-width: 3px;
  border-style: solid;
  box-sizing: border-box;
  box-shadow: 0 0 1px 0.5px rgba(0, 0, 0, 0.5);
}
#cone {
  --coneSize: 1.35;
  position: absolute;
  width: calc(25px * var(--coneSize));
  height: calc(14px * var(--coneSize));
  top: 50%;
  left: 50%;
  transform-origin: 0 50%; /* pivot at the left-center of cone */
  transform: translate(0%, -50%) rotate(0deg); /* center cone, then rotate */
  z-index: 1;
}
#cone path{
  fill: url(#coneGradient);
  
}

.search{
  border-radius: 8px;
  border: none;
  background-color: var(--Blue);
  padding: 4px 12px;
  margin-left: 10px;
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

</style>
