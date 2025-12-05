import {mount} from '@vue/test-utils'
import App from "../../src/App.vue";
import Question from "../../src/components/Question.vue";
import Message from "../../src/components/Message.vue";
import StartScreen from "../../src/components/StartScreen.vue";

describe('StartScreen', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(App);
  });

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
    }
  });

  test('push start button on start screen', async () => {
    // Initially we should be on start screen
    expect(wrapper.findComponent(StartScreen).exists()).toBe(true);

    const button = wrapper.find('#btnStart');
    await button.trigger('click');

    // After clicking start, we should be on the question screen
    expect(wrapper.findComponent(Question).exists()).toBe(true);
  })

  test('choose the right answer', async () => {
    // First, navigate to the question screen
    const startButton = wrapper.find('#btnStart');
    await startButton.trigger('click');

    // Now we should be on the question screen
    const question = wrapper.findComponent(Question);
    expect(question.exists()).toBe(true);

    // Get the right answer from the question component
    const answer = question.vm.rightAnswer;
    const button = question.find('#ans' + answer);

    expect(button.exists()).toBe(true);

    await button.trigger('click');

    // After correct answer, we should see the message component
    const message = wrapper.findComponent(Message);
    expect(message.exists()).toBe(true);

    const next = message.find('button.btn.btn-primary');
    await next.trigger('click');
  })

  test('choose the wrong answer', async () => {
    // First, navigate to the question screen
    const startButton = wrapper.find('#btnStart');
    await startButton.trigger('click');

    // Now we should be on the question screen
    const question = wrapper.findComponent(Question);
    expect(question.exists()).toBe(true);

    // Get the right answer to exclude it
    const rightAnswer = question.vm.rightAnswer;
    const allButtons = question.findAll('button.btn.btn-success');
    const wrongButtons = allButtons.filter(b => b.attributes('id') !== 'ans' + rightAnswer);

    expect(wrongButtons.length >= 1).toBe(true);

    if (wrongButtons.length > 0) {
      await wrongButtons[0].trigger('click');
      expect(wrapper.findComponent(Message).exists()).toBe(true);
    }
  })

})


