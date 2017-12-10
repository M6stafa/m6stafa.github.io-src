import * as d3 from 'd3';
import _ from 'lodash';
import SVG from './SVG';

export default {
  components: {
    'AV-SVG': SVG,
  },

  template: `
    <div id="algovis-sort">
      <h5>{{ name }}</h5>
      <AV-SVG :viewBoxWidth="viewBoxWidth" :viewBoxHeight="viewBoxHeight" />
      <p>Data generate randomly after each refresh, these stats is for current data:</p>
      <p>number of values: {{ numOfValues }}, number of swaps: {{ numberOfSwaps }}, number of Comparisons: {{ numberOfComparisons }}</p>
      <controls
        :isPaused="isPaused"
        @togglePlayPause="togglePlayPause"
        @changeSnapshot="changeSnapshot"
      ></controls>
    </div>`,

  data() {
    return {
      name: 'Fill the name',

      viewBoxWidth: 800,
      viewBoxHeight: 500,
      svg: null,

      step: 10,
      scaleValues: null,

      isCorrects: null,
      checks: null,

      transitionDuration: 10,

      numberOfSwaps: 0,
      numberOfComparisons: 0,

      checksColor: null,
    };
  },

  methods: {
    update(snapshot) {
      const self = this;

      const g = self.svg.selectAll('g').data(snapshot.values, d => d);

      g.enter().append('g')
        // Rect
        .append('rect')
        .attr('y', d => self.viewBoxHeight - self.scaleValues(d))
        .attr('width', self.step)
        .attr('height', d => self.scaleValues(d));

      // Update g
      g.transition()
        .duration(self.transitionDuration)
        .attr('transform', (d, i) => `translate(${self.step * i}, 0)`);

      // Update Rect
      g.select('rect')
        .style('stroke', d => self.color(snapshot.isCorrects[d], snapshot.checks[d]))
        .style('fill', d => self.color(snapshot.isCorrects[d], snapshot.checks[d]));
    },

    color(isCorrects, check) {
      if (isCorrects) {
        return 'hsl(120,100%,50%)'; // correct color: green
      }

      if (check >= 0) {
        return this.checksColor[check % this.checksColor.length]; // check color
      }

      return 'hsl(0,100%,50%)'; // normal: red
    },

    createSnapshot(values, isCorrects, checks) {
      return {
        values: _.cloneDeep(values),
        isCorrects: _.cloneDeep(isCorrects),
        checks: _.cloneDeep(checks),
      };
    },

    firstSnapshot() {
      return this.createSnapshot(this.values, this.isCorrects, this.checks);
    },

    randomizeValues() {
      this.numOfValues = 64;

      this.values = Array(this.numOfValues);
      this.isCorrects = Array(this.numOfValues);
      this.checks = Array(this.numOfValues);

      for (let i = 0; i < this.numOfValues; i += 1) {
        this.values[i] = i;
        this.isCorrects[i] = false;
        this.checks[i] = -1;
      }

      this.values = _.shuffle(this.values);
    },

    initView() {
      this.svg = d3.select('svg');
      this.step = Math.floor(this.viewBoxWidth / this.numOfValues);
      this.scaleValues = d3.scaleLinear()
        .domain([0, this.numOfValues - 1])
        .range([Math.floor(this.viewBoxHeight / this.numOfValues), this.viewBoxHeight]);

      this.checksColor = [];
      const offsetColor = 250;
      const stepColor = 30;
      for (let i = 0 + offsetColor; i <= 360 + offsetColor; i += stepColor) {
        this.checksColor.push(`hsl(${i % 360},100%,75%)`);
      }
    },
  },
};
