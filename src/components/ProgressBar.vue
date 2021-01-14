<template>
  <div class="app-progress-bar">
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        :style="progStyle"
      >
        {{progStyle.width}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: ['progStyle']

}
</script>

<style scoped>
.progress {
  margin: 20px 0;
}

.progress-bar {
  transition: width 0.3s ease-in;
}

</style>
