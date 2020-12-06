import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    courses: []
  },
  mutations: {
    SET_COURSES_TO_STATE: (state, courses) =>{
      state.courses = courses;
    },
    DELETE_COURSE_FROM_STATE: (state, ID) => {
      let courseID = state.courses.findIndex(i => i.id === (ID));
      console.log(courseID);
      state.courses.splice(courseID, 1);
    },
  },
  actions: {
    GET_COURSES_FROM_JSON({commit}, courses) {
      commit('SET_COURSES_TO_STATE', courses);
    }
  },
  getters: {
    COURSES(state) {
      return state.courses;
    }
  }
})

export default store;
