
<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue';

const tableData = ref(Array())

/**
 * 
 * start
 * 通过改动下列代码实现总数据量始终等于 = tableData.length
 * 注：不改动页面
 * 
 */
const tableLength = "总数据量为：" + tableData.value.length

// end


// 数据初始化
onBeforeMount(()=>{
  let date = "2016-05-" 
  
  for(let i=0; i < 10;i++){
    let item = {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    }
    item.date = date + `${2 + i}`
    console.log(item);
    
    tableData.value.push(item)
  }

  console.log(tableData);
  
})

function handleDelete(index:number){
  tableData.value.splice(index,1)
}


</script>

<template>
  <main class="main">
    <div class="content">
      <div>
        <h3>{{tableLength}}</h3>
      </div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
        <el-table-column align="right">
          <template #default="scope">
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </main>
</template>

<style scoped>
.main{
  height: 100vh;
  display: flex;
  align-items: center;
}
.content{
  width: 100%;
}
</style>
