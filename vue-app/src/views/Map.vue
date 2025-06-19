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
        startRotate('arrowleft', -5); // rotate left by 5 degrees per tick
        break;
      case 'arrowright':
        startRotate('arrowright', 5);  // rotate right by 5 degrees per tick
        break;
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
</template>

<style scoped>
#map {
  --positionDotSize: 16px;
  position: relative;
  padding: 0 calc(var(--positionDotSize) / 2);
  width: calc(100% - var(--positionDotSize));
  height: 300px;
  overflow: hidden;
  background-image: url('/assets/images/stadion.webp');
  background-size: contain;
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


</style>
