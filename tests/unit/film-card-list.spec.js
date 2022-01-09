import { mount } from '@vue/test-utils'
import FilmCardList from '@/components/FilmCardList'
import FilmCard from '@/components/FilmCard'

describe('Testing FilmCardList.vue', () => {
  it('should render a film card for each film', () => {
    // when
    const wrapper = mount(FilmCardList, {
      propsData: {
        filme: [
          {
            id: 1,
            titel: 'Max',
            genre: 'Mustermann',
            erscheinungsjahr: 2005,
            imageUrl: 'a',
            ytLink: 'a'
          },
          {
            id: 2,
            titel: 'Maxa',
            genre: 'Mustermanna',
            erscheinungsjahr: 2006,
            imageUrl: 'aa',
            ytLink: 'aa'
          }
        ]
      }
    })

    // then
    const filmCards = wrapper.findAllComponents(FilmCard)
    expect(filmCards.length).toBe(0)
  })
})
