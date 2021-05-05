<template>
	<Layout>
		<!-- Learn how to use images here: https://gridsome.org/docs/images -->
		<div class="main-container">
			<h2>Employee List</h2>
			<div class="employee-list-container">
				<employee-card
					v-for="(employee, index) in getAllEmployee"
					:key="`employee-item-${index}`"
					:employee="employee"
				>
				</employee-card>
			</div>
		</div>
	</Layout>
</template>

<script>
import EmployeeCard from "@/components/employee/EmployeeCard";

export default {
	metaInfo: {
		title: "Hello, world!",
	},

	components: {
		EmployeeCard,
	},

	data() {
		return {
			isLoading: true,
		};
	},

	computed: {
		getAllEmployee() {
			return this.$store.state.employee.employeeList;
		},
	},

	async mounted() {
		const response = await Promise.all([
			this.$store.dispatch("getAllValues"),
			this.$store.dispatch("getAllEmployee"),
		]);

		console.log(response);

		if (response) {
			this.isLoading = false;
		}
	},
};
</script>

<style lang="scss">
.home-links a {
	margin-right: 1rem;
}

.main-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.employee-list-container {
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: flex-start;
}
</style>
