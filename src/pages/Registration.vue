<template>
	<Layout>
		<div class="registration-main-container">
			<stepper-view></stepper-view>
			<!-- Show this if Index is set to 0 or 1 -->
			<div v-if="getStepperIndex < 2">
				<h3 class="my-4">{{ getCurrentForm.pageTitle }}</h3>
				<b-form>
					<div class="registration-form-container">
						<div
							v-for="(field, index) in getCurrentForm.form"
							:key="`form-input-${index}`"
							class="form-input-item"
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

					<div class="form-button">
						<b-button
							type="submit"
							variant="primary"
							:disabled="getStepperIndex === 0"
							@click="handlePreviousBtn"
							>Previous</b-button
						>
						<b-button
							type="submit"
							variant="primary"
							@click="handleNextBtn"
							>Next</b-button
						>
					</div>
				</b-form>
			</div>
			<div v-else>
				<div class="form-summary-container" v-if="!isLoading">
					<h3>Here's the summary of the Employee Details</h3>
					<span>Please review the details before submitting</span>

					<div
						v-for="(form, index) in formData"
						:key="`form-container-${index}`"
						class="summary-table"
					>
						<span> {{ form.summaryTitle }}</span>
						<div
							v-for="(field, index) in form.form"
							:key="`form-item-${index}`"
							class="summary-item"
						>
							<span> {{ field.field }}</span>
							<span>
								{{ field.value || "Not Available" }}
							</span>
						</div>
					</div>

					<b-button
						class="mt-4"
						type="submit"
						variant="primary"
						@click="handleSubmitApplication"
						>Submit Application
					</b-button>
				</div>

				<div class="form-loading-container" v-else>
					<b-spinner
						style="width: 4rem; height: 4rem;"
						label="Large Spinner"
					></b-spinner>
					<h4 class="mt-4">
						Your application is being submitted. Please wait...
					</h4>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
import StepperView from "@/components/base/StepperView";
import InputField from "@/components/base/InputField";
import SelectField from "@/components/base/SelectField";
import DatePickerField from "@/components/base/DatePickerField";
import employeeAPI from "@/api/employee";

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
			formData: [
				{
					pageTitle: "Please Enter your Personal Details",
					summaryTitle: "Your Personal Details",
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
					summaryTitle: "Your Company Details",
					form: [
						{
							id: "companyName",
							field: "Company Name",
							value: "",
							placeholder: "Enter your Company Name",
						},
						{
							id: "companyPosition",
							field: "Company Position",
							value: "",
							placeholder: "Select an Application Purpose",
						},
						{
							id: "companyRates",
							field: "Rate per hour",
							value: "",
							placeholder: "Enter your rate per hour",
						},

						{
							id: "companyEmail",
							field: "Company's Email Address",
							value: "",
							placeholder: "Enter your Company's Email",
						},
						{
							id: "companyContact",
							field: "Company's Contact Number",
							value: "",
							placeholder: "Enter your Company's Contact Number",
						},
						{
							id: "companySuperVisor",
							field: "Company's Supervisor",
							value: "",
							placeholder: "Enter Company's Supervisor Name",
						},
					],
				},
			],
		};
	},

	computed: {
		getCurrentForm() {
			return this.formData[this.getStepperIndex];
		},
		getStepperIndex() {
			return this.$store.state.stepperIndex;
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

		handlePreviousBtn() {
			this.$root.$emit("handlePreviousStep");
		},

		handleNextBtn() {
			this.$root.$emit("handleNextStep");
		},

		async handleSubmitApplication() {
			this.isLoading = true;
			const payload = this.getPayload(0);
			console.log("payload is", payload);
			try {
				await employeeAPI.saveEmployee(payload);
			} catch (error) {
				console.log(error);
			} finally {
				console.log("Employee successfully created.");
				this.handlePostCompany();
			}
		},

		async handlePostCompany() {
			const payload = this.getPayload(1);
			console.log("payload is for company", payload);
			try {
				await employeeAPI.saveCompany(payload);
			} catch (error) {
				console.log(error);
			} finally {
				console.log("Company successfully created.");
				setTimeout(() => {
					this.isLoading = false;
					this.$store.commit("setStepperIndex", 0);
					this.$router.push("/result");
				}, 3000);
			}
		},

		getPayload(index) {
			var data = {};
			this.formData[index].form.map((field) => {
				data[field.id] = field.value;
			});

			return data;
		},
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
	margin-bottom: 1em;

	.form-input-item {
		flex: 0 0 48%;
		margin-top: 1.5em;
		margin-right: auto;
	}

	.full-field {
		flex: 0 0 96%;
		margin-right: 5px;
	}
}

@media (max-width: 550px) {
	.form-input-item {
		flex: 0 0 96% !important;
	}
}

.form-button {
	& > * {
		width: 150px;
		margin-right: 5px;
	}
}

.form-summary-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 1em;
	padding-bottom: 5em;
}

.summary-table {
	display: flex;
	flex-direction: column;
	margin-top: 1.5em;
	width: 80%;

	.summary-item {
		display: flex;
		flex-wrap: wrap;

		& > * {
			flex: 0 0 50%;
			border-bottom: 1.5px solid grey;
			padding: 0.5em;
		}
	}
}

.form-loading-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 2em;
}
</style>
