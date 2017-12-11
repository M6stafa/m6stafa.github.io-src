<script>
  import _ from 'lodash';
  import AlgorithmMixin from './Algorithm.mixin';
  import SortMixin from './Sort.mixin';

  export default {
    mixins: [AlgorithmMixin, SortMixin],

    data() {
      return {
        name: 'Bitonic Sort',
        numOfValues: 64,
      };
    },

    methods: {
      * algorithm() {
        const values = _.cloneDeep(this.values);
        const isCorrects = _.cloneDeep(this.isCorrects);
        const initChecks = _.cloneDeep(this.checks);
        let checks = [];

        const numOfSteps = Math.log2(this.numOfValues);
        for (let step = 1; step <= numOfSteps; step += 1) {
          const maxCheckStep = 2 ** (step - 1);
          const pow2Step = 2 ** step;

          for (let checkStep = maxCheckStep; checkStep >= 1; checkStep /= 2) {
            checks = _.cloneDeep(initChecks);
            const beforeSwapsValues = _.cloneDeep(values);

            let checksValue = 0;
            for (let i = 0; i < this.numOfValues; i += 1) {
              if (i % (checkStep * 2) < checkStep) {
                const up = i % (pow2Step * 2) < pow2Step;

                this.numberOfComparisons += 1;
                checks[values[i]] = checksValue;
                checks[values[i + checkStep]] = checksValue;
                checksValue += 1;

                if ((values[i] > values[i + checkStep]) === up) {
                  this.numberOfSwaps += 1;
                  [values[i], values[i + checkStep]] = [values[i + checkStep], values[i]]; // swap
                }
              }
            }

            yield this.createSnapshot(beforeSwapsValues, isCorrects, checks);
            yield this.createSnapshot(values, isCorrects, checks);
          }
        }

        for (let i = 0; i <= this.numOfValues; i += 1) {
          isCorrects[i] = true;
        }
        yield this.createSnapshot(values, isCorrects, checks);
      },
    },
  };
</script>
