<script setup>
import heroImage from '/assets/images/heroImageFan.png'
</script>
<template>
<div class="hero-image">
    <img :src="heroImage" alt="Fanbillede"  />
  </div>
  <h2 class="titleMark">UPLOAD DIT FAN ØJEBLIK</h2>

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
</style>