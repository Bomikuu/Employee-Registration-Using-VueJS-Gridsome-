import valuesApi from "@/api/values";

export default {
	state: () => ({
		genders: [],
		companyRoles: [],
		loginRoles: [],
		applicationPurpose: [],
	}),

	mutations: {
		setGender(state, payload) {
			state.genders = payload;
		},

		setCompanyRole(state, payload) {
			state.companyRoles = payload;
		},

		setLoginRole(state, payload) {
			state.loginRoles = payload;
		},

		setApplicationPurpose(state, payload) {
			state.applicationPurpose = payload;
		},
	},

	actions: {
		async getAllValues({ commit }) {
			const response = await valuesApi.getAllValues();

			if (response) {
				const {
					gender,
					loginRole,
					purpose,
					companyRole,
				} = response.data;
				console.log(response);
				commit("setGender", gender);
				commit("setCompanyRole", companyRole);
				commit("setLoginRole", loginRole);
				commit("setApplicationPurpose", purpose);
			}

			return response;
		},
	},
};
