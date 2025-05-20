<script setup>
import heroImage from '/assets/images/heroImageFan.png'
</script>
<template>
<div class="hero-image">
    <img :src="heroImage" alt="Fanbillede"  />
  </div>
  <h2 class="titleMark">BLIV MÅNEDENS FAN</h2>
  <button class="upload-button">
  <svg class="upload-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M5 17h14v2H5v-2zm7-12l5 5h-3v4h-4v-4H7l5-5z"/>
  </svg>
    <h2>UPLOAD DIT FAN ØJEBLIK HER</h2>
  </button>
<h3>Del dine bedste OB-øjeblikke med os. Hver måned udvælges én fan som 'Månedens Fan' og fremhæves i appen som en hyldest til deres engagement.</h3>


</template>
<style scoped>
.hero-image{
  width: calc(100% + 16px);
  margin: 0px -8px;
  margin-bottom: 15px;
  border-radius: 0px 0px 5px 5px;
  overflow: hidden;

}

  .hero-image img{
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
 
}
h3 {
    color: black;
    font-size: 15px;
    padding-top: 15px;
}
.upload-button {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.upload-icon {
  width: 40px;
  height: 40px;
  fill: var(--Blue);
}
</style>