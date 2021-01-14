<template>
  <div class="app-result-screen">
    <div class="alert alert-primary">
      <h3>Правильных: {{stats}}</h3>
      <h3>Ошибок:</h3>
      <hr>
      <button class="btn btn-primary" @click="$emit('repeat')">Повторить</button>
      <button class="btn btn-primary" @click="$emit('nextLevel')">Следующий уровень</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultScreen",
  prop: ['stats']
}
</script>

<style scoped>

</style>
