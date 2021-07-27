<template>
    <jet-confirmation-modal :show="resource?.id" @close="closeModal">
        <template #title>
            Delete {{ resource?.name }}
        </template>

        <template #content>
            Are you sure you want to delete {{ resource?.name }}? Once is deleted, all of its resources and data will be permanently deleted.
        </template>

        <template #footer>
            <jet-secondary-button @click="closeModal">
                Nevermind
            </jet-secondary-button>

            <jet-danger-button class="ml-2" @click="deleteResource" dusk="confirm-delete-button">
                Delete
            </jet-danger-button>
        </template>
    </jet-confirmation-modal>
</template>

<script>
import JetConfirmationModal from '@/Jetstream/ConfirmationModal'
import JetSecondaryButton from '@/Jetstream/SecondaryButton'
import JetDangerButton from '@/Jetstream/DangerButton'

export default {
    components: {
        JetConfirmationModal,
        JetSecondaryButton,
        JetDangerButton,
    },

    props: ['resource'],
    emits: ['close', 'change'],

    methods: {
        deleteResource() {
            axios.delete(route('api.wallets.destroy', [this.resource.id])).then((response) => {
                this.$emit('change')
                this.closeModal()
            })
        },

        closeModal() {
            this.$emit('close')
        },
    },
}
</script>
