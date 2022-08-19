<template>
  <div class="footer-main">
    <div class="up">
      <div class="block">
        <div class="block1">
          <div class="logo">
            <img src="https://vintex.gtja.com/cosweb/static/img/logo-foot.4a8db160.png" alt="">
          </div>
          <div class="select">
            <el-select v-model="value" class="m-2" placeholder="友情链接">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          </div>
          <div class="span">
            <div >
              <span >加入我们</span>
              ｜
              <span>软件下载</span>
              ｜
              <span >金融商城</span>
              ｜
              <span >上海市互联网违法和不良信息举报中心</span>
            </div>
            <div >
              <span >合法网站声明</span>
              ｜
              <span>网站公示系统</span>
              ｜
              <span>投诉与建议</span>
              ｜
              <span>版权声明</span>
              ｜
              <span><a href="https://vintex.gtja.com/vintex/default/2021-12-21/8e823707d13a46248861952a4b9c277b.pdf" download="" style="color: rgba(255, 255, 255, 0.8); text-decoration: none;">用户协议</a></span>
              ｜
              <span><a href="https://vintex.gtja.com/vintex/default/2022-06-17/7d6d71131b264d71b7fba8ec1f9da4bc.pdf" download="" style="color: rgba(255, 255, 255, 0.8); text-decoration: none;">隐私条款</a></span>
              ｜
              <span>分支机构</span>
            </div>
          </div>
        </div>
        <div class="fly-mid"></div>
        <div class="block2">
          <div class="box">
            <div>
              <p>联系我们</p>
              <p >统一客服：</p>
              <p>95521/400-8888-666</p>
            </div>
            <div>
              <p>在线咨询（9:00 - 18:00）</p>
              <p>咨询电话：021-38032428</p>
              <p>公司地址：上海市静安区南京西路768号</p>
            </div>
          </div>
        </div>
        <div class="fly-mid"></div>
        <div class="block3">
          <div class="box">
            <div>
              <p type="text" class="text">关注我们</p>
            </div>
            <div>
              <span class="pop-focus-us">
                <el-popover
                  placement="top-start"
                  :width="200"
                  trigger="hover">
                  <template #reference>
                    <el-avatar
                      :src="weixinIcon"
                      @mouseenter="weixinIcon.value = weixinIconGreen"
                    />
                  </template>
                  <template #default>
                    <div class="wx-box" style="display:flex; flex-direction:column;">
                      <img src="https://vintex.gtja.com/cosweb/static/img/focusGTAJ3.50a8d921.png" alt="" style="height: 100px ;
                      width: 100px;">
                      扫描关注国泰君安
                    </div>
                  </template>
                </el-popover>
              </span>
            </div>
            <div>
              <div>
                <img src="https://vintex.gtja.com/cosweb/static/img/downloadApp.843f5724.png" alt="">
                <p >APP 下载</p>
              </div>
              <div >
                <img src="https://vintex.gtja.com/cosweb/static/img/hehuduan.4dc27ce7.png" alt="">
                <p>活动小程序</p>
              </div>
              <div>
                <img src="https://vintex.gtja.com/cosweb/static/img/miniBg.9cfe06bc.jpg" alt="">
                <p>研报小程序</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="down">
      <div class="tips">
        <div>
          <p>Copyright © 1999-2021 国泰君安证券股份有限公司.</p>
          <p>投资有风险，入市需谨慎</p>
        </div>
        <div>
          <p class="pointer">沪公网安备 31010602006306</p>
          <p class="pointer">沪ICP证 B2-20040408-5</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: '中国证监会',
    label: '中国证监会'
  },
  {
    value: '中国证券业协会',
    label: '中国证券业协会'
  },
  {
    value: '中国证券交易所',
    label: '中国证券交易所'
  },
  {
    value: '上海证券交易所',
    label: '上海证券交易所'
  },
  {
    value: '深圳证券交易所',
    label: '深圳证券交易所'
  }
]

const weixinIconWhite = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAABd1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////85UcLHAAAAfHRSTlMA3WFJZuMYBANzrnWj2NE3TcYKlrIxvxfnj4JotwL+Sx/8I/okTCH9Aa+SBTTxP4j2dJTrJpdCMCsLL/nP+9kZPg1khZWr4KnCuSiGkWwyT3igBtwt6lvXmBOoWJzsKbsP9LwVQM3hdoA5oroakDz4jVWzLqHIaRR5EPdFu6uu/QAAAf9JREFUOMuNlOV3o0AQwAcIkCBJI40nxGvX9up+PWlPK+fu7u43f/wtuywsafIe82HfDPxgdAcgLC2nYpoVpwXDJa5YRdsolcslwy5aSnwgpMekvFzgVkHOSzH9KJVK5kbDT0ZzyVQ/lVBHjn46oiZCdi2b1gYFoqWzNcHMVjODs8pUs4LHdGZY9pm07zelasOrpKleHnqSR7+auG9cuXysL48kq0ssx+zrj5DJi+chLhejtZdYve4dRy7116H6SW4/lDw1ltuIt6YJs7BBjlcil1fIYcmuevUa4l1YrOM7/dsYYntRwGSLHEXax0Pyi9vwbAuXYO0v0ecFrFAE6NhU3XNDqr5E3LI28cfvLx9Fr3YHugbVdv34Uf0HjZ+fP8yt+JjRhUqJaks+JWl/vjep9rTnYaUKmGVWPE4113/ZXL/xkGFlk2Onpr1Xb+ErtleXsT1zE3EzzjHPKcge5qwgfnr/Bp88XieWwp06hhfAGYY1THJskNI9cLtyiaXgQMvm+cxT7M4sCjLJCtLi5SVSrV84v1A/2BexOV5er1kAaxPuBE3VGmMB1Wz4zfJaD+Pc+WSAzQat54Pky9QEp3biwSD5Y+nL+OkT1ONZcSyFIQ+kN3Nyu3fuojjkw6+MLl6ZqBcw6nWOuhwirprIiyvqGoy6VJl0uu6K7nb6Hv8HfyiJiXrnrb4AAAAASUVORK5CYII='
const weixinIconGreen = 'data:image/png;base64,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'

const weixinIcon = ref('')
weixinIcon.value = weixinIconWhite

</script>

<style lang="less">
p {
  margin: 0;
}
.footer-main {
    box-sizing: border-box;
    width: 100%;
    height: 340px;
    background-color: #1e1f26;
    .up {
      display: flex;
      width: 1200px;
      height: 290px;
      margin: 0 auto;
      background-color: #1e1f26;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      .block {
        display: flex;
        width: 100%;
        height: 100%;
        &>div {
          display: flex;
          width: 400px;
          height: 212px;
          flex-flow: column;
        }
        .block1 {
          display: flex;
          width: 565px;
          flex-flow: column;
          .logo {
            width: 159px;
            height: 54px;
            margin-top: 40px;
            margin-bottom: 51px;
            img {
              width: 100%;
            }
          }
          .select {
            padding-top: 0;
            :deep(.el-select){
              :deep(.el-input__wrapper) {
                background: transparent !important;
                border-radius: 22px !important;
              }
            }
          }
          .span {
            display: flex;
            flex-flow: column;

            &>div {
              display: flex;
              padding-top: 26px;
              font-size: 12px;
              font-weight: 300;
              color: hsla(0,0%,100%,.8);
              flex-flow: row;
              &>span {
                cursor: pointer;
                word-wrap: break-word;
              }
            }
          }
        }
        .fly-mid {
          display: inline-block;
          vertical-align: middle;
          width: 1px;
          height: 170px;
          margin-top: 40px;
          background: #e4e4e4;
          opacity: .1;
        }
        .block2 {
          width: 410px;
          align-items: center;
          color: #e4e4e4;
          .box {
            display: flex;
            height: 210px;
            flex-flow: column;
            &>div:first-child {
              display: flex;
              padding-bottom: 20px;
              flex: 1;
              flex-flow: column;
              justify-content: space-between;
              &>p {
                &:first-child {
                  margin-top: 40px;
                  font-size: 14px;
                }
                &:nth-child(2) {
                  margin-top: 16px;
                  margin-bottom: 12px;
                  font-size: 12px;
                }
                &:nth-child(3) {
                  font-size: 24px;
                  font-weight: 500;
                }
              }
            }

            &>div:nth-child(2) {
              display: flex;
              width: 100%;
              height: 80px;
              flex-flow: column;
              justify-content: space-evenly;
              &>p {
                height: 17px;
                margin-bottom: 8px;
                font-size: 12px;
              }
            }
          }
        }
        .block3 {
          padding-left: 50px;
          .box {
            display: flex;
            height: 212px;
            padding-top: 40px;
            flex-flow: column;
            &>div {
              &:first-child {
                font-size: 14px;
                color: #fff;
              }
              &:nth-child(2) {
                display: flex;
                margin-top: 12px;
                flex-flow: row;

                .pop-focus-us {
                  padding-left: 10px;
                  cursor: pointer;
                  .el-avatar {
                    background: transparent;
                  }
                }
              }
              &:nth-child(3) {
                display: flex;
                margin-top: 26px;
                flex-flow: row;
                &>div {
                  display: flex;
                  padding-right: 15px;
                  flex-flow: column;
                  align-items: center;
                  &>img {
                    width: 90px;
                    height: 90px;
                  }
                  &>p {
                    padding-top: 10px;
                    font-size: 12px;
                    color: hsla(0,0%,100%,.8);
                  }
                }
              }
            }
          }
        }
      }
    }
    .down {
      display: flex;
      width: 100%;
      height: 50px;
      background: #121419;
      justify-content: center;
      align-items: center;
      .tips {
        display: flex;
        width: 100%;
        max-width: 1200px;
        justify-content: space-between;
        &>div {
          display: flex;
          margin-right: 20px;
          font-size: 14px;
          color: #b0b0b0;
          align-items: center;
          justify-content: space-around;
          &:nth-child(2) {
            flex: 1;
            cursor: pointer;
          }
        }
      }
    }
}

.el-select .el-input__wrapper {
    cursor: pointer;
    background: transparent;
    border-radius: 50px;
    width: 160px;
}
</style>
