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
      let courseIndex = state.courses.findIndex(i => i.id === (ID));
      state.courses.splice(courseIndex, 1);
    },
    CHANGE_COURSE: (state, course) => {
      let courseIndex = state.courses.findIndex(i => i.id === (course.id));
      state.courses[courseIndex] = course
    },
    ADD_COURSE: (state, course) => {
      state.courses.push(course)
    }
  },
  actions: {
    GET_COURSES_FROM_JSON({commit}, courses) {
      commit('SET_COURSES_TO_STATE', courses);
    }
  },
  getters: {
    COURSES(state) {
      return state.courses;
    },
    NEED_ID(state) {
      return String(Number(state.courses[state.courses.length -1].id) + 1);
    }
  }
})

export default store;
