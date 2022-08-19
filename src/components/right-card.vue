<template >
  <div class="right-card-container">
    <!-- 卡片标题 -->
    <div class="card-title">
      {{ props.proName }}
      <img v-if="proBlueLabel" />
    </div>
    <!-- 副标题 -->
    <div class="sub-title">
      {{ props.proDesc }}
    </div>
    <!-- 标签 -->
    <div class="tags">
      <el-tag class="ml-2" type="plain" v-for="item in proLabels" :key="item"> {{ item }} </el-tag>
    </div>

    <!-- 特别提示 -->
    <div class="title-tag" v-if="proRedLabel">
      {{ props.proRedLabel }}
      <span class="title-tag-icon"></span>
    </div>

  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  proName: String,
  proDesc: String,
  proLabels: Array,
  proRedLabel: String,
  proBlueLabel: String
})

</script>
<style lang="less" scoped>
.right-card-container {
  box-sizing: border-box;
  transition: all .24s;
  display: flex;
  position: relative;
  width: 33.3333%;
  max-width: 345px;
  min-height: 129px;
  padding: 0 20px;
  padding-top: 0;
  background: linear-gradient(155deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,.15));
  border-right: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  opacity: .72;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;

  &:hover {
    background: linear-gradient(158deg,#e3e6ee,#e6e8f0);
    box-shadow: 2px 4px 8px 0 #d4d7e3;
  }

  .card-title {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: #000;

    img {
      width: 48px;
      height: 16px;
      margin-left: 12px;
      background: transparent 50%/100% 100% no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAMAAABncAyDAAAAnFBMVEUAAAArht0qheArh90rhdwqh94khtsrht07j+Ayit7J4Pa01PPi7/qmzPBUneO82PR0sOhkpuZLmOJCk+AviN3S5ffM4vbG3vWhyvCUwu1boeXP4/eIu+xvrehnqOZgpOVIluE3jd/V5/ibxu+Mvex5s+lrq+fm8PvZ6fiYxO5ZoOT4+v3x9/zc6/nA2/SEueuCuOtGleHr9Pus0PEb70HIAAAAB3RSTlMA4knpqlUVjoLxFwAAAU5JREFUKM+V0teSAiEQBVB1wwWGYdDJOUez/v+/7eDobvG29gPdFH0oiurVarVZ49+x3sxg7n9DzOBZbmu1ll39OjPoI6UpQIJf8QLCi/eel/WnIHN2TdMkwLEEADKQcLIrOfpEA0gF7SJhqLJo41Hmsm+lpNSX4sKLvskIdJCb1L8uADAitOFhDDmZrHt9MRMfuAgNZIztGZOH4cDPDwD0gEfQBkFwplzKqtAAAA4IA+YWC3A4EBNYqcgZ0iTZQgM71927bn7/A9MJcEtYlmEw2587dABR8Nxumyc41yRMgIrCmsiO2TfPNYgOrB3vwjFVID9VQUa5DRwBK/YZs2MKQjVwjcEd80gUsAsAdQAQri4CYTYDwk4DXRZWECYUULF1acRuiQKRbzqD5w2vJ31hCVECDlCUy3ZOxFG/QekVgDPXC/j+wHvD9/le/+YHL/wmqLcFMmoAAAAASUVORK5CYII=);
    }
  }

  .sub-title {
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 20px;
    color: #666;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;

    .el-tag {
      height: 22px;
      padding-left: 8px;
      padding-right: 8px;
      margin-right: 12px;
      margin-bottom: 4.5px;
      border: 1px solid #c7cddd;
      border-radius: 2px;
      cursor: pointer;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      color: #6383aa;
    }
  }

  .title-tag {
    display: flex;
    position: absolute;
    z-index: 100;
    top: 0;
    right: 0;
    height: 26px;
    padding: 0 12px 0 16px;
    background-color: #f42927;
    border-radius: 0 0 0 12px;
    cursor: pointer;
    font-size: 12px;
    line-height: 26px;
    color: #fff;
    align-items: center;
    .title-tag-icon {
      width: 5px;
      height: 8px;
      margin-left: 6px;
      background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAAXNSR0IArs4c6QAAAFFJREFUGFd1zsENggAAQ9HXUZiBJRzBHdzDTQwHryYO4dE1WIGUYLgJPf6fpk3bL6Ykd3vS9oInHrglWbLJtiNe+OD6g7sY8MZ8Dv/qh0NHl1b65ymZyYTJtgAAAABJRU5ErkJggg==) 50% no-repeat;
    }
  }

}
</style>
