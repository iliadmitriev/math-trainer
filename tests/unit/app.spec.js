import {mount} from '@vue/test-utils'
import App from "../../src/App.vue";

describe('App', () => {
  const wrapper = mount(App)

  it('show start screen', () => {
    expect(wrapper.html()).toContain(`Вы готовы начать?`)
  })

})


