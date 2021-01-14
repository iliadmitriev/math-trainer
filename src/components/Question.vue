<template>
  <div class="app-question">
    <div class="alert">
      <h3>{{ x }} + {{ y }} = ?</h3>
      <hr>
      <div class="buttons">
        <button class="btn btn-success"
                v-for="number in answers"
                @click="onAnswer(number)"
        >{{number}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  data() {
    return {
      x: mtRand(100, 200),
      y: mtRand(100, 200)
    }
  },
  computed: {
    rightAnswer() {
      return this.x + this.y
    },
    answers() {
      const res = [this.rightAnswer]
      while (res.length < 4) {
        let num = mtRand(this.rightAnswer - 20, this.rightAnswer + 20)
        if (!res.includes(num)) {
          res.push(num)
        }
      }
      // randomize sort
      return res.sort(() => Math.random() > 0.5 ? 1 : -1 )
    }
  },
  methods: {
    onAnswer(number) {
      if (number == this.rightAnswer) {
        this.$emit('onSuccess')
      } else {
        this.$emit('onError', `${this.x} + ${this.y} = ${this.rightAnswer}!`)
      }
    }
  }
}

function mtRand(min = 100, max = 200) {
  let diff = max - min;
  return Math.floor(Math.random() * (diff + 1) + min)
}
</script>

<style scoped>
.alert {
  padding-top: 20px;
  background-color: #eee;
}

.buttons {
  display: flex;
  justify-content: space-around;
}

.btn {
  margin: 20px 0;
}

</style>
