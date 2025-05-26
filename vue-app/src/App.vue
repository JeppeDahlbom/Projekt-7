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
    <button class="settings">
      <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 110 110">
        <path  d="M19.286,87.457q-.034-1.1-.034-2.205A72.536,72.536,0,0,1,20.4,72.14a55.743,55.743,0,0,1,3.322-11.378,41.081,41.081,0,0,1,5.3-9.25A30.732,30.732,0,0,1,36.1,44.78a25.009,25.009,0,0,0,28.883-.763,29.805,29.805,0,0,1,7.562,6.611A39.892,39.892,0,0,1,78.214,60a54.854,54.854,0,0,1,3.566,11.687,72.227,72.227,0,0,1,1.237,13.568c0,.1,0,.2,0,.3a50.006,50.006,0,0,1-63.73,1.906Z" transform="translate(5 11)"/>
        <g transform="translate(5 5)" fill="none"  stroke-width="6">
          <circle cx="50" cy="50" r="50" stroke="none"/>
          <circle cx="50" cy="50" r="52.5" fill="none"/>
        </g>
        <circle cx="20" cy="20" r="20" transform="translate(35 15)"/>
      </svg>
    </button>
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
  height: calc(100vh - var(--headerHeight) - var(--footerHeight));
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
    grid-template-columns: 1fr 4fr 0.9fr;
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
header svg{
  fill: #ffffff;
  stroke: #ffffff;
  height: auto;
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
