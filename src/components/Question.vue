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
import { ref, computed, onMounted } from 'vue';

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
  emits: ['onSuccess', 'onError'],
  setup(props, { emit }) {
    const x = ref(0);
    const y = ref(0);

    // Define the helper function
    const mtRand = (min = 100, max = 200) => {
      const diff = max - min;
      return Math.floor(Math.random() * (diff + 1) + min);
    };

    // Initialize values after setup
    onMounted(() => {
      x.value = mtRand(props.level.min, props.level.max);
      y.value = mtRand(props.level.min, props.level.max);
    });

    // Calculate initial values immediately
    x.value = mtRand(props.level.min, props.level.max);
    y.value = mtRand(props.level.min, props.level.max);

    const rightAnswer = computed(() => {
      return x.value + y.value;
    });

    const answers = computed(() => {
      const res = [rightAnswer.value];
      while (res.length < props.level.variants) {
        let num = mtRand(rightAnswer.value - props.level.range, rightAnswer.value + props.level.range);
        if (!res.includes(num)) {
          res.push(num);
        }
      }
      // randomize sort
      return res.sort(() => Math.random() > 0.5 ? 1 : -1);
    });

    const onAnswer = (number) => {
      if (number == rightAnswer.value) {
        emit('onSuccess');
      } else {
        emit('onError', `${x.value} + ${y.value} = ${rightAnswer.value}!`);
      }
    };

    return {
      x,
      y,
      rightAnswer,
      answers,
      onAnswer
    };
  }
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
