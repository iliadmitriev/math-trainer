import {mount} from '@vue/test-utils'
import App from "../../src/App.vue";
import StartScreen from "../../src/components/StartScreen.vue";
import ProgressBar from "../../src/components/ProgressBar.vue";
import Question from "../../src/components/Question.vue";
import ResultScreen from "../../src/components/ResultScreen.vue";
import Message from "../../src/components/Message.vue";


describe('Full Application Test', () => {
  const app = mount(App, {})

  test('start component found and start button works', async () => {
    expect(app.findComponent(StartScreen).exists()).toBe(true)
    const startButton = app.find('#btnStart')
    expect(startButton.exists()).toBe(true)
    await startButton.trigger('click')
  })



  for(let j=1; j<=3; j++) {
    it(`get a question ${j} and chose right answer`, async () => {
      expect(app.findComponent(Question).exists()).toBe(true)

      const answer = app.findComponent(Question).vm.rightAnswer
      const button = app.find('#ans' + answer)

      expect(button.exists()).toBe(true)
      await button.trigger('click')

    })

    it(`press next`, async () => {
      const message = app.findComponent(Message)

      expect(message.find('#btnNext').exists()).toBe(true)
      await message.find('#btnNext').trigger('click')

    })
  }

  it(`result component found and next button works`, async () => {
    const result = app.findComponent(ResultScreen)
    expect(result.exists()).toBe(true)
    const nextLevel = result.find('#nextLevel')
    expect(nextLevel.exists()).toBe(true)
    await nextLevel.trigger('click')

  })

  for(let j=1; j<=4; j++) {
    it(`get a question ${j} and chose right answer`, async () => {
      expect(app.findComponent(Question).exists()).toBe(true)

      const answer = app.findComponent(Question).vm.rightAnswer
      const button = app.find('#ans' + answer)

      expect(button.exists()).toBe(true)
      await button.trigger('click')

    })

    it(`press next`, async () => {
      const message = app.findComponent(Message)

      expect(message.find('#btnNext').exists()).toBe(true)
      await message.find('#btnNext').trigger('click')

    })
  }

  it(`result component found and next button works`, async () => {
    const result = app.findComponent(ResultScreen)
    expect(result.exists()).toBe(true)
    const nextLevel = result.find('#nextLevel')
    expect(nextLevel.exists()).toBe(true)
    await nextLevel.trigger('click')

  })

  for(let j=1; j<=5; j++) {
    it(`get a question ${j} and chose right answer`, async () => {
      expect(app.findComponent(Question).exists()).toBe(true)

      const answer = app.findComponent(Question).vm.rightAnswer
      const button = app.find('#ans' + answer)

      expect(button.exists()).toBe(true)
      await button.trigger('click')

    })

    it(`press next`, async () => {
      const message = app.findComponent(Message)

      expect(message.find('#btnNext').exists()).toBe(true)
      await message.find('#btnNext').trigger('click')

    })
  }

  it(`result component found and next button works`, async () => {
    const result = app.findComponent(ResultScreen)
    expect(result.exists()).toBe(true)
    const nextLevel = result.find('#nextLevel')
    expect(nextLevel.exists()).toBe(true)
    await nextLevel.trigger('click')

  })

  for(let j=1; j<=6; j++) {
    it(`get a question ${j} and chose right answer`, async () => {
      expect(app.findComponent(Question).exists()).toBe(true)

      const answer = app.findComponent(Question).vm.rightAnswer
      const button = app.find('#ans' + answer)

      expect(button.exists()).toBe(true)
      await button.trigger('click')

    })

    it(`press next`, async () => {
      const message = app.findComponent(Message)

      expect(message.find('#btnNext').exists()).toBe(true)
      await message.find('#btnNext').trigger('click')

    })
  }

  it(`result component found and next button works`, async () => {
    const result = app.findComponent(ResultScreen)
    expect(result.exists()).toBe(true)
    const nextLevel = result.find('#nextLevel')
    expect(nextLevel.exists()).toBe(true)
    await nextLevel.trigger('click')

  })

})
