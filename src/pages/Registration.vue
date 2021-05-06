<template>
	<Layout>
		<div class="registration-main-container">
			<stepper-view></stepper-view>
			<h3 class="my-4">{{ getCurrentForm.pageTitle }}</h3>
			<b-form @submit="onSubmit" @reset="onReset">
				<div class="registration-form-container">
					<div
						v-for="(field, index) in getCurrentForm.form"
						:key="`form-input-${index}`"
						:class="{ 'full-field': field.isFull }"
					>
						<input-field
							v-if="isInputField(field.id)"
							:data="field"
						></input-field>

						<select-field
							v-else-if="isSelectField(field.id)"
							:data="field"
						></select-field>

						<date-picker-field
							v-else
							:data="field"
						></date-picker-field>
					</div>
				</div>

				<b-button type="submit" variant="primary">Submit</b-button>
				<b-button type="reset" variant="danger">Reset</b-button>
			</b-form>
		</div>
	</Layout>
</template>

<script>
import StepperView from "@/components/base/StepperView";
import InputField from "@/components/base/InputField";
import SelectField from "@/components/base/SelectField";
import DatePickerField from "@/components/base/DatePickerField";

export default {
	components: {
		StepperView,
		InputField,
		SelectField,
		DatePickerField,
	},
	metaInfo: {
		title: "Registration",
	},
	data() {
		return {
			isLoading: true,
			stepperIndex: 0,
			formData: [
				{
					pageTitle: "Please Enter your Personal Details",
					form: [
						{
							id: "firstName",
							field: "First Name",
							value: "",
							placeholder: "Enter First Name",
						},
						{
							id: "lastName",
							field: "Last Name",
							value: "",
							placeholder: "Enter Last Name",
						},
						{
							id: "gender",
							field: "Gender",
							value: "",
							placeholder: "Please Select a Gender",
						},
						{
							id: "birthday",
							field: "Birthday",
							value: "",
							placeholder: "Please Select your Birthday",
						},
						{
							id: "address",
							field: "Address",
							value: "",
							placeholder: "Where do you live?",
							isFull: true,
						},

						{
							id: "email",
							field: "Email Address",
							value: "",
							placeholder: "Enter Email Address",
						},
						{
							id: "contactNumber",
							field: "Contact Number",
							value: "",
							placeholder: "Enter Contact Number",
						},
						{
							id: "applicationPurpose",
							field: "Application Purpose",
							value: "",
							placeholder: "Select an Application Purpose",
						},
					],
				},
				{
					pageTitle: "Please Enter your Company Details",
					form: {
						companyPosition: "",
						companyRates: "",
						companyName: "",
						companyEmail: "",
						companyContact: "",
						companySuperVisor: "",
					},
				},
			],
		};
	},

	computed: {
		getCurrentForm() {
			return this.formData[this.stepperIndex];
		},
	},

	created() {},

	async mounted() {
		const response = await this.$store.dispatch("getAllValues");

		if (response) {
			this.isLoading = false;
		}
	},

	methods: {
		isInputField(id) {
			return (
				id !== "gender" &&
				id !== "birthday" &&
				id !== "applicationPurpose"
			);
		},
		isSelectField(id) {
			return id === "gender" || id === "applicationPurpose";
		},
		onSubmit(event) {},
		onReset(event) {},
	},
};
</script>

<style lang="scss">
.registration-main-container {
	display: flex;
	flex-direction: column;
}

.registration-form-container {
	display: flex;
	flex-wrap: wrap;

	& > * {
		flex: 0 0 48%;
		margin-right: 5px;
	}

	.full-field {
		flex: 0 0 96%;
		margin-right: 5px;
	}
}
</style>
