<template>
  <view class="categories">
    <!-- 1.0 左边的scroll-view -->
    <scroll-view class="categories-left" scroll-y>
      <view @click="changeSelectIndex(index)" :class="['categories-left-item',
      index===currentIndex ? 'categories-left-active':'']"
       v-for="(item,index) in categories" :key="item.cat_id">
        <text>{{item.cat_name}}</text>
      </view>
    </scroll-view>
    <scroll-view class="categories-right" scroll-y>
      <view v-for="item in secondAndThirdLeveCategries" :key="">

      </view>

    </scroll-view>
  </view>
</template>

<script>
export default {
  data(){
    return {
      categories:[], //分类列表
      currentIndex:0 //默认选中的一级分类的索引
    }
  },
  computed: {
    secondAndThirdLeveCategries(){
      return this.categories.length>0&&this.categories[this.currentIndex].children
    }
  },
  onLoad(){
    this.getCategoriesData()
  },
  methods:{
    async getCategoriesData(){
      const res = await this.$axios.get('categories')
      this.categories = res.data.message
    },
    changeSelectIndex(index){
      this.currentIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
.categories {
  display: flex;
  margin-top: 10px;
  &-left {
    width: 200rpx;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
    &-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200rpx;
      height: 100rpx;
      position: relative;
    }
    &-active {
      background: #fff;
      &::before {
        position: absolute;
        content: '';
        background-color: #ff2d4a;
        left: 0;
        top: 10rpx;
        width: 5px;
        height: 80rpx;
      }
    }
  }
  &-right {
    flex: 1;
    background-color: white;
    &-item {
      &-title {
        display: flex;
        justify-content: center;
        align-items: center;
        &::before {
          content: '/';
          color: #eeeeee;
          margin-right: 20rpx;
        }

        &::after {
          content: '/';
          color: #eeeeee;
          margin-left: 20rpx;
        }
      }
      &-body {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
}
image {
  width: 100rpx;
  height: 80rpx;
}
.right-body-item {
  height: 200rpx;
  width: 33.33333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-title{
    margin-top:5rpx;
  }
}
</style>
