<template>
  <div class="popover-wrapper">
    <div class="pop-item-wrapper" v-for="item in props.labels" :key="item">
      <div class="item-left">
        <div class="left"> {{ item.label }} </div>
      </div>
      <div class="item-right">{{ item.value }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  labels: Array
}
)

</script>

<style lang="less" scoped>
.popover-wrapper {
  box-sizing: border-box;
  width: 400px;
  .pop-item-wrapper {
    display: flex;
    .item-left {
      width: 70px;
      height: 24px;
      margin-right: 12px;
      margin-bottom: 8px;
      background: #194574;
      border-radius: 3px;
      box-shadow: 0 3px 6px 0 rgb(0 0 0 / 10%);
      font-size: 14px;
      line-height: 24px;
      white-space: nowrap;
      color: #fff;
      .left {
        width: 70px;
        text-align: center;
      }
    }
    .item-right {
      font-size: 14px;
      line-height: 24px;
      color: hsla(0,0%,100%,.9);
    }
  }
}

</style>
