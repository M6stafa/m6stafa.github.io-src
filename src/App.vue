<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <div class="container">
          <a class="dropdown-button hide-on-large-only" href="#" data-activates="mobile-nav"><i class="material-icons">menu</i></a>
          <ul class="left hide-on-med-and-down">
            <nav-items></nav-items>
          </ul>
          <ul class="side-nav" id="mobile-sidenav">
            <nav-items></nav-items>
          </ul>
          <ul id="mobile-nav" class="dropdown-content">
            <nav-items></nav-items>
          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import NavItems from '@/components/NavItems';

export default {
  dependencies: ['$'],

  components: {
    'nav-items': NavItems,
  },

  mounted() {
    this.$('.dropdown-button').dropdown();
  },
};
</script>

<style>
  body {
    background-color: #F1F1F1;
    min-width: 300px;
  }

  .nav-wrapper, #mobile-nav {
    background-color: teal;
  }

  .dropdown-content li > a {
    color: white;
  }
  .dropdown-content li:hover {
    background-color: teal;
  }
</style>
