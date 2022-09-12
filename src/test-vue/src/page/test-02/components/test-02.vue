
<script setup lang="ts">


</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <slot name="title"></slot>
      </el-aside>
      <el-main>
        <slot name="main"></slot>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.el-aside {
  background-color: rgb(101, 196, 247);
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-main{
  background-color: rgb(194, 224, 241);
}
</style>
