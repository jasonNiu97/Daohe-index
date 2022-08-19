<template >
  <div class="card-container">
    <div class="card-left">
      <leftCard v-for="item in props.btnsData.left" :key="item" :cardTitle="item.hotName" :btn1Name="item.hotBtn1" :btn2Name="item.hotBtn2"/>
    </div>
    <div class="card-right">
      <rightCard v-for="item in props.btnsData.right" :key="item" :proName="item.proName" :proDesc="item.proDesc" :proLabels="item.proLabels" :proRedLabel="item.proRedLabel" :proBlueLabel="item.proBlueLabel"/>
    </div>
  </div>
</template>

<script setup>
import leftCard from './left-card.vue'
import rightCard from './right-card.vue'
import { defineProps } from 'vue'

const props = defineProps({
  btnsData: {
    type: Object,
    default: () => { return {} }
  }
})

</script>

<style lang="less" scoped>
.card-container {
    display: flex;
    width: 100%;
    min-width: 1200px;
    max-width: 1440px;
    background: transparent;

    .card-left {
      height: 200px;
      display: flex;
      width: 360px;
      margin-right: 20px;
      flex-direction: column;
      justify-content: space-between;

      &:first-child {
        margin-bottom: 30px;
      }
    }

    .card-right {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      align-content: flex-start;
      box-sizing: border-box;
    }
}
</style>
