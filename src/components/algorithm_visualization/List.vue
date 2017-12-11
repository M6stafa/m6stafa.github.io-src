<template>
  <div>
    <ul class="collection with-header">
      <li class="collection-header"><h4>Algorithms:</h4></li>
      <li class="collection-item" v-for="algo in algorithms" :key="algo.path">
        <router-link :to="`/algovis/${algo.path}`"><h5>{{ algo.name }}</h5></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        algorithms: [
          { name: 'Bitonic Sort', path: 'bitonic_sort' },
          { name: 'Bubble Sort', path: 'bubble_sort' },
        ],
      };
    },
  };
</script>

<style scoped>
  .collection {
    border: none;
  }

  .collection-item {
    border-bottom: none;
  }
</style>
