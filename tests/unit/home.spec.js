import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Testing Home.vue', () => {
  it('should show page title and button text', () => {
    // when
    const wrapper = mount(Home)

    // then
    expect(wrapper.text()).toMatch('Film FinderFILM VORSCHLAGENZUM FILMFINDER GUIDE')
  })
})
