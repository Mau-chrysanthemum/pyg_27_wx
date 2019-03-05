<template>
  <view>
    <!-- 楼层的头部 -->
    <view class="floor-head">
      <image :src="floordata.floor_title.image_src" />
    </view>
    <!-- 楼层的body -->
    <view class="floor-body">
      <!-- 楼层body的左边 -->
      <view class="floor-body-left">
        <image :src="floordata.product_list[0].image_src" />
      </view>
      <!-- 楼层body的右边 -->
      <view class="floor-body-right">
        <!--
        <view v-if="index > 0" v-for="(item,index) in floordata.product_list" :key="item.name">
          <image :style="{width:item.image_width+'rpx'}" :src="item.image_src"/>
        </view>
        -->
        <view
          v-for="item in getLast4Item"
          :key="item.name"
        >
          <image
            :style="{width:item.image_width+'rpx'}"
            :src="item.image_src"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    floordata: Object
  },
  computed:{
    // js数组的 map some filter forEach
    getLast4Item(){
      return this.floordata.product_list.filter((item,index) => index > 0)
    }
  }
}
</script>

<style lang="less" scoped>
.floor {
  margin-top: 20rpx;
  background-color: white;
  &-head {
    width: 750rpx;
    height: 59rpx;
    image {
      margin: 10rpx 0rpx 0rpx 10rpx;
      width: 100%;
      height: 100%;
    }
  }
  &-body {
    display: flex;
    padding: 20rpx 16rpx 10rpx 16rpx;
    &-left {
      width: 232rpx;
      height: 386rpx;
      image {
        width: 100%;
        height: 100%;
      }
    }
    &-right {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      image {
        height: 188rpx;
        margin: 0 0 10rpx 10rpx;
      }
    }
  }
}
</style>

