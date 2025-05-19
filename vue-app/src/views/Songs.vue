<script setup>
import { ref } from 'vue'

import heroImage from '../assets/images/heroImageSongs.png'

let isListening = false;
let audioContext, analyser, dataArray, bars;
let stream;

async function toggleListening() {
  const button = document.querySelector('.sound-button');
  isListening = !isListening;

  if (isListening) {
    button.classList.add('active');
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);

    analyser = audioContext.createAnalyser();
    analyser.fftSize = 64;

    source.connect(analyser);

    const bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
    bars = document.querySelectorAll('.bar');

    animate();
  } else {
    button.classList.remove('active');
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    if (audioContext) {
      audioContext.close();
    }
  }
}

function animate() {
  if (!isListening) return;

  requestAnimationFrame(animate);
  analyser.getByteFrequencyData(dataArray);

  for (let i = 0; i < bars.length; i++) {
    const value = dataArray[i];
    const height = Math.max(10, (value / 255) * 60);
    bars[i].style.height = `${height}px`;
  }
}




let songsDummy = ref([
  {
    title: "Store stolte Odense",
    duration: 58.0,
    lyrics: "Stolte Odense, Store stolte Odense, Vi slås for din ære, Vi kæmper for dit na-a-avn ",
    ID: 1,
    progress: 0.0,
    playing:false
  },
  {
    title: "Crazy Frog",
    duration: 172.0,
    lyrics: "Fyn er fin og fyldt med mod,Vi kæmper med passion og blod",
    ID: 2,
    progress: 0.0,
    playing:false
  },
  {
    title: "Vi står sammen",
    duration: 105.0,
    lyrics: "Vi står sammen, vi står stærkt,Odense kæmper  altid ærligt",
    ID: 3,
    progress: 0.0,
    playing:false
  },
  {
    title: "Hjemmebane helte",
    duration: 90.0,
    lyrics: "Hjemmebanehelte, vores OB,Vi synger højt, vi gir' aldrig op",
    ID: 4,
    progress: 0.0,
    playing:false
  },
  {
    title: "Blå og hvid",
    duration: 100.0,
    lyrics: "Blå og hvid i hjertet bor,OB vi elsker dig i med og modvind stor",
    ID: 5,
    progress: 0.0,
    playing:false
  }
]);

const updateProgress = (id) => {
  document.getElementById('progressBar'+id).style.width = `${(document.getElementById('audioFile'+id).currentTime / document.getElementById('audioFile'+id).duration) * 100}%`;
}

const changeAudioState = (id) => {
const audio = document.getElementById('audioFile'+id);
if(audio.paused){
  audio.play();
  songsDummy.value.find((song) => {return song.ID === id}).playing = true;
}else{
  audio.pause();
  songsDummy.value.find((song) => {return song.ID === id}).playing = false;
}
}

const audioEnded = (id) => {
  songsDummy.value.find((song) => {return song.ID === id}).playing = false;
}


</script>
<template>
  <div class="hero-image">
    <img :src="heroImage" alt="Sangbogbilledet"  />
  </div>
  <h2 class="titleMark">Fang fans sange med AI</h2>

  <div class="sound-button" @click="toggleListening()">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div> 

  <h2 class="titleMark">Sange på tribunen</h2>

  <div class="background" v-for="element in songsDummy">
    <div class="container" >
      <h2 class="title">{{ element.title }}</h2>

      <h3 class="lyrics" style=" display: none;">{{ element.lyrics }}</h3>

      <audio :id="'audioFile' + element.ID" :src="`/assets/songs/${element.ID}.mp3`" type="audio/mpeg" @timeupdate="updateProgress(element.ID)"   @ended="audioEnded(element.ID)"></audio>

      <svg class="banner" viewBox="0 0 100 210" xmlns="http://www.w3.org/2000/svg">
        <!-- Venstre kolonne -->
        <rect x="0" y="-10" width="20" height="20"/>
        <rect x="0" y="20" width="20" height="20"/>
        <rect x="0" y="50" width="20" height="20"/>
        <rect x="0" y="80" width="20" height="20"/>
        <rect x="0" y="110" width="20" height="20"/>
        <rect x="0" y="140" width="20" height="20"/>
        <rect x="0" y="170" width="20" height="20"/>
        <rect x="0" y="200" width="20" height="20"/>


        <!-- Højre kolonne -->
        <rect x="20" y="5" width="70" height="20"/>
        <rect x="20" y="35" width="70" height="20"/>
        <rect x="20" y="65" width="70" height="20"/>
        <rect x="20" y="95" width="70" height="20"/>
        <rect x="20" y="125" width="70" height="20"/>
        <rect x="20" y="155" width="70" height="20"/>
        <rect x="20" y="185" width="70" height="20"/>

      </svg>
      
      <div class="progress">
        <p class="duration">{{ Math.floor(element.duration/60) }}:{{ String(element.duration-(Math.floor(element.duration/60)*60)).padStart(2, '0') }}</p> 
        <div class="audioProgressBG">
          <div :id="'progressBar' + element.ID" class="audioProgress" >
            <div class="circle"></div>
          </div>
        </div>
      </div>
      <button :id="'playButton' + element.ID" class="playButton" @click="changeAudioState(element.ID)">
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon v-if="!element.playing" points="28,10 28,90 95,50" stroke="none" />
          <line v-if="element.playing" x1="32" y1="25" x2="32" y2="75"/>
          <line v-if="element.playing" x1="68" y1="25" x2="68" y2="75"/>
        </svg>
      </button>
    </div>
    <div class="fullLyrics">

    </div>
  </div>

</template>
<style scoped>
.background .fullLyrics{
  position:absolute;
  top: 0;
  right: 0;
  height: 200px;
  width: 200px;
  background-color: deeppink;
}
  .background .container{
    width: 100%;
    height: auto;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 90px auto 90px;
    grid-template-areas:
      "banner title play"
      "banner progress play";
      gap: 0;
      overflow: hidden;
      position: relative;
  }
  .background .container .banner{
    grid-area: banner;
    display: block;
    height: auto;
    width: 90px;
    fill: var(--Blue);
    position: absolute;
    top: 0;
    left: 0;
  }
  .background .container .progress{
  grid-area: progress;
  padding-bottom: 10px;
  }
  .background .container .progress .duration{
    display: block;
    margin-left: auto;
    width: min-content;
    color: var(--Blue);

  }

  .background .container .progress .audioProgressBG{
  width: 100%;
  height: 4px;
  background-color: lightgray;
  border-radius: 20px;
  }

  .background .container .progress .audioProgress{
  width: 0%;
  height: 100%;
  background-color: var(--Blue);
  border-radius: 20px;
  align-items: center;
  display: flex;
  margin-right: auto;
  }
  .circle{
    margin-left: auto;
    margin-right: 0;
    height: 12px;
    width: 12px;
    min-width: 12px;
    border-radius: 10px;
    background: var(--Blue);
  }
  .sound-button {
    background-color: var(--Blue);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    cursor: pointer;
    margin: auto;
  }
  .playButton{
    grid-area: play;
    background-color: var(--Blue);
    border: none;
    border-radius: 150px;
    height: 70px;
    width: 70px;
    cursor: pointer;
    position: relative;
    margin: auto;
    padding: 0;
  }
  .playButton svg{
    fill: white;
    stroke: white;
    width: 80%;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    stroke-width: 25; /* Juster tykkelsen */
    stroke-linecap: round; /* Afrundede ender */


  }

  .bar {
    width: 6px;
    height: 20px;
    background-color: white;
    border-radius: 3px;
    transition: height 0.1s ease-in-out;
  }
  .hero-image{
    width: calc(100% + 16px);
    margin: 0px -8px;
    margin-bottom: 15px;
    margin-top: -1px;
    border-radius: 0px 0px 5px 5px;
    overflow: hidden;
  }

  .hero-image img{
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;}
    
  .background .title{
    grid-area: title;
    color: var(--Blue);
    text-transform: uppercase;
    padding-top: 5px;
    font-size: 25px;
    min-height: 3em;
    width: 100%;
    white-space: normal;
    word-break: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
    



  .background {
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
    margin-top: 10px;
    border-radius: 10px;
  }
</style>
