<template>
  <div class="app-result-screen">
    <div class="alert alert-primary">
      <h3>Правильных: {{stats.success}}</h3>
      <h3>Ошибок: {{stats.error}}</h3>
      <hr>
      <button class="btn btn-primary" @click="$emit('repeat')">Повторить</button>
      <button class="btn btn-primary" @click="$emit('nextLevel')">Следующий уровень</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultScreen",
  props: {
    stats: Object
  }
}
</script>

<style scoped>

</style>
