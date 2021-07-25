<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ title }}
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <div>
                    <update-resource-form :resource="resource" />

                    <jet-section-border />
                </div>

                <div>
                    <delete-resource-form :resource="resource" class="mt-10 sm:mt-0" />
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from '@/Layouts/AppLayout'
import JetSectionBorder from '@/Jetstream/SectionBorder'
import UpdateResourceForm from './UpdateResourceForm'
import DeleteResourceForm from './DeleteResourceForm'

export default {
    components: {
        AppLayout,
        JetSectionBorder,
        DeleteResourceForm,
        UpdateResourceForm
    },

    data() {
        return {
            resource: {
                name: '',
                user_id: null,
                balance: 0,
                is_active: false
            },
        }
    },

    computed: {
        isCreating() {
            return route().params.wallet === 'create'
        },
        title() {
            return this.isCreating ? `Create new wallet` : `Wallet: ${this.resource?.name}`
        }
    },

    methods: {
        fetch() {
            axios.get(route('api.wallets.show', [route().params.wallet])).then((response) => {
                this.resource = response.data.data
            })
        }
    },

    mounted() {
        if(!this.isCreating) {
            this.fetch()
        }
    }
}
</script>
