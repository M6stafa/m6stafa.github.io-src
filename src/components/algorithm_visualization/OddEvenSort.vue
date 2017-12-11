<script>
  import _ from 'lodash';
  import AlgorithmMixin from './Algorithm.mixin';
  import SortMixin from './Sort.mixin';

  export default {
    mixins: [AlgorithmMixin, SortMixin],

    data() {
      return {
        name: 'Odd-Even Sort',
        numOfValues: 64,
        transitionDuration: 150,
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
          const pow2Step = 2 ** step;

          for (let subStep = 1; subStep <= step; subStep += 1) {
            const checkStep = 2 ** (step - subStep);
            const checkOffset = subStep === 1 ? 0 : checkStep;

            checks = _.cloneDeep(initChecks);
            const beforeSwapsValues = _.cloneDeep(values);

            let checksValue = 0;
            for (let i = 0; i < this.numOfValues; i += pow2Step) {
              for (let idx = i + checkOffset; idx < (i + pow2Step) - checkOffset; idx += 1) {
                if (((idx - checkOffset) % (2 * checkStep)) < checkStep) {
                  this.numberOfComparisons += 1;
                  checks[values[idx]] = checksValue;
                  checks[values[idx + checkStep]] = checksValue;
                  checksValue += 1;

                  if (values[idx] > values[idx + checkStep]) {
                    this.numberOfSwaps += 1;
                    // eslint-disable-next-line
                    [values[idx], values[idx + checkStep]] = [values[idx + checkStep], values[idx]]; // swap
                  }
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
