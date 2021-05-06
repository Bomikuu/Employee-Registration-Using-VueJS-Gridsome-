<template>
	<b-form-group
		:id="`input-group-${data.id}`"
		:label="data.field"
		:label-for="data.id"
	>
		<b-form-input
			:id="data.id"
			v-model="data.value"
			type="email"
			:placeholder="data.placeholder"
			required
		></b-form-input>
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
