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
    duration: 120.0,
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
    title: "Hjemmebanehelte",
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
  songsDummy.value.find((song) => {return song.ID === id}).playing = !songsDummy.value.find((song) => {return song.ID === id}).playing;
}else{
  audio.pause();
  songsDummy.value.find((song) => {return song.ID === id}).playing = !songsDummy.value.find((song) => {return song.ID === id}).playing;
}
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
      <p class="duration">{{ Math.floor(element.duration/60) }}:{{ String(element.duration-(Math.floor(element.duration/60)*60)).padStart(2, '0') }}</p> 
      <h3 class="lyrics">{{ element.lyrics }}</h3>
      <button :id="'playButton' + element.ID" class="playButton" @click="changeAudioState(element.ID)">
        <div v-if="!element.playing" class="play">&#9658;</div>
        <div v-else-if="element.playing" class="pause">=</div>
      </button>
      <audio :id="'audioFile' + element.ID" :src="`/assets/songs/${element.ID}.mp3`" type="audio/mpeg" controls @timeupdate="updateProgress(element.ID)"></audio>
      
      <div class="audioProgressBG">
        <div :id="'progressBar' + element.ID" class="audioProgress" >
          <div class="circle"></div>
        </div>
      </div>
    </div>    
  </div>

</template>
<style scoped>
  .audioProgressBG{
  width: 100%;
  height: 4px;
  background-color: lightgray;
  border-radius: 20px;
  }
  .audioProgress{
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
    background-color: var(--Blue);
    border: none;
    border-radius: 150px;
    height: 70px;
    width: 70px;
    cursor: pointer;
    position: relative;
  }
  .playButton div{
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    color: white;

  }

  .playButton .play{
    font-size: 60px;
  }

  .playButton .pause{
    font-size: 70px;
    transform: rotate(90deg);
    top: -16%;
  left: 10%;
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
    
  .title{
    color: var(--Blue);
    text-transform: uppercase;
  }
    
  .duration{
    color: var(--Blue);
  
  }


  .background {
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
    margin-top: 10px;
    padding: 5px;
  }
</style>
