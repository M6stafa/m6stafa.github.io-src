<template>
  <div>
    <div id="monitor">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'algorithm-visualization-base',
  };
</script>

<style scoped>
  #monitor {
    width: 100%;
    border: 2px solid red;
  }
</style>
