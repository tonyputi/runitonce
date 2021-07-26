export default {
    methods: {
        fetch() {
            this.isLoading = true
            axios.get(this.endpoint).then(response => {
                this.resource = response.data.data
                this.isLoading = false
            }).catch(error => {
                this.$inertia.visit(route('error', [error.response.status]))
            })
        }
    }
}