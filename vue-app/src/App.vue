<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const headerRef = ref(null)
const footerRef = ref(null)




onMounted(async () => {



  // Håndtér video animation
  const animationEl = document.getElementById('animationWrapper');
  const video = animationEl?.querySelector('video');

  if (video) {
    video.addEventListener('canplaythrough', () => {
      video.play().catch(() => {});
      const fadeOutDelay = video.duration * 0.7 * 1000;
      const hideDelay = (video.duration - 0.01) * 1000;

      // Start fade-out 
      setTimeout(() => {
        animationEl.classList.add('fade-out');
      }, fadeOutDelay);

      // Fjern videoen helt lidt før slut
      setTimeout(() => {
        animationEl.style.display = 'none';
      }, hideDelay);
    })

    // Fallback hvis canplaythrough ikke trigges
    setTimeout(() => {
      animationEl.classList.add('fade-out');
      setTimeout(() => {
        animationEl.style.display = 'none';
      }, 500);
    }, 4000);
  }








  setTimeout(() => {
    updateMargins()
  }, 2000);

  router.afterEach(async () => {
    await nextTick()
    updateMargins();
  });
});

const updateMargins = () => {
  document.documentElement.style.setProperty('--headerHeight', `${headerRef.value.offsetHeight-1}px`);
  document.documentElement.style.setProperty('--footerHeight', `${footerRef.value.offsetHeight+11}px`);
}

</script>

<template>
  <div id="animationWrapper" class="animation">
    <video src="/assets/video/loadingVideo.mp4" autoplay muted playsinline preload="auto"></video>    
  </div>

  <header ref="headerRef">
    <router-link class="logo" to="/"><img src="/assets/icons/OBLogo.svg" alt=""></router-link>
    <button class="settings"><img src="/assets/icons/Settings.svg" alt=""></button>
    <h1 class="pageName">{{ route.name }}</h1>
  </header>

  <main>
    <router-view />
  </main>

  <footer ref="footerRef">
    <router-link to="/"><img src="/assets/icons/OBLogoTransparent.svg" alt=""><h3>Hjem</h3></router-link>
    <router-link to="/season"><img src="/assets/icons/Season.svg" alt=""><h3>Sæson</h3></router-link>
    <router-link to="/billetter"><img src="/assets/icons/Ticket.svg" alt=""><h3>Billet</h3></router-link>
    <router-link to="/Sange"><img src="/assets/icons/Songs.svg" alt=""><h3>Sange</h3></router-link>
    <router-link style="display: none;" to="/MaanedensFan"><img src="/assets/icons/Songs.svg" alt=""><h3>Månedens fan</h3></router-link>
    <router-link style="display: none;" to="/Menu"><img src="/assets/icons/Menu.svg" alt=""><h3>Menu</h3></router-link>
  </footer>
</template>


<style>
:root{
  --headerHeight: 0px;
  --footerHeight: 0px;
}
main{
  margin-top: var(--headerHeight);
  margin-bottom: var(--footerHeight);
}
header,footer{
  display: block;
  position: fixed;
  width: calc(100% - 20px);
  left: 0;
  padding: 10px;
  background-color: var(--Blue);
  z-index: 100;
}
header{
  top: 0;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
}
header h1 {
  margin: 0;
}
header{
  display: grid;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100% auto;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
      "logo . settings"
      "pageName pageName pageName";
}
header *{
  width: 100%;
}

header .logo{
  grid-area: logo;
}
header .logo img{
  display: block;
}

header .settings{
  grid-area: settings;
  background: none;
  border: none;
  padding: 0;
  width: 70%;
  margin: auto;
}
header .settings img{
  display: block;
}

header .pageName{
  grid-area: pageName;
  text-transform: uppercase;
  padding-top: 10px;
}

.animation {
  display: block;
  position: fixed;
  width: 100%;
  height: auto;
  min-height: 100%;
  z-index: 999;
  opacity: 1;
  left: 0;
  top: 0;
  background-color: var(--Blue);
  transition: opacity 0.8s ease;
}
.animation video{
  width: 100%;
  height: 100%;
}
.animation.fade-out {
  opacity: 0;
}

@keyframes popIn {
  70% {
    opacity: 1;
  }
  
  99% {
    opacity: 0;
  }

  99.9%{
    opacity: 0;
    height: 100%;
  }
  100% {
    opacity: 0;
    height: 0%;
  }
}

footer{
  bottom: 0;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 15px;
}
footer a{
  text-transform: uppercase;
  color: var(--Blue);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}
footer a img{
  margin-bottom: 3px;
  width: 25px;
  height: 25px;
}
footer a h3, footer a h2{
  font-size: 13px;
  color: var(--Blue);
}
</style>
