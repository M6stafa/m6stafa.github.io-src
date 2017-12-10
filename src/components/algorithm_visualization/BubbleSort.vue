<script>
  import _ from 'lodash';
  import AlgorithmMixin from './Algorithm.mixin';
  import SortMixin from './Sort.mixin';

  export default {
    mixins: [AlgorithmMixin, SortMixin],

    data() {
      return {
        name: 'Bubble Sort',
      };
    },

    methods: {
      * algorithm() {
        const values = _.cloneDeep(this.values);
        const isCorrects = _.cloneDeep(this.isCorrects);
        const initChecks = _.cloneDeep(this.checks);
        let checks = _.cloneDeep(this.checks);

        for (let step = 0; step < values.length; step += 1) {
          for (let p = 0; p < values.length - 1 - step; p += 1) {
            checks = _.cloneDeep(initChecks);
            checks[values[p]] = 0;
            checks[values[p + 1]] = 0;

            yield this.createSnapshot(values, isCorrects, checks);

            this.numberOfComparisons += 1;
            if (values[p] > values[p + 1]) {
              this.numberOfSwaps += 1;
              [values[p], values[p + 1]] = [values[p + 1], values[p]]; // swap

              yield this.createSnapshot(values, isCorrects, checks);
            }
          }

          isCorrects[this.numOfValues - step - 1] = true;

          yield this.createSnapshot(values, isCorrects, initChecks);
        }
      },
    },
  };
</script>
