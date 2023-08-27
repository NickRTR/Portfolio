import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	vite: {
		optimizeDeps: {
			include: ["lodash.get", "lodash.isequal", "lodash.clonedeep"]
		}
	}
};

export default config;
