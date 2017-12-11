import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
// Algorithm Visualization Components
import BaseAV from '@/components/algorithm_visualization/Base';
import AVList from '@/components/algorithm_visualization/List';
import AVBubbleSort from '@/components/algorithm_visualization/BubbleSort';
import AVBitonicSort from '@/components/algorithm_visualization/BitonicSort';
import AVOddEvenSort from '@/components/algorithm_visualization/OddEvenSort';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/algovis',
      component: BaseAV,
      children: [
        { path: '', component: AVList },
        { path: 'bubble_sort', component: AVBubbleSort },
        { path: 'bitonic_sort', component: AVBitonicSort },
        { path: 'oddeven_sort', component: AVOddEvenSort },
      ],
    },
  ],
});

export default router;
