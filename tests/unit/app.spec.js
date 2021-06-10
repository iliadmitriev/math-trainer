import {mount} from '@vue/test-utils'
import App from "../../src/App.vue";
import StartScreen from "../../src/components/StartScreen.vue";
import ProgressBar from "../../src/components/ProgressBar.vue";

describe('App', () => {
  const wrapper = mount(App)

  it('render root application', () => {
    expect(wrapper.html()).toContain(`Вы готовы начать?`)
  })

  it('find component start screen', () => {
    expect(wrapper.findComponent(StartScreen).exists()).toBe(true)
  })

  it('find component progress bar', () => {
    expect(wrapper.findComponent(ProgressBar).exists()).toBe(true)
  })

})


