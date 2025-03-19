<script setup>
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';

onMounted(() => {
  getHouses()
})


async function getHouses() {
  try {
    await housesService.getHouses()
  }
  catch (error) {
    Pop.error(error);
    logger.error('could not houses', error)
  }
}
</script>


<template>
  <h1>Houses page!</h1>
</template>


<style lang="scss" scoped></style>