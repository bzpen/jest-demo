<script setup lang="ts">
  import Test02 from './components/test-02.vue';
  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
  
</script>  
<template>
  <Test02>
    <!-- start 下文编辑实现效果图样式 -->
    Hello Word
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <!-- end -->
  </Test02>
  <div>
    <p>
      vue测试二效果图
    </p>
    <img src="../../assets/test-01.jpg" alt="vue测验2">
  </div>
</template>


<style scoped>

</style>
