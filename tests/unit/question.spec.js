import {mount} from '@vue/test-utils'
import Question from "../../src/components/Question.vue";

describe('Question', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Question, {
      props: {
        level: {variants: 5, min: 1, max: 5, maxQuestions: 3, range: 2}
      }
    })
  });

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount()
    }
  });

  test('question right answer exists', async () => {
    // In Vue 3 composition API, we access refs through .value
    // Since the variables are in the setup, we access them differently
    const answers = wrapper.vm.answers;
    const rightAnswer = wrapper.vm.rightAnswer;

    const button = wrapper.find('#ans' + rightAnswer);
    expect(button.exists()).toBe(true);
  })

  test('question right button trigger', async () => {
    const rightAnswer = wrapper.vm.rightAnswer;
    const button = wrapper.find('#ans' + rightAnswer);

    // Listen to the emit
    await button.trigger('click');
    expect(wrapper.emitted('onSuccess')).toBeTruthy();
  })

  test('question wrong button trigger', async () => {
    const rightAnswer = wrapper.vm.rightAnswer;
    const allButtons = wrapper.findAll('button.btn.btn-success');

    // Find a button that is NOT the right answer
    const wrongButtons = allButtons.filter(b => b.attributes('id') !== 'ans' + rightAnswer);

    if (wrongButtons.length > 0) {
      await wrongButtons[0].trigger('click');
      expect(wrapper.emitted('onError')).toBeTruthy();
    }
  })

})


