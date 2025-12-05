import {mount} from '@vue/test-utils'
import App from "../../src/App.vue";
import StartScreen from "../../src/components/StartScreen.vue";
import Question from "../../src/components/Question.vue";
import ResultScreen from "../../src/components/ResultScreen.vue";
import Message from "../../src/components/Message.vue";

describe('Full Application Test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(App, {});
  });

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
    }
  });

  test('start component found and start button works', async () => {
    expect(wrapper.findComponent(StartScreen).exists()).toBe(true);
    const startButton = wrapper.find('#btnStart');
    expect(startButton.exists()).toBe(true);
    await startButton.trigger('click');
  });

  // Level 1 - 3 questions
  for(let j = 1; j <= 3; j++) {
    it(`get a question ${j} and chose right answer`, async () => {
      // Navigate to question if not already there
      if (!wrapper.findComponent(Question).exists()) {
        const startButton = wrapper.find('#btnStart');
        if (startButton.exists()) {
          await startButton.trigger('click');
        }
      }

      expect(wrapper.findComponent(Question).exists()).toBe(true);
      const questionComponent = wrapper.findComponent(Question);

      const answer = questionComponent.vm.rightAnswer;
      const button = wrapper.find('#ans' + answer);

      expect(button.exists()).toBe(true);
      await button.trigger('click');
    });

    it(`press next`, async () => {
      const message = wrapper.findComponent(Message);
      expect(message.find('#btnNext').exists()).toBe(true);
      await message.find('#btnNext').trigger('click');
    });
  }

  it(`result component found and next button works`, async () => {
    const result = wrapper.findComponent(ResultScreen);
    expect(result.exists()).toBe(true);
    const nextLevel = result.find('#nextLevel');
    expect(nextLevel.exists()).toBe(true);

    if (nextLevel.attributes('disabled') !== 'disabled') {
      await nextLevel.trigger('click');
    }
  });

  // Level 2 - 4 questions
  for(let j = 1; j <= 4; j++) {
    it(`get a question ${j} and chose right answer on level 2`, async () => {
      // Wait for question to appear after level change
      await new Promise(resolve => setTimeout(resolve, 100));
      expect(wrapper.findComponent(Question).exists()).toBe(true);
      const questionComponent = wrapper.findComponent(Question);

      const answer = questionComponent.vm.rightAnswer;
      const button = wrapper.find('#ans' + answer);

      expect(button.exists()).toBe(true);
      await button.trigger('click');
    });

    it(`press next`, async () => {
      const message = wrapper.findComponent(Message);
      expect(message.find('#btnNext').exists()).toBe(true);
      await message.find('#btnNext').trigger('click');
    });
  }

  it(`result component found and next button works`, async () => {
    const result = wrapper.findComponent(ResultScreen);
    expect(result.exists()).toBe(true);
    const nextLevel = result.find('#nextLevel');
    expect(nextLevel.exists()).toBe(true);

    if (nextLevel.attributes('disabled') !== 'disabled') {
      await nextLevel.trigger('click');
    }
  });

  // Level 3 - 5 questions
  for(let j = 1; j <= 5; j++) {
    it(`get a question ${j} and chose right answer on level 3`, async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
      expect(wrapper.findComponent(Question).exists()).toBe(true);
      const questionComponent = wrapper.findComponent(Question);

      const answer = questionComponent.vm.rightAnswer;
      const button = wrapper.find('#ans' + answer);

      expect(button.exists()).toBe(true);
      await button.trigger('click');
    });

    it(`press next`, async () => {
      const message = wrapper.findComponent(Message);
      expect(message.find('#btnNext').exists()).toBe(true);
      await message.find('#btnNext').trigger('click');
    });
  }

  it(`result component found and next button works`, async () => {
    const result = wrapper.findComponent(ResultScreen);
    expect(result.exists()).toBe(true);
    const nextLevel = result.find('#nextLevel');
    expect(nextLevel.exists()).toBe(true);

    if (nextLevel.attributes('disabled') !== 'disabled') {
      await nextLevel.trigger('click');
    }
  });

  // Level 4 - 6 questions
  for(let j = 1; j <= 6; j++) {
    it(`get a question ${j} and chose right answer on level 4`, async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
      expect(wrapper.findComponent(Question).exists()).toBe(true);
      const questionComponent = wrapper.findComponent(Question);

      const answer = questionComponent.vm.rightAnswer;
      const button = wrapper.find('#ans' + answer);

      expect(button.exists()).toBe(true);
      await button.trigger('click');
    });

    it(`press next`, async () => {
      const message = wrapper.findComponent(Message);
      expect(message.find('#btnNext').exists()).toBe(true);
      await message.find('#btnNext').trigger('click');
    });
  }

  it(`result component found and next button works`, async () => {
    const result = wrapper.findComponent(ResultScreen);
    expect(result.exists()).toBe(true);
    const nextLevel = result.find('#nextLevel');
    expect(nextLevel.exists()).toBe(true);

    if (nextLevel.attributes('disabled') !== 'disabled') {
      await nextLevel.trigger('click');
    }
  });

})
