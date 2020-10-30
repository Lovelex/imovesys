import cookie from 'vue-cookie'

export default {
	methods: {
		handleErrors(error) {
			console.log(error.response)
			if(error.response.statusText === 'Unauthorized') {
				this.handleUnauthorized()
			}

		},
		handleUnauthorized() {
			cookie.delete('token')
			this.$router.push({ name: 'Login' })
		},
	}
}