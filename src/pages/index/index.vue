<template>
  <view>

    <div
      class="userinfo"
      @click="bindViewTap"
    >
      <img
        class="userinfo-avatar"
        v-if="userInfo.avatarUrl"
        :src="userInfo.avatarUrl"
        background-size="cover"
      />
      <img
        class="userinfo-avatar"
        src="/static/images/user.png"
        background-size="cover"
      />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input
        type="text"
        class="form-control"
        :value="motto"
        placeholder="v-model"
      />
      <input
        type="text"
        class="form-control"
        v-model="motto"
        placeholder="v-model"
      />
      <input
        type="text"
        class="form-control"
        v-model.lazy="motto"
        placeholder="v-model.lazy"
      />
    </form>

    <!-- <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a> -->
    <!-- <navigator
      url="/pages/counter/main">我要去Vuex那个页面
    </navigator> -->
    <view @click="goToPage('/pages/counter/main')">我要去Vuex那个页面666</view>

    <!-- <view data-url="xxx" bindtap="goToPage2">我要去Vuex那个页面777</view> -->

    <div class="all">
      <div class="left">
      </div>
      <div class="right">
      </div>
    </div>
  </view>
</template>

<script>
import card from '@/components/card'

export default {
  data() {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap() {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle(ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    goToPage(url) {
      // console.log(url)
      // 编程式导航跳转 mpvue === wx
      wx.navigateTo({
        url: url
      })
    },
    goToPage2() {
      console.log('2222222222')
    }
  },
  created() {
    // let app = getApp()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}
.all:after {
  display: block;
  content: '';
  clear: both;
}
.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}
</style>
