<template>
  <div class="training">
    <h1>Математический тренажер</h1>
    <h2>Уровень {{level}}</h2>
    <hr>
    <div class="box">
      <app-progress-bar
        :progStyle="progressStyles"
      >
      </app-progress-bar>
      <transition name="flip" mode="out-in">
        <app-start-screen
          v-if="state==='start'"
          @onStart="onStart"
        >
        </app-start-screen>
        <app-question
          v-else-if="state==='question'"
          :level="levels[level-1]"
          @onSuccess="onQuestionSuccess"
          @onError="onQuestionError"
        >
        </app-question>
        <app-message
          v-else-if="state==='message'"
          :text="message.text"
          :type="message.type"
          @onNext="onNext"
        ></app-message>
        <app-result-screen
          v-else-if="state==='result'"
          :stats="stats"
          @repeat="onStart"
          @nextLevel="nextLevel"
        ></app-result-screen>
        <div v-else>Unknown state</div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import ProgressBar from "./components/ProgressBar.vue";
import StartScreen from "./components/StartScreen.vue";
import Question from "./components/Question.vue";
import ResultScreen from "./components/ResultScreen.vue";
import Message from "./components/Message.vue";

export default {
  name: 'app',
  components: {
    'app-progress-bar': ProgressBar,
    'app-start-screen': StartScreen,
    'app-question': Question,
    'app-message': Message,
    'app-result-screen': ResultScreen
  },
  setup() {
    const level = ref(1);
    const levels = ref([
      {variants: 4, min: 100, max: 200, maxQuestions: 3, range: 20},
      {variants: 5, min: 100, max: 400, maxQuestions: 4, range: 20},
      {variants: 5, min: 100, max: 600, maxQuestions: 5, range: 20},
      {variants: 6, min: 100, max: 1000, maxQuestions: 6, range: 20}
    ]);
    const state = ref('start');
    const stats = ref({
      success: 0,
      error: 0
    });
    const message = ref({
      type: '',
      text: ''
    });

    const questDone = computed(() => {
      return stats.value.success + stats.value.error;
    });

    const progressStyles = computed(() => {
      return {
        width: Math.round(questDone.value / maxLevelQuestions.value * 100) + '%'
      };
    });

    const maxLevelQuestions = computed(() => {
      return levels.value[level.value - 1].maxQuestions;
    });

    const onStart = () => {
      state.value = 'question';
      stats.value.success = 0;
      stats.value.error = 0;
    };

    const onQuestionSuccess = () => {
      state.value = 'message';
      message.value.text = 'Правильно';
      message.value.type = 'alert-success';
      stats.value.success++;
    };

    const onQuestionError = (msg) => {
      state.value = 'message';
      message.value.text = msg;
      message.value.type = 'alert-warning';
      stats.value.error++;
    };

    const onNext = () => {
      if ( questDone.value < maxLevelQuestions.value ) {
        state.value = 'question';
      } else {
        state.value = 'result';
      }
    };

    const nextLevel = () => {
      if (levels.value.length > level.value) {
        level.value += 1;
        onStart();
      } else {
        state.value = 'message';
        message.value.text = 'Вы победили мой друг';
        message.value.type = 'alert-info';
      }
    };

    return {
      level,
      levels,
      state,
      stats,
      message,
      questDone,
      progressStyles,
      maxLevelQuestions,
      onStart,
      onQuestionSuccess,
      onQuestionError,
      onNext,
      nextLevel
    };
  }
}
</script>

<style scoped>

.training {
  max-width: 700px;
  margin: 20px auto;
}

.flip-enter {

}

.flip-enter-active {
  animation: flipInX 0.1s linear;
}

.flip-leave {

}

.flip-leave-active {
  animation: flipOutX 0.1s linear;
}

@keyframes flipInX {
  from {
    transform: rotateX(90deg);
  }
  to {
    transform: rotateX(0deg);
  }
}

@keyframes flipOutX {
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(90deg);
  }
}

</style>
