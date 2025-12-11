<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(0)
const badCount = ref(0)

const plus = () => {
  count.value++
  badCount.value++
  console.log(badCount.value)
}

const minus = () => {
  count.value--
}

const doubleCount = computed(() => count.value * 2)
</script>

<template>
  <h3>這是組合式</h3>
  <p>count: {{ count }}</p>
  <p>badCount: {{ badCount }}</p>
  <p>doubleCount: {{ doubleCount }}</p>

  <button type="button" @click="minus">-</button>
  <button type="button" @click="plus">+</button>
</template>

<style scoped>
.counter-app {
  max-width: 300px;
  margin: 30px auto;
  text-align: center;
}
h3 {
  font-size: 40px;
}
p {
  font-family: 20px;
}
</style>
