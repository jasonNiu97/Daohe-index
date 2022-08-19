<template >
  <div class="left-card-container">
    <!-- 卡片标题 -->
    <div class="card-title">
      {{ props.cardTitle }}
    </div>
    <!-- 副标题 -->
    <div class="subtitle"></div>
    <!-- 按钮 -->
    <div class="btns">
      <button class="btn active" ref="btn1"> {{ props.btn1Name }} </button>
      <button class="btn" @mouseover="beActive" @mouseleave="notActive" ref="btn2"> {{ props.btn2Name }} </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  cardTitle: String,
  subTitle: String,
  btn1Name: String,
  btn2Name: String
})

// 按钮 active 状态改变
const btn1 = ref()
const btn2 = ref()
const beActive = () => {
  btn2.value.className = 'btn active'
  btn1.value.className = 'btn'
}
const notActive = () => {
  btn1.value.className = 'btn active'
  btn2.value.className = 'btn'
}

</script>

<style lang="less" scoped>
.left-card-container {
    display: flex;
    height: 180px;
    padding: 24px;
    background: transparent url(https://vintex.gtja.com/cosweb/static/img/home_service.521324ae.png) no-repeat;
    background-size: 100% 100%;
    border-radius: 4px;
    flex-direction: column;
    margin-bottom: 30px;

    &:hover {
      background: transparent url(https://vintex.gtja.com/cosweb/static/img/home_service_active.7b21643a.png) no-repeat;
      background-size: 100% 100%;
    }

    .card-title {
      margin-bottom: 12px;
      font-size: 18px;
      line-height: 28px;
      font-weight: 700;
      color: #333;
    }
    .subtitle{
      height: 20px;
      font-size: 14px;
      line-height: 20px;
      color: #666;
    }

    .btns {
      display: flex;
      margin-top: auto;

      .btn {
        transition: all .3s;
        width: 145px;
        height: 40px;
        background: linear-gradient(136deg,#f4f6fa,#fff);
        border-radius: 2px;
        border: 0px;
        box-shadow: 4px 5px 9px 0 rgb(82 87 99 / 32%), 0 3px 6px 0 rgb(0 0 0 / 10%);
        cursor: pointer;
        font-size: 16px;
        line-height: 40px;
        text-align: center;
        color: #666;
        text-shadow: 4px 5px 9px rgb(82 87 99 / 32%);
        margin-top: 32px;

        &:first-child {
          margin-right: 12px;
        }
      }

      .active {
          background: #1c1f44;
          box-shadow: 4px 5px 9px 0 rgb(82 87 99 / 32%), 0 3px 6px 0 rgb(0 0 0 / 10%);
          color: #fff;
      }
    }
}
</style>
