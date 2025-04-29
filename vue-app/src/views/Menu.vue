<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const menuItems = router.getRoutes().map(route => ({
  path: route.path,
  title: route.name
}))
</script>

<template>
  <div>
    <h2>Menu overpunkt</h2>
    <ul class="menu-list">
      <li v-for="item in menuItems" v-bind:key="item.path" class="menu-item">
        <p><router-link v-bind:to="item.path" class="menu-link">{{ item.title }}</router-link></p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  padding-bottom: 20px;
  text-transform: uppercase;
}


.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  padding: 0px 0 0px 20px; /* <-- Indrykning */
  margin-left: 20px;
}
.menu-item p{
    margin: 10px 0px;
}
/* Laver streg mellem LI'erne */
.menu-list li:not(:first-child) { 
  border-top: 2px solid #7a7a7a;
}

/* Fjerner standard link-farver */
.menu-link {
  color: inherit;
  text-decoration: none;
  display: inline-block;
  width: 100%;
}
.menu-link:hover {
  color: #000; /* gør teksten lidt mørkere ved hover */
  background-color: #f0f0f0; /* let grå baggrund */
  border-radius: 4px;
  padding: 4px 8px;
  transition: all 0.2s ease;
}

</style>
