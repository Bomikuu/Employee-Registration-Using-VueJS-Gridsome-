<template>
	<Layout>
		<div class="result-container">
			<div class="result-inner-container">
				<h3>Thank you for your Participation</h3>
				<span>Your information has been updated.</span>
				<b-button
					class="mt-4"
					type="submit"
					variant="primary"
					@click="$router.push('/')"
					>Go To Home
				</b-button>
			</div>
		</div>
	</Layout>
</template>

<script>
export default {};
</script>

<style lang="scss">
.result-container {
	height: 80vh;
	display: flex;
	align-items: center;

	.result-inner-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: auto;
	}
}
</style>
