import { mount } from '@vue/test-utils'
import App from '@/App'
import Navbar from '@/components/Navbar'

describe('Testing App.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(App)

    // then
    expect(wrapper.text()).toMatch('FilmfinderStartFilmgeneratorFilmeGuide')
  })

  it('should have navbar component', () => {
    // when
    const wrapper = mount(App)

    // then
    const cardList = wrapper.findComponent(Navbar)
    expect(cardList.exists()).toBeTruthy()
  })
})
