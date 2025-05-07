<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const headerRef = ref(null)
const footerRef = ref(null)

const mainRef = ref(null)



onMounted(() => {
  router.afterEach(async () => {
    await nextTick() // Vent på at DOM og route.name er opdateret
      mainRef.value.style.paddingTop = `${headerRef.value.offsetHeight + 10}px`;
      mainRef.value.style.paddingBottom = `${footerRef.value.offsetHeight + 10}px`;

  })
});
</script>

<template>
    <div class="animation">
      <img src="/assets/icons/OBLogo.svg" alt="">
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
  animation: popIn 1s steps(1, end) forwards;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  opacity: 1;
  overflow: hidden;
  left: 0;
  top: 0;
  background-color: var(--Blue);

}
.animation img{
  width: 100%;
}

@keyframes popIn {

  100% {
    height: 0%;
  }
}

footer{
  bottom: 0;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
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
