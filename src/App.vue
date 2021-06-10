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
export default {
  name: 'app',
  data() {
    return {
      level: 1,
      levels: [
        {variants: 4, min: 100, max: 200, maxQuestions: 3, range: 20},
        {variants: 5, min: 100, max: 400, maxQuestions: 4, range: 20},
        {variants: 5, min: 100, max: 600, maxQuestions: 5, range: 20},
        {variants: 6, min: 100, max: 1000, maxQuestions: 6, range: 20}
      ],
      state: 'start',
      stats: {
        success: 0,
        error: 0
      },
      message: {
        type: '',
        text: ''
      }
    }
  },
  computed: {
    questDone() {
      return this.stats.success + this.stats.error
    },
    progressStyles () {
      return {
        width: Math.round(this.questDone / this.maxLevelQuestions * 100) + '%'
      }
    },
    maxLevelQuestions() {
      return this.levels[this.level - 1].maxQuestions
    }
  },
  methods: {
    onStart() {
      this.state = 'question'
      this.stats.success = 0
      this.stats.error = 0
    },
    onQuestionSuccess() {
      this.state = 'message'
      this.message.text = 'Правильно'
      this.message.type = 'alert-success'
      this.stats.success++
    },
    onQuestionError(msg) {
      this.state = 'message'
      this.message.text = msg
      this.message.type = 'alert-warning'
      this.stats.error++
    },
    onNext() {
      if ( this.questDone < this.maxLevelQuestions ) {
        this.state = 'question'
      } else {
        this.state = 'result'
      }
    },
    nextLevel() {
      if (this.levels.length > this.level) {
        this.level += 1
        this.onStart()
      } else {
        this.state = 'message'
        this.message.text = 'Вы победили мой друг'
        this.message.type = 'alert-info'
      }
    }
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
