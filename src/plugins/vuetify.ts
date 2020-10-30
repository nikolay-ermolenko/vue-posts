import Vue from 'vue';
import Vuetify, {
  VApp,
  VAppBar,
  VBtn,
  VIcon,
  VImg,
  VMain,
  VSpacer,
} from 'vuetify/lib';
import ru from 'vuetify/src/locale/ru';

Vue.use(Vuetify, {
  components: {
    VApp,
    VAppBar,
    VBtn,
    VIcon,
    VImg,
    VMain,
    VSpacer,
  },
});

export default new Vuetify({
  lang: {
    locales: { ru },
    current: 'ru',
  },
});
