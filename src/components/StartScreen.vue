<template>
  <div class="app-start-screen">
    <div class="alert alert-secondary">
      <h3>Вы готовы начать?</h3>
      <button class="btn btn-success"
              id="btnStart"
              @click="clickBtnStart"
      >
        Начали
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartScreen",
  methods: {
    clickBtnStart(event) {
      this.$emit('onStart')
    }
  }
}
</script>

<style scoped>
.alert {
  text-align: center;
}

h3, .btn {
  margin: 30px 0;
}

</style>
