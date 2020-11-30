import Vue from 'vue';
import Vuex, {
  StoreOptions,
} from 'vuex';
import { state, RootState } from './state';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

Vue.use(Vuex);

const options: StoreOptions<RootState> = {
  state,
  getters,
  mutations,
  actions,
  modules: {
  },
};

export default new Vuex.Store<RootState>(options);
