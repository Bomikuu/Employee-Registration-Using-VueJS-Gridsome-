import Vue from "vue";
import Vuex from "vuex";
import employee from "./employee";
import values from "./values";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		employee,
		values,
	},
});