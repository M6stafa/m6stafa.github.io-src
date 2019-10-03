// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js

module.exports = function getQuasarConfig(_ctx) {
  return {
    // Enable PreFetch Feature
    preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://quasar.dev/quasar-cli/cli-documentation/boot-files
    boot: [
      'i18n',
      'axios',
      'config',
    ],

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
    css: [
      'app.scss',
      'vazir.scss',
    ],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      'fontawesome-v5',
      'roboto-font', // optional, you are not bound to it
    ],

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
    framework: {
      iconSet: 'fontawesome-v5',
      lang: 'en-us',
      // lang: 'fa-ir', // Quasar language, select a RTL lang

      // Possible values for "all":
      // * 'auto' - Auto-import needed Quasar components & directives
      //            (slightly higher compile time; next to minimum bundle size; most convenient)
      // * false  - Manually specify what to import
      //            (fastest compile time; minimum bundle size; most tedious)
      // * true   - Import everything from Quasar
      //            (not treeshaking Quasar; biggest bundle size; convenient)
      all: false,

      components: [
        'QLayout',
        'QPage',
        'QPageContainer',
        'QHeader',
        'QFooter',
        'QDrawer',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QAvatar',
        'QSeparator',
        'QImg',
        'QIcon',
        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QTooltip',
        'QChip',
        'QTimeline',
        'QTimelineEntry',
        'QResizeObserver',
      ],

      directives: [
        'Ripple',
      ],

      // Quasar plugins
      plugins: [],
    },

    // https://quasar.dev/quasar-cli/cli-documentation/supporting-ie
    supportIE: false,

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
    build: {
      scopeHoisting: true,
      rtl: true,
      vueRouterMode: 'history',
      // showProgress: false,
      // gzip: true,
      // analyze: true,
      // preloadChunks: false,
      // extractCSS: false,

      // https://quasar.dev/quasar-cli/cli-documentation/handling-webpack
      extendWebpack(cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            // eslint-disable-next-line global-require
            formatter: require('eslint').CLIEngine.getFormatter('stylish'),
          },
        });
      },
    },

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
    devServer: {
      // https: true,
      port: 9090,
      open: true, // opens browser window automatically
    },

    // animations: 'all', // --- includes all animations
    // https://quasar.dev/options/animations
    animations: [],
  };
};
