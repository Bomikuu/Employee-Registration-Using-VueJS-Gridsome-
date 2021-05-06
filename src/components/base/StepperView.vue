<template>
	<ul id="stepper-container">
		<li
			v-for="(step, index) in stepperList"
			:class="{ active: isIndexSelected(index) }"
			:key="`stepper-${index}`"
			:id="step.id"
			@click="moveStepper(index)"
		>
			<strong>{{ step.title }}</strong>
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			stepperList: [
				{
					id: "personal",
					title: "Personal Details",
				},
				{
					id: "company",
					title: "Company Details",
				},
				{
					id: "final",
					title: "Final Details",
				},
			],
		};
	},

	computed: {
		getStepperIndex() {
			return this.$store.state.stepperIndex;
		},
	},

	mounted() {
		this.$root.$on("handleNextStep", () => {
			this.handleMoveStepper();
		});

		this.$root.$on("handlePreviousStep", () => {
			this.handlePreviousStepper();
		});
	},

	methods: {
		isIndexSelected(index) {
			return index === this.getStepperIndex;
		},

		moveStepper(index) {
			this.$store.commit("setStepperIndex", index);
		},

		handleMoveStepper() {
			const value = this.getStepperIndex + 1;
			this.$store.commit("setStepperIndex", value);
		},

		handlePreviousStepper() {
			const value = this.getStepperIndex - 1;
			this.$store.commit("setStepperIndex", value);
		},

		getClickFunction(index) {
			if (index === 0 || index === this.stepperList.length - 1) {
				this.handleMoveStepper();
			} else if (index !== 0) {
				this.handlePreviousStepper();
			}
		},
	},
};
</script>

<style>
#stepper-container {
	margin-bottom: 30px;
	overflow: hidden;
	color: lightgrey;
	/* margin: 1em auto; */
}

#stepper-container .active {
	color: #000000;
}

#stepper-container li {
	list-style-type: none;
	font-size: 12px;
	width: 33.33%;
	float: left;
	position: relative;
	text-align: center;
	cursor: pointer;
}

#stepper-container #personal:before {
	content: "1";
}

#stepper-container #company:before {
	content: "2";
}

#stepper-container #final:before {
	content: "3";
}

#stepper-container #confirm:before {
	content: "4";
}

#stepper-container li:before {
	width: 50px;
	height: 50px;
	line-height: 45px;
	display: block;
	font-size: 18px;
	color: #ffffff;
	background: lightgray;
	border-radius: 50%;
	margin: 0 auto 10px auto;
	padding: 2px;
}

#stepper-container li:after {
	content: "";
	width: 100%;
	height: 2px;
	background: lightgray;
	position: absolute;
	left: 0;
	top: 25px;
	z-index: -1;
}

#stepper-container li.active:before,
#stepper-container li.active:after {
	background: skyblue;
}
</style>
