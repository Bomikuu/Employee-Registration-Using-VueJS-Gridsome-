import Vue from "vue";
import Vuex from "vuex";
import employee from "./employee";
import values from "./values";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		stepperIndex: 0,
	},
	mutations: {
		setStepperIndex(state, index) {
			state.stepperIndex = index;
		},
	},
	actions: {},
	modules: {
		employee,
		values,
	},
});
