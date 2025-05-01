<script setup>
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
</script>
<template>
    <div class="sound-button" @click="toggleListening()">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
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
}

.bar {
  width: 6px;
  height: 20px;
  background-color: white;
  border-radius: 3px;
  transition: height 0.1s ease-in-out;
}
    </style>
