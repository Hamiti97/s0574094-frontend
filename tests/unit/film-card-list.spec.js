import { mount } from '@vue/test-utils'
import FilmCardList from '@/components/FilmCardList'
import FilmCard from '@/components/FilmCard'

describe('Testing FilmCardList.vue', () => {
  it('should render a film card for each person', () => {
    // when
    const wrapper = mount(FilmCardList, {
      propsData: {
        filme: [
          {
            id: 1,
            titel: 'Max',
            genre: 'Mustermann',
            erscheinungsjahr: 2005,
            imageUrl: '=',
            ytLink: '='
          },
          {
            id: 2,
            titel: 'Maxa',
            genre: 'Mustermanna',
            erscheinungsjahr: 2006,
            imageUrl: '=a',
            ytLink: '=a'
          }
        ]
      }
    })

    // then
    const filmCards = wrapper.findAllComponents(FilmCard)
    expect(filmCards.length).toBe(2)
  })
})
