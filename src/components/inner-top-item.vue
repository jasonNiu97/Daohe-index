<template>
  <div class="inner-top">
    <div class="logo" :style="{ 'background-image': 'url(' + props.url + ')'}"></div>
    <div class="subtitle"> {{ props.subtitle }} </div>
  </div>
</template>

<script setup>

// 声明props
const props = defineProps({
  url: {
    type: String
  },
  subtitle: {
    type: String
  }
})

</script>

<style lang="less" scoped>

  .inner-top {
    background: #fff;
    .logo {
      height: 69px;
      background: no-repeat transparent;
      background-position: top;
    }

    .subtitle {
      margin-top: 8px;
      font-size: 16px;
      text-align: center;
      letter-spacing: 10px;
      color: #6a6a6a;
    }
  }

</style>
