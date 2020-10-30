export default {
	data: () => ({
		loading: {
			input: false,
			progress: false,
			button: false
		}
	}),
	methods: {
		startLoader(el) {
			this.loading[el] = true
		},
		stopLoader(el) {
			this.loading[el] = false
		}
	}
}