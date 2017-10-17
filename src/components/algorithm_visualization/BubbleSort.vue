<template>
  <div id="bubble-sort">
    <svg :viewBox="`0 0 ${viewBoxWidth} ${viewBoxHeight}`" preserveAspectRatio="none meet"></svg>
  </div>
</template>

<script>
  import * as d3 from 'd3';
  import _ from 'lodash';

  export default {
    name: 'av-bubble-sort',

    data() {
      return {
        viewBoxWidth: 800,
        viewBoxHeight: 600,

        data: [5, 3, 6, 4, 2, 1],
        svg: null,

        transitionDuration: 500,
        circleGap: 10,
        radiusMultiplier: undefined,
      };
    },

    mounted() {
      // eslint-disable-next-line max-len
      this.radiusMultiplier = (this.viewBoxWidth - ((this.data.length + 1) * this.circleGap)) / (_.sum(this.data) * 2);
      this.viewBoxHeight = (_.max(this.data) * 2 * this.radiusMultiplier) + 100;

      this.svg = d3.select('svg');
      this.svg.attr('viewBox', `0 0 ${this.viewBoxWidth} ${this.viewBoxHeight}`);
      this.update({
        step: 0,
        pointer: 0,
        data: this.data,
      });

      const self = this;

      setTimeout(() => {
        const sort = self.bubbleSort();
        const interval = setInterval(() => {
          const res = sort.next();
          if (res.done) {
            clearInterval(interval);
            return;
          }
          self.update(res.value);
        }, self.transitionDuration);
      }, 1000);
    },

    methods: {
      update(data) {
        const step = data.step;
        const pointer = data.pointer;
        const radiuses = data.data;

        const prefixSum = [];
        let sum = 0;
        for (let i = 0; i < radiuses.length; i += 1) {
          prefixSum.push(sum);
          sum += radiuses[i];
        }

        // Circles
        const circles = this.svg.selectAll('circle')
          .data(radiuses, d => d);

        circles
          .classed('correct', (d, i) => i >= radiuses.length - step)
          .classed('check', (d, i) => pointer !== null && (i === pointer || i === pointer + 1))
          .transition()
          .duration(this.transitionDuration)
          .attr('cx', (d, i) => this.calcCX(i, d, prefixSum[i]));

        circles.enter().append('circle')
          .classed('check', (d, i) => pointer !== null && (i === pointer || i === pointer + 1))
          .attr('r', d => d * this.radiusMultiplier)
          .attr('cy', '50%')
          .attr('cx', (d, i) => this.calcCX(i, d, prefixSum[i]));
      },

      calcCX(index, radius, prefixSum) {
        return ((index + 1) * this.circleGap) +
          (radius * this.radiusMultiplier) +
          (2 * prefixSum * this.radiusMultiplier);
      },

      * bubbleSort() {
        const arr = _.cloneDeep(this.data);
        let step = 0;
        let p = 0; // pointer
        for (step = 0; step < arr.length; step += 1) {
          for (p = 0; p < arr.length - 1 - step; p += 1) {
            yield {
              step,
              pointer: p,
              data: _.cloneDeep(arr),
            };

            if (arr[p] > arr[p + 1]) {
              [arr[p], arr[p + 1]] = [arr[p + 1], arr[p]]; // swap
            }

            yield {
              step,
              pointer: p,
              data: _.cloneDeep(arr),
            };
          }
          yield {
            step: step + 1,
            pointer: null,
            data: _.cloneDeep(arr),
          };
        }
      },
    },
  };
</script>

<style>
  #bubble-sort svg circle {
    fill: rgba(0, 0, 255, 0.5);
  }

  #bubble-sort svg circle.correct {
    fill: rgba(0, 255, 0, 0.5);
  }

  #bubble-sort svg circle.check {
    fill: rgba(255, 165, 0, 0.5);
  }
</style>
