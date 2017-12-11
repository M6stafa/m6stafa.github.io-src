import Controls from './Controls';


export default {
  components: {
    controls: Controls,
  },

  data() {
    return {
      numOfValues: null,
      values: null,
      snapshots: [],
      cursor: 0,
      isPaused: true,
      playInterval: null,
      transitionDuration: 10,

      playTransitionDuration: 0,
      pauseTransitionDuration: 250,
    };
  },

  created() {
    const self = this;

    self.playTransitionDuration = self.transitionDuration;
    self.transitionDuration = self.pauseTransitionDuration;

    self.randomizeValues();
    self.snapshots.push(this.firstSnapshot());

    setTimeout(() => {
      const algo = self.algorithm();
      for (;;) {
        const res = algo.next();
        if (res.done) {
          break;
        }

        self.snapshots.push(res.value);
      }
    }, 0);
  },

  mounted() {
    this.initView();
    this.update(this.snapshots[this.cursor]);
    this.update(this.snapshots[this.cursor]);
  },

  methods: {
    // * algorithm() {},
    // randomizeValues() {},
    // initView() {},
    // firstSnapshot() {},
    // update(snapshot) {},

    togglePlayPause() {
      this.isPaused = !this.isPaused;

      if (this.isPaused) {
        clearInterval(this.playInterval);
        this.transitionDuration = this.pauseTransitionDuration;
      } else {
        const self = this;
        self.transitionDuration = self.playTransitionDuration;
        this.playInterval = setInterval(() => {
          if (self.cursor < self.snapshots.length - 1) {
            self.cursor += 1;
            self.update(self.snapshots[self.cursor]);
          } else {
            // self.isPaused = true;
            // clearInterval(self.playInterval);
          }
        }, self.transitionDuration);
      }
    },

    changeSnapshot(step) {
      if (!this.isPaused) {
        this.togglePlayPause();
      }

      const newCursor = this.cursor + step;
      if (newCursor >= 0 && newCursor < this.snapshots.length) {
        this.cursor = newCursor;
        this.update(this.snapshots[newCursor]);
      }
    },
  },
};
