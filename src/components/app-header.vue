<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    unique-opened
    active-color="#fff"
    background-color="transparent"
    text-color="#ffffff"
    active-text-color="#ffffff"
  >
    <!-- logo -->
    <img src="@/assets/images/logo.png" alt="" style="width:170px; height:52px">
    <!-- 间隔 -->
    <div class="flex-grow" />
    <!-- 菜单栏 -->
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">研究</el-menu-item>
    <el-menu-item index="3">产品</el-menu-item>
    <el-menu-item index="4">交易</el-menu-item>
    <el-menu-item index="5">服务</el-menu-item>
    <el-menu-item index="6">数据</el-menu-item>
    <!-- 中英切换 -->
    <div class="search">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img src="@/assets/images/lang.png" alt="" />
          简/EN
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>中文</el-dropdown-item>
            <el-dropdown-item>English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <!-- 按钮区域 -->
    <div class="btn">
      <el-button style="color: #1890FF">登录</el-button>
      <el-button type="primary" >注册</el-button>
    </div>
  </el-menu>
</template>

<script setup >
import { ref } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="less" scoped>
.flex-grow {
  flex-grow: 1;
}

.el-menu {
  height: 80px;
  padding: 0 20px;
  align-items: center;
  border-bottom: 1px solid rgba(198, 196, 196, 0.384);
  .el-menu-item {
    font-size: 18px;
    img {
      width: 140px;
    }
  }

  .search {
    align-items: center;
    margin: 0 20px;
  }
  .btn {
    .el-button, .el-button--primary {
      padding: 0 30px ;
      font-size: 16px ;
      font-weight: normal;
      height: 34px;
      border-radius: 2px;
      margin: 0 20px 0 0;
    }

  }

  .el-dropdown {
    padding: 0 30px ;
    font-size: 18px ;
    font-weight: normal;
    .el-dropdown-link {
        cursor: pointer;
        color: #ffffff;
        img {
          width: 16px;
          height: 14px;
          margin: 0 5px 0 0;
        }

    }
  }
  .example-showcase .el-dropdown-link {
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
  }
}

</style>
