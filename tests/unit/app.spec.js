import {mount} from '@vue/test-utils'
import App from "../../src/App.vue";
import StartScreen from "../../src/components/StartScreen.vue";
import ProgressBar from "../../src/components/ProgressBar.vue";

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(App)
  });

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount()
    }
  });

  it('renders root application', () => {
    expect(wrapper.html()).toContain(`Вы готовы начать?`)
  })

  it('finds component start screen', () => {
    expect(wrapper.findComponent(StartScreen).exists()).toBe(true)
  })

  it('finds component progress bar', () => {
    expect(wrapper.findComponent(ProgressBar).exists()).toBe(true)
  })

})


