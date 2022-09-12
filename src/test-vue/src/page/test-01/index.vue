<script setup lang="ts">
import { ref } from 'vue'

const numList = [1,2,3,4,5,6,7]

/**
 * 
 * 使用 v-for 和 v-if 实现将 numlist 中第5位不显示
 * 
 */

</script>

<template>
  <header>
    <el-carousel indicator-position="outside">
      <!-- start 代码修改区域 -->
      <el-carousel-item v-for="item in numList" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </el-carousel-item>
      <!-- end -->
    </el-carousel>
  </header>
</template>

<style scoped>
header{
  width: 100%;
  margin-top: 5px;
}
.el-carousel__item h3 {
  font-size: 26px;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  text-align: center;
  margin: 0px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
