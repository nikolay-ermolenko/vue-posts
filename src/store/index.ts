import Vue from 'vue';
import Vuex, {
  StoreOptions,
} from 'vuex';
import { state, RootState } from './state';

Vue.use(Vuex);

const options: StoreOptions<RootState> = {
  state,
  mutations: {
  },
  actions: {
  },
  modules: {
  },
};

export default new Vuex.Store<RootState>(options);
