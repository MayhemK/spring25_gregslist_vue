<script setup>
import { House } from '@/models/Houses.js';

defineProps({
  houseProp: { type: House, required: true }
})
</script>


<template>
  <div>
    <p>{{ houseProp.price }}</p>
  </div>
</template>


<style lang="scss" scoped></style>