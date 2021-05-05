import axios from "axios";

const apiUrl = process.env.GRIDSOME_API_URL + "/employees";

function getAllEmployees() {
	return axios.get(apiUrl);
}

function getEmployeeByEmail(email) {
	return axios.get(`${apiUrl}/?email=${email}`);
}

function updateEmployee(id, payload) {
	return axios.patch(`${apiUrl}/${id}`, payload);
}

function saveEmployee(payload) {
	return axios.post(apiUrl, payload);
}

export default {
	getAllEmployees,
	getEmployeeByEmail,
	updateEmployee,
	saveEmployee,
};
