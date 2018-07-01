import Vuex from "vuex";

const dayKey = (year, month, day) => `${year}_${month}_${day - 1}`;

const createStore = () => {
  return new Vuex.Store({
    state: {
      calendar: {}
    },
    mutations: {
      toggleDay (state, payload) {
        const { year, month, day } = payload;
        const key = dayKey(year, month, day);

        const current = state.calendar[key];
        state.calendar = {
          ...state.calendar,
          [key]: !!!current
        };
      }
    },
    getters: {
      isChecked: (state) => (year, month, day) => {
        const key = dayKey(year, month, day);
        return !!state.calendar[key];
      }
    }
  })
}

export default createStore;
