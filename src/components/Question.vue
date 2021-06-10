<template>
  <div class="app-question">
    <div class="alert">
      <h3>{{ x }} + {{ y }} = ?</h3>
      <hr>
      <div class="buttons">
        <button class="btn btn-success"
                v-for="number in answers"
                @click="onAnswer(number)"
                :id="'ans' + number"
        >{{ number }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {
    level: {
      type: Object,
      validator: value => (
          value
          && value.min > 0
          && value.max > 0
          && value.max > value.min
          && value.range > 0
          && value.range <= (value.max - value.min) / 2
          && value.variants >= 4
        ),
      required: true
    }
  },
  data() {
    return {
      x: mtRand(this.level.min, this.level.max),
      y: mtRand(this.level.min, this.level.max)
    }
  },
  computed: {
    rightAnswer() {
      return this.x + this.y
    },
    answers() {
      const res = [this.rightAnswer]
      while (res.length < this.level.variants) {
        let num = mtRand(this.rightAnswer - this.level.range, this.rightAnswer + this.level.range)
        if (!res.includes(num)) {
          res.push(num)
        }
      }
      // randomize sort
      return res.sort(() => Math.random() > 0.5 ? 1 : -1)
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
