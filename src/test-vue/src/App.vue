<script setup lang="ts">

</script>

<template>
  <div>
    <h2> 引入路由使得 test-01、test-02、test-03 能够通过路由访问</h2>
    <ul>
      <li>
        页面位置 : 路由
      </li>
      <li>
        ./test-01/index : /test-01
      </li>
      <li>
        ./test-02/index : /test-02
      </li>
      <li>
        ./test-03/index : /test-03
      </li>
    </ul>
  </div>
</template>

<style scoped>
  li{
    list-style: none;
    font-size: 24px;
    margin-top: 10px;
  }
</style>
