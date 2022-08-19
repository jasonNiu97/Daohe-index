<template>
  <div class="index-daohe">
    <div class="title"></div>
    <div class="sub-title">为改变世界的人，提供改变的力量</div>
    <div class="video-btn" @click="videoOn = true"></div>
    <div class="more">了解更多</div>
    <div class="video-dialog" v-if="videoOn">
      <div class="mask"></div>
      <div class="video-wrapper">
        <div class="video-inner">
          <video :src="videoUrl" poster="/cosweb/static/img/daohe-bg.65b46ef3.png" autoplay="autoplay" controls="controls" class="video"></video>
          <i class="close-btn" @click="videoOn = false">x</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { daoheVideoAPI } from '@/api/daoheVideoAPI'
import { ref } from 'vue'
// 获取照片和视频地址
const imgUrl = ref('')
const videoUrl = ref('')
const queryDaoheUrl = async () => {
  const { data: res } = await daoheVideoAPI()
  imgUrl.value = `url(${res.data[0].bannerPictureUrl})`
  videoUrl.value = res.data[0].jumpLink
  console.log(imgUrl.value)
}
queryDaoheUrl()

// 控制视频播放
const videoOn = ref(false)

</script>

<style lang="less">
.index-daohe {
  display: flex;
  height: 913px;
  background: transparent v-bind(imgUrl) 50% no-repeat;
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    width: 857px;
    height: 122px;
    margin-bottom: 23px;
    background: transparent url(https://vintex.gtja.com/cosweb/static/img/daohe_title.7a836d26.png) no-repeat;
    background-size: cover;
    font-size: 54px;
    line-height: 77px;
    font-weight: 800;
    letter-spacing: 10px;
    color: #fff;
  }
  .sub-title {
    height: 28px;
    margin-bottom: 38px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 40px;
    color: #fff;
  }
  .video-btn {
    transition: all .5s;
    width: 104px;
    height: 44px;
    margin-bottom: 20px;
    background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAqCAMAAAB2m95HAAAAZlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Vn2moAAAAIXRSTlMAf+aieBCVDtQuFvNmVUg7Bu7n4tu6rJKFbWxNKSLAhh+kOV1GAAABJklEQVRYw7TT2W7DIBCF4VMWg7FZvO9tef+XrKVIlpImkUcx3yUX8wvQ4FHI7Sy+PiBmmwe8Zaau0P0wfpIZh14X3WTwysorvihcQC37qBXPyKwWCpdRos4k/vHNfnopmTUeD0rmcDnHStwR7YYEtlbc3aU1SMK0JQ6ebUhkY/74q8YhGddI3GQZ0jmmr7VEQrK+7SkXOMtzCzLBsTOVwlk6xh9QqcoAmDhOYzFGHkDEJwDdQsvEbwmapQNCoYiZqH9BooqAXIOaiSwHic5he3omFg4UvcU80DO7EgTDDDGSMgfKu43irxc7oAEAAGEY5t91XVQBCQG+kcqkpqURSAOd1vMcm3Q6UxCcWEshfZAjAdTBwQO3B9WPeByNOlJYFPcLe3o/AN+pHTMSm6aSAAAAAElFTkSuQmCC) 50% no-repeat;
    cursor: pointer;

    &:hover {
      transform-origin: center center;
      transform: scale(1.1);
    }
  }
  .more {
    height: 22px;
    cursor: pointer;
    font-family: PingFangSC-Regular,PingFang SC;
    font-size: 16px;
    line-height: 22px;
    color: #fff;
    text-decoration: underline;
  }
  .video-dialog {
    display: flex;
    position: fixed;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;

    .mask {
      position: fixed;
      z-index: 1;
      background-color: rgba(0,0,0,.7);
    }
    .video-wrapper {
      transform: translate(-50%,-50%);
      display: flex;
      position: fixed;
      z-index: 2;
      left: 50%;
      top: 60%;
      width: 60vw;
      justify-content: center;
      align-items: center;

      .video-inner {
        position: relative;
        width: 100%;
        min-height: 30vw;
        background: #000;

        .video {
          width: 100%;
          max-height: 562px;
        }

        .close-btn {
          transition: all .3s;
          position: absolute;
          top: -30px;
          right: -30px;
          cursor: pointer;
          font-size: 24px;
          color: #fff;
          font-style: normal;
        }
      }
    }
  }
}

.mask {
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

video {
    outline: none;
}

</style>
