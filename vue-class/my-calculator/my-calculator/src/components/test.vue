<script setup>
import { ref, reactive } from 'vue'

// 1. 定義角色狀態 (用 reactive 因為是物件)
let hero = reactive({
  name: '蒼藍星',
  hp: 100,
  level: 1,
})

// 2. 定義一個計時器 (用 ref 因為是單一數字)
const timer = ref(0)

// --- 功能函數 ---

// [Bug 1] 受傷功能
// console 有印出 90，但畫面沒變？->修正
const takeDamage = () => {
  hero.hp -= 10
  console.log('目前血量:', hero.hp)
}

// [Bug 2] 升級功能
const levelUp = () => {
  // 這裡試圖用 .value，程式直接報錯，為什麼？->修正去除.value
  hero.level++
  console.log('升級了！')
}

// [Bug 3] 重置功能
const resetHero = () => {
  //  console 有印，但畫面上的數值完全沒變回去？->修正:直接回復原物件的屬性
  hero.name = '蒼藍星'
  hero.hp = 100
  hero.level = 1
  console.log('角色已重置')
}
</script>

<template>
  <h3>角色</h3>
  <p>name: {{ hero.name }}</p>
  <p>hp: {{ hero.hp }}</p>
  <p>level: {{ hero.level }}</p>

  <button type="button" @click="takeDamage">受傷</button>
  <button type="button" @click="levelUp">升級</button>
  <button type="button" @click="resetHero">重置</button>
</template>
