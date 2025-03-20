<script setup>
import { House } from '@/models/Houses.js';

defineProps({
  houseProp: { type: House, required: true }
})
</script>


<template>
  <div class="row shadow-lg mb-4 car-border">
    <div class="col-md-5 px-0 ">
      <img :src="houseProp.imgUrl" alt="">
    </div>
    <div class="col-7">
      <div>
        <div>
          <p class="fs-3 fw-bold"><span>$</span>{{ houseProp.price }}</p>
          <p class="fs-4">{{ houseProp.bedrooms }} bedroom(s) </p>
          <p class="fs-4">{{ houseProp.bathrooms }} bathroom(s) </p>
          <p class="fs-4">{{ houseProp.levels }} level(s) </p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  height: 45dvh;
  width: 100%;
  object-fit: cover;
}

.house-border {
  border-style: solid;

}
</style>