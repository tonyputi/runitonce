export default {
    methods: {
        fetch() {
            axios.get(this.endpoint).then(response => {
                this.resource = response.data.data
            }).catch(error => {
                this.$inertia.visit(route('error', [error.response.status]))
            })
        }
    }
}