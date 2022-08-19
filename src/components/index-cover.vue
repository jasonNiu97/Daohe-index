<template>
  <div class="index-cover">
    <!-- 上方区域 -->
    <innerTop url="https://vintex.gtja.com/cosweb/static/img/cover-logo.8a6f5fcd.png" subtitle="全类型客户全业务周期管理"/>
    <!-- 主体部分 -->
    <div class="inner-wrapper">
      <div class="inner">
        <!-- 上面的数字 -->
        <div class="box-wrapper">
          <div class="box-left">
            <div class="box-item" v-for="item in boxLeftItems" :key="item.id">
              <div class="box-item-title">
                <span class="strong">
                  <span> {{ item.orgServiceNum.split('+')[0] }} </span>
                  +
                </span>
                {{ item.orgServiceNum.split('+')[1] }}
              </div>
              <div class="box-item-subtitle"> {{ item.orgServiceName }} </div>
            </div>
          </div>
          <div class="box-right">
            <div class="box-item" v-for="item in boxRightItems" :key="item.id">
              <div class="box-item-title">
                <span class="strong">
                  <span> {{ item.orgServiceNum.split('+')[0] }} </span>
                  +
                </span>
                {{ item.orgServiceNum.split('+')[1] }}
              </div>
              <div class="box-item-subtitle"> {{ item.orgServiceName }} </div>
            </div>
          </div>
        </div>
        <!-- 下面的球体 -->
        <div class="ball-wrapper">
          <div class="ball-item" v-for="item in ballItems" :key="item.id">
            <el-popover placement="top" :width="400" style="background: linear-gradient(1turn,#608ab3,#0c68a2 68%,#2074c7) ">
              <!-- 球体 -->
              <template #reference>
                <div class="ball-item-wrapper">
                  <div class="ball-item-orgServiceName"> {{ item.orgServiceName }} </div>
                  <div class="ball-item-count">
                    <span class="span-wrapper">
                      <span> {{ item.orgServiceNum }} </span>
                    </span>
                  </div>
                </div>
              </template>
              <!-- 气泡展示页面 -->
              <template #default>
                <ballPopItem :labels="item.labels"/>
              </template>
            </el-popover>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import innerTop from './inner-top-item.vue'
import ballPopItem from './ball-pop-item.vue'
import { coverListAPI } from '@/api/coverListAPI'

const ballItems = ref([])
const boxLeftItems = ref([])
const boxRightItems = ref([])
const queryCoverList = async () => {
  const { data: res } = await coverListAPI()
  ballItems.value = res.data.filter(value => {
    return value.indexSort < 9
  })
  boxLeftItems.value = res.data.filter(value => {
    return value.indexSort > 9 && value.indexSort < 17
  })
  boxRightItems.value = res.data.filter(value => {
    return value.indexSort >= 17
  })
}
queryCoverList()

</script>

<style lang="less" scoped>

.index-cover {
    padding: 28px 0 0;
    height: 880px;
    background: radial-gradient(closest-side at 50% 40%,#3f4b5f,#1e212a 80%);
}

/deep/ .inner-top {
  background: transparent;
  .logo {
    background-position: 50%;
  }

  .subtitle {
    color: #ffffff;
  }
}

.inner-wrapper {
  display: flex;
  width: 100%;
  height: auto;
  max-width: 1440px;
  margin: 0 auto;
  justify-content: center;
  .inner {
    position: relative;
    width: 100%;
    height: 560px;
    margin-top: 20px;
    background: transparent url(https://vintex.gtja.com/cosweb/static/img/cover-inner-bg.9e4d311b.png) top/auto 100% no-repeat;

    .box-wrapper {
      display: flex;
      margin-top: -20px;
      justify-content: space-between;
      .box-left, .box-right {
        display: flex;
        max-width: 440px;
        flex-wrap: wrap;

        .box-item {
          box-sizing: border-box;
          display: flex;
          width: 50%;
          padding-right: 10px;
          margin-bottom: 24px;
          flex-direction: column;
          .box-item-title {
            font-size: 14px;
            color: #fff;
            .strong {
              display: inline-flex;
              font-size: 28px;
              font-weight: 700;
              color: #fff;
            }
          }
          .box-item-subtitle {
            padding-top: 5px;
            font-size: 14px;
            color: #fff;
          }
        }
      }
    }

    .ball-wrapper {
      transform: translateX(-50%);
      overflow: initial;
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 0;
      height: 100%;
      .ball-item {
        position: absolute;
        bottom: 0;
        height: 254px;
        background: transparent url(https://vintex.gtja.com/cosweb/static/img/home_cover.445c3802.png) no-repeat;
        background-size: contain;
        cursor: pointer;

        &:hover {
          background: transparent url(https://vintex.gtja.com/cosweb/static/img/home_cover_active.0af41972.png) no-repeat;
          background-size: 100% auto;
        }

        &:first-child {
          left: -684px;
          bottom: 64px;
        }

        &:nth-child(2) {
          left: -538px;
          bottom: -56px;
        }

        &:nth-child(3) {
          left: -372px;
          bottom: -146px;
        }

        &:nth-child(4) {
          left: -186px;
          bottom: -196px;
        }

        &:nth-child(5) {
          left: 10px;
          bottom: -196px;
        }

        &:nth-child(6) {
          left: 196px;
          bottom: -146px;
        }

        &:nth-child(7) {
          left: 362px;
          bottom: -56px;
        }

        &:nth-child(8) {
          left: 508px;
          bottom: 64px;
        }

        .ball-item-wrapper {
          display: flex;
          width: 176px;
          height: 176px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .ball-item-orgServiceName {
            font-size: 16px;
            text-align: center;
            word-break: break-all;
            color: #fff;
          }
          .ball-item-count {
            display: flex;
            margin-top: 8px;
            font-size: 16px;
            color: #fff;
            align-items: center;
            .span-wrapper {
              display: inline-flex;
              font-size: 28px;
              color: #fff;
            }
          }

        }
      }
    }
  }
}

.el-popover .el-popper {
  background: linear-gradient(1turn,#608ab3,#0c68a2 68%,#2074c7) !important;
  border: none !important;
}

</style>
