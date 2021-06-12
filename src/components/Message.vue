<template>
  <div class="app-message">
    <div class="alert"
         :class="type"
    >
      <h2>{{ text }}</h2>
      <hr>
      <button
        class="btn btn-primary"
        @click="$emit('onNext')"
        id="btnNext"
      >
        Продолжить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: ['type', 'text']
}
</script>

<style scoped>
.alert {
  text-align: center;
}

h2, .btn {
  margin: 20px 0;
}
</style>
