import { mount } from '@vue/test-utils'
import ShowNavigator from './../../src/components/ShowNavigator.vue'
import VueHorizontal from "vue-horizontal"
import ShowModal from './../../src/components/ShowModal.vue'

describe('ShowNavigator', () => {
  // Inspect the raw component options
  it('has data', () => {
    expect(typeof ShowNavigator.data).toBe('function')
  })
})


// Testing rendering of inputfields

describe('Rendering of inputfields and buttons', () => {
  const wrapper = mount(ShowNavigator);

  test('does a wrapper exist', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has a search button', () => {
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('has a search inputfield', () => {
    expect(wrapper.find('input').exists()).toBe(true)
  })
})

describe('Vue Horizontal', () => {
  const wrapper = mount(ShowNavigator);

  it('has a horizontal list', () => {
    expect(wrapper.findComponent(VueHorizontal).exists()).toBe(true)
  })

})

describe('Renders a modal', () => {
  it('Should not render a modal when application is launched', () => {
    const wrapper =  mount(ShowNavigator);
    expect(wrapper.findComponent(ShowModal).exists()).toBe(false);
  })
  it('Renders a modal in case data has been retrieved from API and showModal = true', () => {
    const wrapper =  mount(ShowNavigator, {
      data() {
        return {
          // enter random item from API in order to be able to render Modal
          selectedItem: {"score":0.8897449,"show":{"id":41734,"url":"https://www.tvmaze.com/shows/41734/girls","name":"GIRLS","type":"Scripted","language":"Mongolian","genres":["Comedy"],"status":"Ended","runtime":41,"averageRuntime":null,"premiered":null,"ended":null,"officialSite":null,"schedule":{"time":"","days":["Thursday"]},"rating":{"average":null},"weight":63,"network":{"id":1672,"name":"UBS","country":{"name":"Mongolia","code":"MN","timezone":"Asia/Ulaanbaatar"},"officialSite":null},"webChannel":null,"dvdCountry":null,"externals":{"tvrage":null,"thetvdb":null,"imdb":"tt8709752"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/191/478539.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/191/478539.jpg"},"summary":null,"updated":1632080861,"_links":{"self":{"href":"https://api.tvmaze.com/shows/41734"}}}},
          showModal: true
        }
      }
    });

    expect(wrapper.findComponent(ShowModal).exists()).toBe(true);
  })

})



