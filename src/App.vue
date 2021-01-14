<template>
  <div class="training">
    <h1>Математический тренажер</h1>
    <hr>
    <div class="box">
      <app-progress-bar
        :progStyle="progressStyles"
      >
      </app-progress-bar>
      <transition name="flip" mode="out-in">
        <app-start-screen
          v-if="state=='start'"
          @onStart="onStart"
        >
        </app-start-screen>
        <app-question
          v-else-if="state=='question'"
          @onSuccess="onQuestionSuccess"
          @onError="onQuestionError"
        >
        </app-question>
        <app-message
          v-else-if="state=='message'"
          :text="message.text"
          :type="message.type"
          @onNext="onNext"
        ></app-message>
        <app-result-screen
          v-else-if="state=='result'"
          :stats="stats"
          @repeat="onStart"
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
      state: 'start',
      stats: {
        success: 0,
        error: 0
      },
      message: {
        type: '',
        text: ''
      },
      questionMax: 3
    }
  },
  computed: {
    questDone() {
      return this.stats.success + this.stats.error
    },
    progressStyles () {
      return {
        width: Math.round(this.questDone / this.questionMax * 100) + '%'
      }
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
      if (this.questDone < this.questionMax) {
        this.state = 'question'
      } else {
        this.state = 'result'
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
