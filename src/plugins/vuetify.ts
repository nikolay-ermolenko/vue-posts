import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import ru from 'vuetify/src/locale/ru';
// eslint-disable-next-line
import { Theme, VuetifyThemeVariant } from 'vuetify/types/services/theme';
import colors from 'vuetify/lib/util/colors';
import {
  mdiArrowUp,
} from '@mdi/js';

Vue.use(Vuetify);

const light: VuetifyThemeVariant = {
  primary: colors.red.base,
  secondary: colors.red.base,
  accent: colors.red.base,
  info: colors.red.base,
  warning: colors.red.base,
  error: colors.red.base,
  success: colors.red.base,
  progress: colors.blue.base,
};

const dark: VuetifyThemeVariant = {
  primary: colors.blue.base,
  secondary: colors.blue.base,
  accent: colors.blue.base,
  info: colors.blue.base,
  warning: colors.blue.base,
  error: colors.blue.base,
  success: colors.blue.base,
  progress: colors.lime.base,
};

const theme: Theme = {
  dark: false,
  disable: false,
  default: 'light',
  options: {},
  currentTheme: light,
  themes: {
    light,
    dark,
  },
};

export default new Vuetify({
  theme,
  icons: {
    iconfont: 'mdiSvg',
    values: {
      sort: mdiArrowUp,
    },
  },
  lang: {
    locales: { ru },
    current: 'ru',
  },
});
