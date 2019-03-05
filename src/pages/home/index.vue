<template>
  <view>
    <!-- 1.0 轮播图 -->
    <swiper
      indicator-dots
      autoplay
      circular
      :interval="3000"
      :duration="1000"
      indicator-active-color="#ffffff"
    >
      <block
        v-for="(item,index) in swiperdata"
        :key="index"
      >
        <swiper-item>
          <image :src="item.image_src"></image>
        </swiper-item>
      </block>
    </swiper>
    <!-- 2.0 菜单
     -->
    <view class="categories">
      <view
        v-for="(item,index) in catitems"
        :key="index"
        class="category-item"
      >
        <image :src="item.image_src" />
      </view>
    </view>
    <!-- 3.0 楼层数据 -->
    <view class="floor">
      <block
        v-for="(item,index) in floordatas"
        :key="index"
      >
        <!-- 遍历的每一个楼层 -->
        <floor :floordata="item" />
      </block>
    </view>
    <!-- 4.0 底部提示 -->
    <view class="end-tips">
      <view class="iconfont icon-xiao"></view>
      <text class="bottomline">我是有底线的</text>
    </view>
    <!-- 5.0 回到顶部 -->
    <view
      @click="goToTop"
      v-show="isShowGoToTop"
    >
      <view class="to-top">
        <image src="/static/img/arrow_top@2x.png"></image>
        <text>顶部</text>
      </view>
    </view>
  </view>
</template>

<script>
import floor from '../../components/floor'

export default {
  components: {
    floor
  },
  data() {
    return {
      swiperdata: [], //轮播图数据
      catitems: [], // 分类数据
      floordatas: [], //楼层数据
      isShowGoToTop: false
    }
  },
  onLoad() {
    // 获取轮播图数据
    this.getSwiperData()
    // 获取菜单数据
    this.getCatitemsData()
    // 获取楼层数据
    this.getFloorData()
  },
  onPageScroll({ scrollTop }) {
    if (scrollTop > 80) {
      if (this.isShowGoToTop) return //节流处理
      this.isShowGoToTop = true
    } else {
      if (!this.isShowGoToTop) return //节流处理
      this.isShowGoToTop = false
    }
  },
  methods: {
    async getSwiperData() {
      const res = await this.$axios.get('home/swiperdata')

      this.swiperdata = res.data.message
    },
    async getCatitemsData() {
      const res = await this.$axios.get('home/catitems')

      this.catitems = res.data.message
    },
    async getFloorData() {
      const res = await this.$axios.get('home/floordata')

      this.floordatas = res.data.message
    },
    // 回到顶部
    goToTop() {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    }
  }
}
</script>

<style lang="less" scoped>
swiper {
  width: 750rpx;
  height: 400rpx;

  image {
    width: 100%;
    height: 100%;
  }
}
.categories {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  height: 150rpx;
  .category-item {
    width: 120rpx;
    height: 120rpx;
    image {
      width: 100%;
      height: 100%;
    }
  }
}
.end-tips {
  display: flex;
  height: 100rpx;
  align-items: center;
  justify-content: center;
  font-size: 24rpx;
  color: #888;
  .bottomline {
    margin-left: 5rpx;
  }
}
.to-top {
  width: 90rpx;
  height: 90rpx;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  position: fixed;
  right: 40rpx;
  bottom: 50rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  image {
    width: 24rpx;
    height: 14rpx;
  }
  text {
    margin-top: 20rpx;
    color: #999;
  }
}
</style>

