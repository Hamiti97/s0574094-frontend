import { mount } from '@vue/test-utils'
import Guide from '@/views/Guide.vue'

describe('Testing Guide.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(Guide)

    // then
    expect(wrapper.text()).toMatch('Guide')
  })
})
