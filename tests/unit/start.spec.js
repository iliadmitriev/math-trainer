import {mount} from '@vue/test-utils'
import App from "../../src/App.vue";

describe('App', () => {
  const wrapper = mount(App)

  test('push start button on start screen', async () => {
    const button = wrapper.find('#btnStart')
    await button.trigger('click')

  })

})


