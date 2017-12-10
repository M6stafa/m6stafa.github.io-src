<template>
  <svg :viewBox="`0 0 ${viewBoxWidth} ${viewBoxHeight}`" preserveAspectRatio="none meet">
    <slot></slot>
  </svg>
</template>

<script>
  export default {
    props: {
      viewBoxWidth: {
        type: Number,
        required: true,
      },
      viewBoxHeight: {
        type: Number,
        required: true,
      },
    },
  };
</script>
