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
      <img src="../src/assets/icons/OBLogo.svg" alt="">
    </div>
  <header ref="headerRef"><h1>{{ route.name }}</h1></header>
  <main ref="mainRef">
    <router-view />
  </main>
  <footer ref="footerRef">
    <router-link to="/">Forside</router-link> |
    <router-link to="/billetter">Billetter</router-link>|
    <router-link to="/Menu">Menu</router-link>
  </footer>
</template>


<style scoped>
header,footer{
  display: block;
  position: fixed;
  width: calc(100% - 40px);
  left: 0;
  padding: 20px;
  background-color: var(--Blue);
  z-index: 100;
}
header{
  top: 0;
}
header h1 {
  margin: 0;
}
footer{
  bottom: 0;
}
footer a{
  color: white;
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

</style>
