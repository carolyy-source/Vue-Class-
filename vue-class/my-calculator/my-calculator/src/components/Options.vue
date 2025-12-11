<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    plus() {
      this.count++
    },
    minus() {
      this.count--
    },
  },
  computed: {
    doubleCount() {
      return this.count * 2 // 或其他你想計算的值
    },
  },
}
</script>

<template>
  <h3>這是選項式</h3>
  <p>count: {{ count }}</p>
  <button type="button" @click="minus">-</button>
  <button type="button" @click="plus">+</button>
</template>

<style>
h3 {
  font-size: 40px;
}
p {
  font-size: 20px;
}
</style>
