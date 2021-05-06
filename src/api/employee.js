import axios from "axios";

const apiUrl = process.env.GRIDSOME_API_URL + "/employees";
const companyUrl = process.env.GRIDSOME_API_URL + "/company";

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

function saveCompany(payload) {
	return axios.post(companyUrl, payload);
}

export default {
	getAllEmployees,
	getEmployeeByEmail,
	updateEmployee,
	saveEmployee,
	saveCompany,
};
