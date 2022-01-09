import { mount } from '@vue/test-utils'
import Filme from '@/views/Filme.vue'
import FilmCardList from '@/components/FilmCardList'
import FilmCreateForm from '@/components/FilmCreateForm'

describe('Testing Filme.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(Filme)

    // then
    expect(wrapper.text()).toMatch('Filme')
  })

  it('should have film card list component', () => {
    // when
    const wrapper = mount(Filme)

    // then
    const cardList = wrapper.findComponent(FilmCardList)
    expect(cardList.exists()).toBeTruthy()
  })

  it('should have persons create form component', () => {
    // when
    const wrapper = mount(Filme)

    // then
    const createForm = wrapper.findComponent(FilmCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })
})
