import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(Vuetify)

const localVue = createLocalVue()

describe('module', () => {
  let vuetify: any;
  beforeEach(() => {
    vuetify = new Vuetify();
  })

  it('is HellowWorld instance of Vue', () => {
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      vuetify,
      data: () => ({

      }),
    });
    expect(wrapper.vm).toBeTruthy();
  })

  it('HellowWorld title is equal', () => {
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      vuetify,
    });
    const selector = '.mb-4 .display-2'
    const title = wrapper.find(selector)
    const titleText = 'Welcome to Vuetify'
    expect(title.text()).toEqual(titleText)
  })
})

//https://iobio.io/user_guides/2019/05/20/vue-js-unit-testing-with-jest/