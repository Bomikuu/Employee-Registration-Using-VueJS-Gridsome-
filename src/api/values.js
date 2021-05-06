import axios from "axios";

const apiUrl = process.env.GRIDSOME_API_URL + "/values";

async function getAllValues() {
	return axios.get(apiUrl);
}

export default {
	getAllValues,
};
