<template>
  <view class="categories">
    <!-- 一级分类 -->
     <scroll-view :style="{height:(windowHeight-10)+'px'}" class="categories-left" scroll-y>
       <view  @click="changeselectIndex(index)" :class="['categories-left-item',index===currentIndex?'categories-left-active':'']" 
        v-for="(item,index) in categories" :key="item.cat_id">
             <text>
               {{item.cat_name}}
             </text>
       </view>
     </scroll-view>
     <!-- 二级分类 -->
      <scroll-view  :style="{height:(windowHeight-10)+'px'}" class="categories-right" scroll-y>
      <view class="categories-right-item" v-for="item in secondAndThirdLeveCategries" :key="item.cat_id">
           <view class="categories-right-item-title">
               <text>
               {{item.cat_name}}
               </text>
           </view>
           <!-- 三级分类 -->
           <view class="categories-right-item-body" >
            <view class="right-body-item" v-for="(submit,submitId) in item.children" :key="submitId">
              <image :src="submit.cat_icon"></image>
              <text class="right-body-item-body">
               {{submit.cat_name}}
              </text>
            </view> 
           </view>
      </view>
    </scroll-view>
  </view>
</template>
<script>
export default {
  data(){
    return{
     categories:[],//分类列表
     currentIndex:0,  //默认选中
     windowHeight:0,
    }

  },
  computed: {
    secondAndThirdLeveCategries(){
      return this.categories.length>0&&this.categories[this.currentIndex].children
    }
  },
  onLoad(){
       this.getcategoryData()
       this.windowHeight=wx.getSystemInfoSync().windowHeight
  },
 methods:{
   async  getcategoryData(){
     const res= await this.$axios.get('categories')
     this.categories= res.data.message
      
   },
   changeselectIndex(index){
     this.currentIndex=index
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
      text {
        color: black;
      }
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
        margin-top: 5rpx;
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
    color:black;
    margin-top:5rpx;
  }
}
</style>
