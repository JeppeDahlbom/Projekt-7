<script setup>
import heroImage from '/assets/images/heroImageFan.png'
</script>
<template>
<div class="hero-image">
    <img :src="heroImage" alt="Fanbillede"  />
  </div>
  <h2 class="titleMark">BLIV MÅNEDENS FAN</h2>
  <button class="upload-button">
  <svg class="upload-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20">
    <path d="M3.5 8 L12 0 L20.5 8 H15.5 V14 H8.5 V8 Z" stroke-width="0.2" stroke="none"/>
    <path d="M1 19 H23" stroke-width="2"/>
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
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 30px auto;
  grid-template-areas:
    "icon text";
  gap: 0;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  padding: 20px 10px;
}
.upload-button h2{
  grid-area: text;
  font-size: inherit;
  margin: auto;
  width: fit-content;
  color: black;
}
.upload-icon {
  grid-area: icon;
  width: 100%;
  height: auto;
  fill: var(--Blue);
  stroke: var(--Blue);
  margin: auto;
}
</style>