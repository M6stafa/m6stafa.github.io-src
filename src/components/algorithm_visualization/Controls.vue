<template>
  <div class="center-align">
    <a href="#" @click.prevent="$emit('changeSnapshot', -1)"><i class="medium material-icons">navigate_before</i></a>
    <a href="#" @click.prevent="$emit('togglePlayPause')"><i class="medium material-icons">{{ isPaused ? 'play_arrow' : 'pause' }}</i></a>
    <a href="#" @click.prevent="$emit('changeSnapshot', +1)"><i class="medium material-icons">navigate_next</i></a>
  </div>
</template>

<script>
  export default {
    props: {
      isPaused: {
        type: Boolean,
        required: true,
      },
    },
  };
</script>
