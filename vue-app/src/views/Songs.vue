<script setup>
import { ref } from 'vue'

import heroImage from '../assets/images/heroImageSongs.png'

let hideElements = ref(false);


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
    lyrics: "Stolte Odense,<br> Store stolte Odense,<br> Vi slås for din ære,<br> Vi kæmper for dit na-a-avn ",
    ID: 1,
    progress: 0.0,
    playing:false
  },
  {
    title: "Vi er fra Odense",
    duration: 34.0,
    lyrics: `Vi er fra Odense,<br> Stolte som få,<br> Odense i hjertet er,<br> Striber i blod,<br> Kom giv os tro igen,<br> Stolthed og ære,<br> Vi vil ha’ guldet hjem,<br> Nu skal det være (x2)`,
    ID: 2,
    progress: 0.0,
    playing:false
  },
  {
    title: "Tribunen kalder det er vores hjem",
    duration: 62.0,
    lyrics: `Tribunen kalder det er vores hjem,<br>
Hvor vi vil stå,<br>
For hvid og blå,<br>
Stadion gi’r mig en afhængighed,<br>
For Odense jeg bliver ved,<br><br>

Lå-lå-lå-lå…`,
    ID: 3,
    progress: 0.0,
    playing:false
  },
  {
    title: "Her i Odense by",
    duration: 31.0,
    lyrics: `Her i Odense by,<br>
Bli’r du født på ny,<br>
Vi kan føle og mærke,<br>
Striber i vort hjert’,<br><br>

Sjå-lå-lå-lå…`,
    ID: 4,
    progress: 0.0,
    playing:false
  },
  {
    title: "Odense dreng og jeg er stolt",
    duration: 30.0,
    lyrics: `Odense dreng og jeg er stolt,<br>
Byen har det bedste hold,<br>
Klubben er i hvid og blå,<br>
Odense kan ingen nå,<br><br>

Så drenge syng så højt i kan,<br>
Vi skal vise at vi kan,<br>
Sammen gå fælles flok,<br>
Odense lad os gå amok,<br><br>

Sjå-lå-lå-lå-lå-lå-lå…`,
    ID: 5,
    progress: 0.0,
    playing:false
  }
]);

const updateProgress = (id) => {
  const fillPercentage = `${(document.getElementById('audioFile'+id).currentTime / document.getElementById('audioFile'+id).duration) * 100}%`;
  document.querySelectorAll('.progressBar'+id).forEach((element)=>{
    element.style.width = fillPercentage;
  });
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

const showLyrics = (id) => {
  const lyrics = document.getElementById('lyrics'+id);
  if(lyrics.style.display == 'none'){
    lyrics.style.display = 'grid';
      hideElements.value = true;
      requestAnimationFrame(() => { 
        document.getElementById('lyricsText'+id).style.paddingBottom = `calc(${document.getElementById('lyricsTitleContainer'+id).offsetHeight+20}px + var(--footerHeight))`;
      });  
  }else{
    lyrics.style.display = 'none';
    hideElements.value = false;
  }

}


</script>

<template>
  <div class="hero-image">
    <img :src="heroImage" alt="Sangbogbilledet"/>
    <h3>For klubben, for byen, for altid.</h3>
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
    <audio :id="'audioFile' + element.ID" :src="`/assets/songs/${element.ID}.mp3`" type="audio/mpeg" @timeupdate="updateProgress(element.ID)"   @ended="audioEnded(element.ID)"></audio>
    <div class="container" v-if="!hideElements">
      <h2 class="title">{{ element.title }}</h2>

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
          <div :class="'audioProgress progressBar'+element.ID" >
            <div class="circle"></div>
          </div>
        </div>
      </div>
      <button class="playButton" @click="changeAudioState(element.ID);showLyrics(element.ID);">
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon v-if="!element.playing" points="28,10 28,90 95,50" stroke="none" />
          <line v-if="element.playing" x1="32" y1="25" x2="32" y2="75"/>
          <line v-if="element.playing" x1="68" y1="25" x2="68" y2="75"/>
        </svg>
      </button>
    </div>



    <div :id="'lyrics' + element.ID" class="fullLyrics" style="display: none;"> 
      <button class="closeLyrics" @click="showLyrics(element.ID)">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 40 L50 70 L80 40"  />
        </svg> 
      </button>

      <p :id="'lyricsText' + element.ID" class="lyrics" v-html="element.lyrics"></p>
      
      <div :id="'lyricsTitleContainer' + element.ID" class="bottomLyrics">
    <div class="container" v-if="hideElements">
      <h2 class="title">{{ element.title }}</h2>

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
          <div :class="'audioProgress progressBar'+element.ID" >
            <div class="circle"></div>
          </div>
        </div>
      </div>
      <button class="playButton" @click="changeAudioState(element.ID)">
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon v-if="!element.playing" points="28,10 28,90 95,50" stroke="none" />
          <line v-if="element.playing" x1="32" y1="25" x2="32" y2="75"/>
          <line v-if="element.playing" x1="68" y1="25" x2="68" y2="75"/>
        </svg>
      </button>
    </div>
      </div>
    </div>
  </div>

</template>
<style scoped>
.background .fullLyrics{
  position:absolute;
  top: calc(var(--headerHeight));
  bottom: calc(var(--footerHeight) - 10px);
  left: 0;
  height: auto;
  width: 100%;
  background-color: var(--Blue);

  display: grid;
  grid-template-rows: min-content min-content;
  grid-template-columns: auto;
  grid-template-areas:
    "closeLyrics"
    "lyrics";
  gap: 0;
  padding-top: 15px;
  padding-bottom: 15px;
}
.background .fullLyrics .closeLyrics{
  grid-area: closeLyrics;
  margin: auto;
  width: 40px;
  height: 40px;
  background-color: white;
  border: none;
  border-radius: 35px;
  padding: 0;
  position: relative;
  margin-right: 10px;
}
.background .fullLyrics .closeLyrics svg{
    fill: none;
    stroke: var(--Blue);
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    stroke-width: 12;
    width: 100%;
    height: 100%; 

}
.background .fullLyrics .bottomLyrics{
  width: 100%;
  position: fixed;
  bottom: calc(var(--footerHeight) - 10px);
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.25);
}

.background .fullLyrics .lyrics{
  color: white;
  margin: auto 10%;
  text-align: center;
  font-size: 25px;
}
.background .fullLyrics .bottomLyrics .container{
  background-color: white;
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

  .background .audioProgressBG{
  width: 100%;
  height: 4px;
  background-color: lightgray;
  border-radius: 20px;
  }

  .background .audioProgress{
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
    margin: 30px auto;
    margin-top: 20px;
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
