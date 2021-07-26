<template>
    <app-layout v-if="!isLoading">
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
import InteractWithResource from '@/mixins/InteractWithResource'

export default {
    mixins: [InteractWithResource],
    components: {
        AppLayout,
        JetSectionBorder,
        DeleteResourceForm,
        UpdateResourceForm
    },

    data() {
        return {
            isLoading: true,
            resource: {
                name: '',
                user_id: null,
                balance: 0,
                is_active: false
            },
        }
    },

    computed: {
        endpoint() {
            return route('api.wallets.show', [route().params.wallet])
        },
        isCreating() {
            return route().params.wallet === 'create'
        },
        title() {
            return this.isCreating ? `Create new wallet` : `Wallet: ${this.resource?.name}`
        }
    },

    created() {
        if(!this.isCreating) {
            this.fetch()
        } else {
            this.isLoading = false
        }
    }
}
</script>
