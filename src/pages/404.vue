<template>
	<Layout>
		<div class="error-main-container">
			<h3>Page does not exist!</h3>
			<span
				>The page you're trying to access is doesnt exist. Please
				redirect to Home</span
			>
			<b-button
				class="mt-4"
				type="submit"
				variant="primary"
				@click="$router.push('/')"
				>Go To Home
			</b-button>
		</div>
	</Layout>
</template>

<script>
export default {};
</script>

<style>
.error-container {
	display: flex;
	flex-direction: column;
}
</style>
