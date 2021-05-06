import employeeApi from "@/api/employee";

export default {
	state: {
		employeeList: [],
		currentEmployee: {},
	},
	mutations: {
		setEmployeeList(state, payload) {
			state.employeeList = payload;
		},
		setCurrentEmployee(state, payload) {
			state.currentEmployee = payload;
		},
	},
	actions: {
		async getAllEmployee({ commit }) {
			const response = await employeeApi.getAllEmployees();

			if (response) {
				commit("setEmployeeList", response.data);
			}

			return response;
		},
	},
};
