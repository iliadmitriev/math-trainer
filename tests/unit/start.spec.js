import {mount} from '@vue/test-utils'
import App from "../../src/App.vue";
import Question from "../../src/components/Question.vue";
import Message from "../../src/components/Message.vue";

describe('StartScreen', () => {
  const wrapper = mount(App)

  test('push start button on start screen', async () => {
    const button = wrapper.find('#btnStart')
    await button.trigger('click')

    expect(wrapper.findComponent(Question).exists()).toBe(true)

  })

  test('choose the right answer', async () => {

    const question = wrapper.findComponent(Question)

    expect(question.exists()).toBe(true)

    const answer = question.vm.rightAnswer
    const button = question.find('#ans' + answer)

    expect(button.exists()).toBe(true)

    await button.trigger('click')

    const message = wrapper.findComponent(Message)

    expect(message.exists()).toBe(true)

    const next = message.find('button.btn.btn-primary')

    await next.trigger('click')

  })

  test('choose the wrong answer', async () => {

    const question = wrapper.findComponent(Question)

    expect(question.exists()).toBe(true)

    const answer = question.vm.rightAnswer
    const buttons = wrapper
      .findAll('button.btn.btn-success')
      .filter(b => b.attributes('id') !== 'ans' + answer)

    expect(buttons.length >= 3).toBe(true)

    await buttons.at(1).trigger('click')

    expect(wrapper.findComponent(Message).exists()).toBe(true)

  })

})


