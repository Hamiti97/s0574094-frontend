import { mount } from '@vue/test-utils'
import Filmgenerator from '@/views/Filmgenerator'
import FilmCard from '@/components/FilmCard'

describe('Testing Filmgenerator.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(Filmgenerator)

    // then
    expect(wrapper.text()).toMatch('Ihr nächster Film')
  })

  it('should have film card component', () => {
    // when
    const wrapper = mount(Filmgenerator)

    // then
    const card = wrapper.findComponent(FilmCard)
    expect(card.exists()).toBeFalsy()
  })
})
