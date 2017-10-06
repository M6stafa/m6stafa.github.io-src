<template>
  <div id="bubble-sort">
    <svg width="600" height="500">
    </svg>
  </div>
</template>

<script>
  import * as d3 from 'd3';
  import _ from 'lodash';

  export default {
    name: 'av-bubble-sort',

    data() {
      return {
        data: [12, 5, 1, 2, 8, 10],
        svg: null,

        transitionDuration: 500,
        circleGap: 10,
        radiusMultiplier: 5,
      };
    },

    mounted() {
      this.svg = d3.select('svg');
      this.update(this.data);

      const self = this;
      setTimeout(() => {
        const sort = self.bubbleSort();
        const interval = setInterval(() => {
          const res = sort.next();
          if (res.done) {
            clearInterval(interval);
            return;
          }
          self.update(res.value.data);
        }, self.transitionDuration);
      }, 1000);
    },

    methods: {
      update(newData) {
        const prefixSum = [];
        let sum = 0;
        for (let i = 0; i < newData.length; i += 1) {
          prefixSum.push(sum);
          sum += newData[i];
        }

        const circles = this.svg.selectAll('circle')
          .data(newData, d => d);

        circles
          .transition()
          .duration(this.transitionDuration)
          .attr('cx', (d, i) => this.calcCX(i, d, prefixSum[i]));

        circles.enter().append('circle')
          .attr('r', d => d * this.radiusMultiplier)
          .attr('cy', 200)
          .attr('cx', (d, i) => this.calcCX(i, d, prefixSum[i]));
      },

      calcCX(index, radius, prefixSum) {
        return ((index + 1) * this.circleGap) +
          (radius * this.radiusMultiplier) +
          (2 * prefixSum * this.radiusMultiplier);
      },

      * bubbleSort() {
        const arr = _.cloneDeep(this.data);
        for (let i = 0; i < arr.length - 1; i += 1) {
          for (let j = 0; j < arr.length - 1 - i; j += 1) {
            if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
            }
            yield {
              pointer: j,
              data: _.cloneDeep(arr),
            };
          }
        }
      },
    },
  };
</script>

<style scoped>
  #bubble-sort {
    min-width: 200px;
    height: 500px;
  }
</style>

<style>
  #bubble-sort svg circle {
    fill: rgba(0, 0, 255, 0.5);
  }
</style>
