export default {
	data: () => ({
		dialog: {
			isActive: false
		}
	}),
	methods: {
		toggleDialog() {
			this.dialog.isActive = !this.dialog.isActive
		},
	}
}