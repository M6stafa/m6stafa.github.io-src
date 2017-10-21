<template>
  <div id="bubble-sort">
    <h5>Bubble Sort</h5>
    <svg :viewBox="`0 0 ${viewBoxWidth} ${viewBoxHeight}`" preserveAspectRatio="none meet"></svg>
    <controls
      :isPaused="isPaused"
      @togglePlayPause="togglePlayPause"
      @changeSnapshot="changeSnapshot"
    ></controls>
  </div>
</template>

<script>
  import * as d3 from 'd3';
  import _ from 'lodash';
  import AlgorithmMixin from './Algorithm.mixin';

  export default {
    mixins: [AlgorithmMixin],

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

      * algorithm() {
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

              yield {
                step,
                pointer: p,
                data: _.cloneDeep(arr),
              };
            }
          }
          yield {
            step: step + 1,
            pointer: null,
            data: _.cloneDeep(arr),
          };
        }
      },

      firstSnapshot() {
        return {
          step: 0,
          pointer: null,
          data: this.data,
        };
      },

      initView() {
        // eslint-disable-next-line max-len
        this.radiusMultiplier = (this.viewBoxWidth - ((this.data.length + 1) * this.circleGap)) / (_.sum(this.data) * 2);
        this.viewBoxHeight = (_.max(this.data) * 2 * this.radiusMultiplier) + 100;

        this.svg = d3.select('svg');
        this.svg.attr('viewBox', `0 0 ${this.viewBoxWidth} ${this.viewBoxHeight}`);
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
