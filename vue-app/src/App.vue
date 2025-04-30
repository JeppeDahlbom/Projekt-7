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
</style>
