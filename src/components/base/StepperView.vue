<template>
	<ul id="stepper-container">
		<li
			v-for="(step, index) in stepperList"
			:class="{ active: isIndexSelected(index) }"
			:key="`stepper-${index}`"
			:id="step.id"
		>
			<strong>{{ step.title }}</strong>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		stepperIndex: {
			default: 0,
			type: Number,
		},
	},

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

	methods: {
		isIndexSelected(index) {
			return index === this.stepperIndex;
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
