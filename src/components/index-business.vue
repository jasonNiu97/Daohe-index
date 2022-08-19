<template>
  <div class="business">
    <!-- 上方区域 -->
    <innerTop url="https://vintex.gtja.com/cosweb/static/img/zhjr-top.d119ed4a.png" subtitle="一站式机构服务平台"/>
    <!-- 下方标签页 -->
    <div class="tabs-container">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick"  >
        <!-- 研究 -->
        <el-tab-pane :name="item.id.moduleNameEn" v-for="item in tabsItems" :key="item.id.id">
          <!-- 通过具名插槽来实现标签页的内容 -->
          <template #label>
            <div class="label">
              <div class="label-wrapper">
                <!-- 图标 -->
                <div class="custom-tabs-label-img" :style="{ 'background-image': item.id.icon }" >
                </div>
                <!-- 名称 -->
                <div class="custom-tabs-label-text" > {{ item.id.moduleName }}
                </div>
              </div>
            </div>
          </template>
          <!-- 内容部分 -->
          <div class="card-wrapper">
            <cardContainer :btnsData="item.btns" />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import innerTop from './inner-top-item.vue'
import cardContainer from './cards-container.vue'
import { ref } from 'vue'
import { moduleListAPI } from '../api/moduleListAPI'

// 处理点击事件
const activeName = ref('research')

// 初始化标签页图标
const tabsIcons = ref(['https://vintex.gtja.com/cosweb/static/img/activ1.7dbee543.png', 'https://vintex.gtja.com/cosweb/static/img/activ2.ef272df7.png', 'https://vintex.gtja.com/cosweb/static/img/activ3.18c37cb6.png', 'https://vintex.gtja.com/cosweb/static/img/activ4.129e56d1.png', 'https://vintex.gtja.com/cosweb/static/img/activ5.4bb1c175.png'])

// 初始化标签页内容
const tabsItems = ref([])
// 初始化tab标签内容
const moduleItems = ref([])
const queryTabsItems = async () => {
  const { data: res } = await moduleListAPI()

  // 获取tab标签
  moduleItems.value = res.data.filter((value) => {
    return value.moduleName !== null
  })

  // 获取tab标签所对应的内容
  moduleItems.value.forEach((item, index) => {
    // 存入图标（接口中没有)
    item.icon = `url(${tabsIcons.value[index]})`

    // 获取tab标签所对应的左边按钮的内容
    const leftBtns = res.data.filter((value) => {
      return value.pid === item.id && value.hotBtn2 !== (null && '')
    })

    // 获取tab标签所对应的右边按钮的内容
    const rightBtns = res.data.filter((value) => {
      return value.pid === item.id && value.hotBtn2 === (null && '')
    })

    // 放入数组中
    tabsItems.value[index] = { id: item, btns: { left: leftBtns, right: rightBtns } }
  })
  console.log(tabsItems.value)
}
queryTabsItems()

</script>

<style lang="less" scoped>

.business {
    padding: 28px 0 0;
    background: #ffffff;

    .tabs-container {
      background: linear-gradient(180deg,rgba(243,244,248,0),#e4e7f0);
      margin-top: 44px;
      width: 100%;
      display: flex;
      justify-content:center;
      .demo-tabs {
        display: flex;
        flex-direction: column;
        width: 100%;
        .label {
          display: flex;
          justify-content: center;
          width: 20%;
          max-width: 310px;
          min-width: 240px;
          &:hover .custom-tabs-label-text {
            color: rgb(29, 32, 69)
          }
          .label-wrapper {
            cursor: pointer;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .custom-tabs-label-text {
              text-align: center;
              font-size: 16px;
            }
            .custom-tabs-label-img {
              // background-size: 50%;
              width: 93px;
              height: 93px;
            }
          }
        }
        .card-wrapper {
          display: flex;
          padding: 50px 0;
          height: 390px;
          background: transparent url(https://vintex.gtja.com/cosweb/static/img/home-business-bg.a2aaa49b.png) no-repeat;
          background-size: 100% 100%;
          justify-content: center;
        }
      }
    }
}

:deep(.el-tabs__nav-scroll) {
  overflow: hidden;
  display: flex !important;
  justify-content: center !important;
}

:deep(.is-active) {
  font-weight: 700 !important;
  color: rgb(29, 32, 69) !important;
}

:deep(.el-tabs) {
  --el-tabs-header-height: 60px !important;
}

:deep(.el-tabs__nav) {
  margin-bottom: 20px !important;
}

:deep(.el-tabs__active-bar) {
  height: 3px !important;
  position: relative!important;
  top: 154px !important;
  background-color: #000000 !important;
}

</style>
