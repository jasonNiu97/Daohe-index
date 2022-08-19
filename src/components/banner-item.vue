<template>
 <div class="banner">
    <!-- 轮播图 -->
    <el-carousel height="675px" trigger="click" arrow="never">
      <el-carousel-item v-for="item in bannerItems" :key="item.bannerId">
        <el-image style="width: 100vw; height: 100%; min-width:1200px; max-width:1920px; cursor: pointer;" :src="item.bannerPictureUrl" fit="fill" @click="goTo(item.jumpLink)" />
      </el-carousel-item>
    </el-carousel>
    <!-- 标签链接 -->
    <div class="hovers-wrapper">
      <div class="hovers">
        <!-- 单项 -->
        <div class="hover-items" v-for="item in hoverItem" :key="item.id">
          <!-- 图片 -->
          <div class="hover-img" :style="{ 'background-image': 'url(' + item.img + ')'}"></div>
          <!-- 文字 -->
          <div class="hover-main">
            <div class="hover-title"> {{ item.sysName }} </div>
            <div class="hover-subtitle"> {{ item.sysDesc }} </div>
            <!-- 离开时隐藏 -->
            <div class="tabs">了解详情 -> </div>
          </div>
        </div>
      </div>
    </div>
 </div>

</template>

<script setup>
import { ref } from 'vue'
import { listAPI } from '@/api/listAPI'
import { bannerBigHomePageAPI } from '@/api/bannerbigHomePageAPI'

// 获取轮播图图片
const bannerItems = ref([])
const queryBannerItems = async () => {
  const { data: res } = await bannerBigHomePageAPI()
  bannerItems.value = res.data
}
queryBannerItems()

// 跳转到新页面
const goTo = url => {
  window.open(url)
}

// 获取下方导航栏内容
const hoverItem = ref([])
const hoverImg = ['https://vintex.gtja.com/cosweb/static/img/ic_bt_55.7553cbb9.png', 'https://vintex.gtja.com/cosweb/static/img/ic_bt_66.4ee85a14.png', 'https://vintex.gtja.com/cosweb/static/img/ic_bt_11.c683eda0.png', 'https://vintex.gtja.com/cosweb/static/img/ic_bt_22.42abf174.png']
const queryHoverItem = async () => {
  const { data: res } = await listAPI()
  hoverItem.value = res.data
  hoverItem.value.forEach((item, index) => {
    item.img = hoverImg[index]
  })
}
queryHoverItem()

</script>

<style lang="less" scoped>

.banner {
  position: relative;
  .el-carousel {
    width: 100vw;
    .el-carousel-item {
      width: 100vw;
      height: 100%;
      .img {
        width: 100vw;
        height: 675px;
      }
    }
    /deep/ .el-carousel__indicators {
      bottom: 120px;
    }
  }
  .hovers-wrapper {
    height: 110px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(34,39,88,.8);
    z-index: 2;
    .hovers {
      max-width: 1440px;
      height: 100%;
      margin: 0 auto;
      display: flex;

      .hover-items {
        flex: 1;
        align-items: center;
        display: flex;
        cursor: pointer;
        .hover-img {
          align-items: center;
          width: 92px;
          height: 92px;
          background-size: 100%;
          background-position: 0 0;
          background-repeat: no-repeat;
        }

        .hover-main {
          color: #ffffff;

          .hover-title {
            font-size: 18px;
            margin-bottom: 8px;
            font-weight: 700;
          }
          .hover-subtitle {
            font-size: 14px;
          }

          .tabs {
            display: none;
            margin-top: 10px;
            font-size: 14px;
          }

        }

        &:hover .hover-main .tabs {
          display: block;
        }
      }
    }
  }
}

</style>
