// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import store from "./store";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default function(Vue, { router, head, isClient, appOptions }) {
	// Set default layout as a global component

	Vue.component("Layout", DefaultLayout);

	appOptions.store = store;

	// Make BootstrapVue available throughout your project
	Vue.use(BootstrapVue);
	// Optionally install the BootstrapVue icon components plugin
	Vue.use(IconsPlugin);
}
