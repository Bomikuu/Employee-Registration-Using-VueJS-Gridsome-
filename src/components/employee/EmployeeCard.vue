<template>
	<div class="employee-outer-container">
		<div class="employee-card-container shadow-sm border-0">
			<div class="card-body">
				<div class="user-picture">
					<img
						:src="require('@/assets/images/cat.jpeg')"
						class="shadow-sm rounded-circle"
						height="130"
						width="130"
					/>
				</div>
				<div class="user-content">
					<h5 class="text-capitalize user-name">
						{{ `${employee.firstName} ${employee.lastName}` }}
					</h5>
					<p
						class=" text-capitalize text-muted small blockquote-footer"
					>
						Web developer
					</p>
					<div class="small">
						<i class="fas fa-star text-warning"></i>
						<i class="fas fa-star text-warning"></i>
						<i class="fas fa-star text-warning"></i>
						<i class="fas fa-star-half-alt text-warning"></i>
						<i class="fas fa-star text-light"></i>
					</div>
					<p class="small text-muted mb-0">
						<ul>
                            <li> Birthday: {{ employee.birthday}}</li>
                            <li> Contact Number: {{ employee.contactNumber}}</li>
                            <li> Contact Number: {{ employee.email}}</li>
                            <li> Contact Number: {{ employee.address}}</li>
                        </ul>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import startCase from "lodash/startCase";

export default {
	props: {
		employee: {
			default: () => {
				return {};
			},
			type: Object,
		},
	},

    methods: {
        camelToString() {

        }
    }
};
</script>

<style lang="scss">
.employee-outer-container {
	flex: 0 0 33.33%;
    max-width: 33.33%;
    min-width: 33.33%;

	.employee-card-container {
		width: 90%;
		max-width: 90%;
		min-width: 90%;
		margin: 1em auto;
		border-radius: 20px;
		min-height: 100%;
		box-shadow: 0 0.325rem 0.5rem rgba(0, 0, 0, 0.075);

		.user-picture {
			width: 130px;
			height: 130px;
			img {
				top: -20%;
				right: 10%;
				background: #f8f9fa !important;
				padding: 10px;
			}
		}

		.user-content .user-name {
			margin-right: 150px;
		}

		&:hover {
			transform: scale(1.1);
		}
	}
}
</style>
