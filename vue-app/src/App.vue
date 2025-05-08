<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const headerRef = ref(null)
const footerRef = ref(null)

const mainRef = ref(null)



onMounted(async () => {
  setTimeout(() => {
    updateMargins()
  }, 100);

  router.afterEach(async () => {
    await nextTick()
    updateMargins();
  });
});

const updateMargins = () => {
  mainRef.value.style.marginTop = `${headerRef.value.offsetHeight}px`;
  mainRef.value.style.marginBottom = `${footerRef.value.offsetHeight}px`;
}

</script>

<template>
    <div class="animation">
      <video src="/assets/video/loadingVideo.mp4" autoplay muted playbackRate="0.8" preload="auto"></video>
    </div>
  <header ref="headerRef"><h1>{{ route.name }}</h1></header>
  <main ref="mainRef">
    <router-view />
  </main>
  <footer ref="footerRef">
    <router-link to="/"><img src="/assets/icons/OBLogoTransparent.svg" alt=""><h3>Hjem</h3></router-link>
    <router-link to="/season"><img src="/assets/icons/Season.svg" alt=""><h3>Sæson</h3></router-link>
    <router-link to="/billetter"><img src="/assets/icons/Ticket.svg" alt=""><h3>Billet</h3></router-link>
    <router-link to="/Sange"><img src="/assets/icons/Songs.svg" alt=""><h3>Sange</h3></router-link>
    <router-link to="/Menu"><img src="/assets/icons/Menu.svg" alt=""><h3>Menu</h3></router-link>
  </footer>
</template>


<style scoped>
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
}
header h1 {
  margin: 0;
}



.animation {
  display: block;
  animation: popIn 3.6s forwards;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  opacity: 1;
  left: 0;
  top: 0;
  background-color: var(--Blue);

}
.animation video{
  width: 100%;
  height: 100%;
}

@keyframes popIn {
  70% {
    opacity: 100%;
  }
  
  99% {
    opacity: 0%;
  }

  99.9%{
    opacity: 0%;
    height: 100%;
  }
  100% {
    opacity: 0%;
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
