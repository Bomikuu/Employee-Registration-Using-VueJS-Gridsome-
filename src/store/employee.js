import employeeApi from "@/api/employee";

export default {
	state: {
		employeeList: [],
		currentEmployee: {
			firstName: "",
			lastName: "",
			gender: "",
			birthday: "",
			address: "",
			email: "",
			contactNumber: "",
			applicationPurpose: "",
		},
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
