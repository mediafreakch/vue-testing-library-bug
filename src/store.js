import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    project1: {
      title: "Project1 Title",
      content: "Project1 Content"
    },
    project2: {
      title: "Project2 Title",
      content: "Project2 Content"
    }
  },
  getters: {
    byProject: state => project => state[project]
  }
});
