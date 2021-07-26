export default {
    methods: {
        fetch() {
            axios.get(this.endpoint).then(response => {
                this.resource = response.data.data
            }).catch(error => {
                if (error.response.status === 404) {
                    this.$inertia.visit(route('error', [404]))
                }
            })
        }
    }
}