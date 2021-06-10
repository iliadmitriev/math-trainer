import {mount} from '@vue/test-utils'
import App from "../../src/App.vue";

describe('App', () => {
  const wrapper = mount(App)

  it('render root application', () => {
    expect(wrapper.html()).toContain(`Вы готовы начать?`)
  })

})


