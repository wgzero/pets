<template>
  <div class="homeDetail">
    <detail-header title="图片详情">
      <template #headerLeft>
        <div class="detail-left" @click="handleBack">
          <i class="iconfont iconfanhui backIcon"></i>
        </div>
      </template>
    </detail-header>
    <div class="detail-body">
      <div class="detail-body-header">
        <img class="detail-header-imgs" :src="state.detailObj.imgUrl" alt="">
        <div class="detail-header-right">
          <div class="detail-header-info">
            <div class="detail-header-title">{{ state.detailObj.title }}</div>
            <div class="detail-preview">
              <i class="iconfont iconliulan detail-eyes"></i>
              <div class="detail-header-num">{{ state.detailObj.browse }}</div>
            </div>
          </div>
          <div class="detail-header-name">
            {{ state.detailObj.nickName }}
          </div>
          <div class="detail-header-content">
            {{ state.detailObj.content }}
          </div>
        </div>
      </div>
      <div class="detail-msg">
        <div class="detail-mid-title">
          <div class="detail-commit-left">留言</div>
          <div class="detail-commit-right" @click="handleCommit">提交</div>
        </div>
        <div class="detail-msg-content">
          <van-field
            v-model="state.message"
            rows="1"
            autosize
            type="textarea"
            placeholder="请输入留言"
          />
        </div>
      </div>
      <div class="detail-comment">
        <div class="detail-comment-top">
          <div class="detail-comment-top-left">萌友评论</div>
          <div class="detail-comment-top-right">评论条数: {{ state.total ?  state.total : "无" }}</div>
        </div>
        <div class="detail-comment-info" v-for="(item, index) of state.commentList" :key="index">
          <div class="detail-comment-all">
            <div class="detail-comemnt-all-left">
              <img :src="item.imgUrl" class="detail-comment-imgs" alt="">
              <!-- <img src="@/assets/imgs/cat.jpg" class="detail-comment-imgs" alt=""> -->
              <div class="detail-comment-name">{{ item.nickName }}</div>
            </div>
            <div v-if="item.star == 1" class="detail-comemnt-all-right-red" @click.stop="handleStar(item, index)">
              <i class="iconfont icondianzan_active detail-star"></i>
              <div class="detail-comemnt-num">{{ item.star }}</div>
            </div>
            <div v-else class="detail-comemnt-all-right" @click="handleStar(item, index)">
              <i class="iconfont icondianzan_active detail-star"></i>
              <div class="detail-comemnt-num">{{ item.star }}</div>
            </div>
          </div>
          <div class="detail-comment-msg">
            {{ item.content }}
          </div>
        </div>
      </div>
      <div class="detail-comment-more" v-if="state.total">
        <div class="detail-comment-load" @click="handleLoadMore">
          更   多
        </div>
      </div>
      <div class="detail-comment-more-no" v-else>
        <van-empty description="暂无评论" />
      </div>
    </div>
    <div class="detail-btm">
      <div class="detail-btm-icons">
        <div class="detail-btm-left-01">
          <i class="iconfont icondianzan_active detail-btn-icons-01"></i>
          <span class="detail-btm-star-01">点赞</span>
        </div>
        <div class="detail-btm-left">
          <i class="iconfont iconshoucang-copy detail-btn-icons"></i>
          <span class="detail-btm-star">收藏</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { useRouter, useRoute } from "vue-router" 
import detailHeader from "@/components/header.vue"
import { getDetail, addComment, getComment, setStarOrCancel } from "@/api/index"
import { Toast } from 'vant'

interface detailProps {
  imgUrl: string;
  nickName: string;
  browse: number,
  title: string,
  content: string
}


export default defineComponent({
  name: 'homeDetail',
  components: {
    detailHeader
  },
  setup(props, context){
    const state = reactive({
      route: "",
      detailObj: {},
      message: "",
      commentList: [{}],
      pageNum: 1,
      pageSize: 3,
      total: 0, // 评论总条数
      num: null, // 获取参数
      numRes: 3 // 总条数
    })
    let router = useRouter()
    let route = useRoute()
    const handleBack = () => {
      router.go(-1)
    }
    onMounted(() => {
      // console.log("9090---", route.query.id)
      getInit()
    })


    //  数据调用 初始化
    const getInit = () => {
      let data = {
        id: route.query.id
      }
      getDetail(data).then(res => {
        // console.log("res", res)
        if(res.code == 200){
          state.detailObj = res.data.list
        }
      })

      let dataRes = {
        pid: route.query.id,
        pageNum: state.pageNum,
        pageSize: state.pageSize
      }

      getComment(dataRes).then(res => {
        // console.log('luts00000', res)
        if(res.code == 200){
          state.commentList = res.data.list
          state.total = res.data.total
        }
      })
    }

    // 提交
    const handleCommit = () => {
      // console.log("handleCommit", state.message)
      if(state.message){
        let data = {
          id: route.query.id,
          content: state.message
        }
        addComment(data).then(res => {
          // console.log("xxx-data", res)
          if(res.code){
            Toast("评论成功")
            getInit()
            state.message = ""
          }
        })
      }else{
        Toast("您还未留言哦")
      }
    }

    // 网友点赞
    const handleStar = (item: any, index: any) => {
      let data = {
        id: item.id,
        pid: item.pid
      }
      setStarOrCancel(data).then(res => {
        // console.log("-----", res)
        if(res.code == 200){
          Toast(`${res.msg}`)
          // console.log("9999", state.pageNum)
          state.pageNum = 1
          let dataRes = {
            pid: route.query.id,
            pageNum: state.pageNum,
            pageSize: state.numRes
          }
          state.commentList = []
          getComment(dataRes).then(res => {
            // console.log('luts00000', res)
            if(res.code == 200){
              state.commentList = res.data.list
              state.total = res.data.total
            }
          })
        }
      })
    }
    // 加载更多
    const handleLoadMore = () => {
      let dataRes = {
        pid: route.query.id,
        pageNum: ++state.pageNum,
        pageSize: state.pageSize
      }
      state.numRes = state.pageNum * state.pageSize
      getComment(dataRes).then(res => {
        // console.log('luts00000', res)
        if(!res.data.list.length){
          Toast("已全部显示了")
          return
        }
        if(res.code == 200){
          state.commentList = [...state.commentList, ...res.data.list]
          state.total = res.data.total
        }
      })
    }
    return {
      state,
      handleBack,
      handleCommit,
      handleStar,
      handleLoadMore
    }
  }
})
</script>

<style lang="less" scoped>
@import "@/assets/style/common";
.homeDetail{
  width: 100%;
  height: 100vh;
  background: @detailBg;
  .backIcon{
    font-size: 20px;
    display: block;
    text-align: center;
    line-height: 55px;
  }
  .detail-body{
    width: 100%;
    // height: 1000px;
    background: @detailBg;
    padding-top: 55px;
    .detail-body-header {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        margin-top: 28px;
        .detail-header-imgs {
            width: 40%;
            height: 240px;
            border-radius: 20px;
        }
        .detail-header-right {
            width: 40%;
            .detail-header-info {
                display: flex;
                justify-content: space-between;
                .detail-header-title {
                    font-size: 20px;
                    color: #333;
                }
                .detail-preview {
                    display: flex;
                    .detail-eyes {
                        display: block;
                        text-align: center;
                        margin: auto;
                        font-size: 18px;
                        color: #bbb;
                    }
                    .detail-header-num {
                        font-size: 16px;
                        margin: auto;
                        padding-left: 5px;
                        color: #bbb;
                    }
                }
            }
            .detail-header-name {
                line-height: 40px;
                font-size: 16px;
                color: #666;
            }
            .detail-header-content {
                font-size: 15px;
                overflow: hidden;
                color: #888;
            }
        }
    }
    .detail-msg{
      margin: 50px auto;
      width: 80%;
      .detail-mid-title {
          font-size: 20px;
          display: flex;
          justify-content: space-between;
          .detail-commit-right{
            font-size: 14px;
                margin: auto 0;
                padding: 3px 10px;
                border-radius: 10px;
                background: #25A5EB;
                color: white;
          }
      }
    }
    .detail-comment{
      margin: auto;
      width: 80%;
      .detail-comment-top {
          display: flex;
          justify-content: space-between;
          font-size: 20px;
          .detail-comment-top-right {
              font-size: 16px;
              display: flex;
              flex-direction: column-reverse;
              color: #777;
          }
      }
      .detail-comment-info {
          width: 100%;
          // height: 136px;
          background: white;
          border-radius: 20px;
          margin-top: 20px;
          padding: 12px 30px;
          box-sizing: border-box;
        .detail-comment-all {
          width: 100%;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
            .detail-comemnt-all-left {
                display: flex;
                .detail-comment-imgs{
                  display: block;
                  width: 30px;
                  height: 30px;
                  border-radius: 50%;
                  margin-right: 8px;
                }
                .detail-comment-name {
                    color: #333;
                    font-size: 16px;
                    margin: auto;
                }
            }
            .detail-comemnt-all-right {
                display: flex;
                .detail-star {
                  display: block;
                  margin: auto;
                  color: #666;
                  padding-right: 6px;
                }
                .detail-comemnt-num {
                    font-size: 16px;
                    margin: auto;
                }
            }
            .detail-comemnt-all-right-red {
                display: flex;
                .detail-star {
                  display: block;
                  margin: auto;
                  color: red;
                  padding-right: 6px;
                }
                .detail-comemnt-num {
                    font-size: 16px;
                    margin: auto;
                    color: red;
                }
            }
        }
        .detail-comment-msg {
            margin-top: 10px;
            font-size: 14px;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            color: #999;
        }
      }
    }
    .detail-comment-more {
        margin-top: 30px;
        padding-bottom: 90px;
        width: 100%;
        height: 42px;
        display: flex;
        justify-content: center;
        .detail-comment-load {
          width: 80%;
          display: flex;
          background: @bgColor;
          justify-content: center;
          border-radius: 30px;
          line-height: 42px;
          font-size: 18px;
          color: @white;
      }
    }
    .detail-comment-more-no {
        margin-top: 30px;
        padding-bottom: 200px;
        width: 100%;
        height: 42px;
        display: flex;
        justify-content: center;
        .detail-comment-load {
          width: 80%;
          display: flex;
          background: @bgColor;
          justify-content: center;
          border-radius: 30px;
          line-height: 42px;
          font-size: 18px;
          color: @white;
      }
    }
  }
  .detail-btm {
    position: fixed;
    width: 100%;
    bottom: 0;
    border-top: 1px solid #ccc;
    background: @detailBg;
    height: 70px;
    .detail-btm-icons {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      margin-top: 14px;
      .detail-btm-left {
          width: 30%;
          height: 38px;
          background: white;
          text-align: center;
          border-radius: 21px;
          line-height: 34px;
          .detail-btn-icons {
              font-size: 16px;
              color: @bgColor;
          }
          .detail-btm-star {
              font-size: 14px;
              margin-left: 6px;
              color: @bgColor;
          }
      }
      .detail-btm-left-01{
          width: 30%;
          height: 38px;
          background: @bgColor;
          text-align: center;
          border-radius: 21px;
          line-height: 34px;
          .detail-btn-icons-01 {
              font-size: 16px;
              color: @white;
          }
          .detail-btm-star-01 {
              font-size: 14px;
              margin-left: 6px;
              color: @white;
          }
      }
    }
  }
}

.detail-msg-content ::v-deep .van-cell.van-field {
    border-radius: 10px;
    height: 100px;
    padding: 6px 12px;
    margin-top: 12px;
}
.detail-comment-more-no ::v-deep .van-empty {
    margin-top: 12px;
}
</style>
