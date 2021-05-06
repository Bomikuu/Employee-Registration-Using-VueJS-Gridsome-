<template>
	<b-form-group
		:id="`input-group-${data.id}`"
		:label="data.field"
		:label-for="data.id"
	>
		<b-form-datepicker
			:id="data.id"
			v-model="data.value"
			class="mb-2"
			:placeholder="data.placeholder"
		></b-form-datepicker>
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
};
</script>

<style></style>
