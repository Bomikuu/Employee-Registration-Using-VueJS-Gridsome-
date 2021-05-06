<template>
	<b-form-group
		:id="`input-group-${data.id}`"
		:label="data.field"
		:label-for="data.id"
	>
		<b-form-select
			:id="data.id"
			v-model="data.value"
			:options="getSelectOptions()"
			:placeholder="data.placeholder"
			required
		></b-form-select>
	</b-form-group>
</template>

<script>
export default {
	props: {
		data: {
			default: () => {
				return {};
			},
			type: Object,
		},
	},

	computed: {
		getGender() {
			return this.$store.state.values.genders;
		},

		getApplicationPurpose() {
			return this.$store.state.values.applicationPurpose;
		},

		getCompanyRole() {
			return this.$store.state.values.companyRoles;
		},
	},

	methods: {
		getSelectOptions() {
			switch (this.data.id) {
				case "applicationPurpose":
					return this.getApplicationPurpose;

				case "gender":
					return this.getGender;

				case "companyRole":
					return this.getCompanyRole;
			}
		},
	},
};
</script>

<style></style>
