import {mount} from '@vue/test-utils'
import Question from "../../src/components/Question.vue";

describe('Question', () => {
  const wrapper = mount(Question, {
    propsData: {
      level: {variants: 5, min: 1, max: 5, maxQuestions: 3, range: 2}
    }
  })

  test('question right answer exists', async () => {

    const answer = wrapper.vm.rightAnswer
    const button = wrapper.find('#ans' + answer)

    expect(button.exists()).toBe(true)

   })

  test('question right button trigger', async () => {

    const answer = wrapper.vm.rightAnswer
    const button = wrapper.find('#ans' + answer)

    await button.trigger('click')

  })

  test('question wrong button trigger', async () => {
    const answer = wrapper.vm.rightAnswer
    const buttons = wrapper
      .findAll('button.btn.btn-success')
      .filter(b => b.attributes('id') !== 'ans' + answer)

    await buttons.trigger('click')

  })

})


