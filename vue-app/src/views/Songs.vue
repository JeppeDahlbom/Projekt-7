<script setup>
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




const songsDummy = [
  {
    title: "Store stolte Odense",
    duration: 120.0,
    lyrics: "Stolte Odense, Store stolte Odense, <br>Vi slås for din ære,<br> <br>Vi kæmper for dit na-a-avn <br> ",
    ID: 1
  },
  {
    title: "Fyn er fin",
    duration: 130.0,
    lyrics: "Fyn er fin og fyldt med mod,<br>Vi kæmper med passion og blod<br>",
    ID: 2
  },
  {
    title: "Vi står sammen",
    duration: 105.0,
    lyrics: "Vi står sammen, vi står stærkt,<br>Odense kæmper – altid ærligt<br>",
    ID: 3
  },
  {
    title: "Hjemmebanehelte",
    duration: 90.0,
    lyrics: "Hjemmebanehelte, vores OB,<br>Vi synger højt, vi gir' aldrig op<br>",
    ID: 4
  },
  {
    title: "Blå og hvid",
    duration: 100.0,
    lyrics: "Blå og hvid i hjertet bor,<br>OB vi elsker dig – i med- og modvind stor<br>",
    ID: 5
  }
];



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
                    <h3 class="titel">{{ element.title }}</h3>
                    <h3 class="duration">{{ element.duration }}</h3> 
                    <h3 class="lyrics">{{ element.lyrics }}</h3>
  

            </div>
          
            
        </div>

</template>
    <style scoped>
        .sound-button {
  background-color: #1449ff;
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
  
  
    </style>
