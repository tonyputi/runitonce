export default {
    data() {
        return {
            collection: [],
            meta: {
                current_page: 1
            },
            search: null,
            isLoading: true,
            resourceBeingDeleted: null,
            collectionSelected: []
        }
    },
    created() {
        this.fetch()
    },
    computed: {
        hasRecords() {
            return !!this.meta?.total
        },
        selectAll: {
            get() {
                return this.collection ? this.collectionSelected.length == this.collection.length : false;
            },
            set(value) {
                (value) ? this.collectionSelected = this.collection : this.collectionSelected = [];
            }
        }
    },
    methods: {
        fetch(page = null) {
            this.isLoading = true;
            let config = {
                params: {
                    page: page ? page : this.meta.current_page,
                    search: this.search
                }
            }
            
            axios.get(this.endpoint, config).then((response) => {
                this.collection = response.data.data
                this.meta = response.data.meta
                this.isLoading = false;
            }).catch(error => {
                this.$inertia.visit(route('error', [error.response.status]))
            })
        },
    }
}