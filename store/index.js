import firebase, { auth, GoogleProvider } from "@/services/fireinit.js";
import Vuex from "vuex";

const dayKey = (year, month, day) => `${year}_${month}_${day - 1}`;

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      calendar: {}
    },
    mutations: {
      setUser (state, payload) {
        state.user = payload
      },
      toggleDay (state, payload) {
        const { year, month, day } = payload;
        const key = dayKey(year, month, day);

        const current = state.calendar[key];
        state.calendar = {
          ...state.calendar,
          [key]: !!!current
        };
      },
      resetCalendar (state) {
        state.calendar = {};
      }
    },
    getters: {
      activeUser: (state) => {
        return state.user
      },
      isChecked: (state) => (year, month, day) => {
        const key = dayKey(year, month, day);
        return !!state.calendar[key];
      }
    },
    actions: {
      nuxtServerInit ({ commit }, { req }) {
        if (req.user) {
          commit('setUser', req.user)
        }
      },
      loginWithGoogle ({ commit }) {
        return new Promise((resolve, reject) => {
          auth.signInWithRedirect(GoogleProvider);
          resolve()
        });
      }
    }
  })
}

export default createStore;
