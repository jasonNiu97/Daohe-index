<template>
  <!-- 头部 -->
  <div class="app-header-container"  ref="header" >
    <AppHeader />
  </div>
  <!-- 轮播图 -->
  <div class="banner-container">
    <BannerItem />
  </div>
  <!-- main -->
  <div class="main-container">
    <IndexBusiness />
    <IndexCover />
    <IndexScene/>
    <IndexDaohe/>
  </div>
  <!-- 尾部 -->
  <div class="footer-container">
    <FooterItem />
  </div>
  <!-- 浏览足迹 -->
  <div class="show-history">
    <div class="title">浏览</div>
    <div class="title">足迹</div>
  </div>
  <!-- 联系我们 -->
  <div class="fix-box">
    <div class="fix-item contact">联系我们</div>
  </div>

</template>

<script lang="ts" setup>
// 导入组件
import AppHeader from '@/components/app-header.vue'
import BannerItem from '@/components/banner-item.vue'
import IndexBusiness from '../components/index-business.vue'
import IndexCover from '../components/index-cover.vue'
import IndexScene from '../components/index-scene.vue'
import IndexDaohe from '../components/index-daohe.vue'

import { onMounted, ref } from 'vue'
import FooterItem from '../components/footer-item.vue'
// 控制header是否显示
// 创建一个控制header是否显示的响应式变量
const headerDisplay = ref('block')
// 页面发生滚动时，实时获取滚动的垂直距离
const handleScroll = () => {
  const scrollTop = window.pageYOffset
  // console.log(window.pageYOffset)
  // 滚动超过90px后，将header隐藏
  if (scrollTop > 90) {
    headerDisplay.value = 'none'
  } else {
    headerDisplay.value = 'block'
  }
}

onMounted(() => {
  // 给window添加事件，监听页面滚动
  window.addEventListener('scroll', handleScroll, true)
})

</script>

<style scoped lang="less">
.app-header-container {
  width: 100%;
  position: fixed;
  display: v-bind(headerDisplay);
  top: 0;
  z-index: 999;
}

.question-btn-box, .show-history {
    transform: translateY(-50%);
    display: flex;
    position: fixed;
    z-index: 5;
    top: 50%;
    right: 16px;
    width: 60px;
    height: 60px;
    background-color: #2b86dd;
    border-radius: 5px;
    box-shadow: 0 0 6px rgb(0 0 0 / 12%);
    cursor: pointer;
    font-size: 16px;
    color: #fff;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.show-history {
  box-sizing: border-box;
  top: 40%;
  color: #2468f2;
  background: linear-gradient(180deg,#f3f5f8,#fffefe);
  border: 1px solid #fff;
  box-sizing: border-box;
  box-shadow: 0 3px 6px rgb(0 0 0 / 10%);
}

.fix-box {
  box-sizing: border-box;
  position: fixed;
  z-index: 5;
  right: 16px;
  bottom: 15px;
  .contact {
    box-sizing: border-box;
    width: 60px;
    height: 140px;
    padding: 50px 22px 16px;
    background: #2b86dd center 19px no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAilBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2N2iNAAAALXRSTlMAd+Lby/tHjBsR9DcoDQZYNeq6kyLv08Cil4R/aPjBnW9qZmBNwrSwclA/MR1+VMTXAAAAx0lEQVQoz43O147DIBCF4cOG2RiMwb2lly0pvP/rxYRIcSIs5bsZxH8xA+DIxnYKDznNxjIyuDvSBS+KLz+Zm2PfNpkK4oPw36go72E20VvI7GJpSQ/jLZg2Epsd2I9yYbs/qOCOqpJkJs5teTi434NM8GIp/WaR1fMToNnc62ThA8p2eKb1ytbcaZj2YcCLBeVnm+LhGUhuUYYCVwgGowHoVX+NnAQQZb4enUn2Tu7R2SrGk0hjp6ffP64REM9sg6CkW2OCAm5pYA7M3TkPIQAAAABJRU5ErkJggg==);
    border-radius: 3px;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 10%);
    font-size: 16px;
    line-height: 18px;
    font-weight: 500;
    color: #fff;
  }
  .fix-item {
    box-sizing: border-box;
    transition: all .3s;
    margin-bottom: 16px;
    cursor: pointer;
    font-family: PingFangSC-Regular,PingFang SC;
  }
}
</style>
