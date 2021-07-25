<template>
    <jet-action-section>
        <template #title>
            Delete wallet
        </template>

        <template #description>
            Permanently delete wallet.
        </template>

        <template #content>
            <div class="max-w-xl text-sm text-gray-600">
                Once wallet is deleted, all of its resources and data will be permanently deleted. Before deleting wallet, please download any data or information that you wish to retain.
            </div>

            <div class="mt-5">
                <jet-danger-button @click="resourceBeingDeleted=resource">
                    Delete wallet
                </jet-danger-button>
            </div>

            <!-- Delete resource confirmation modal -->
            <delete-resource-modal
                :resource="resourceBeingDeleted"
                @close="resourceBeingDeleted = null" />
        </template>
    </jet-action-section>
</template>

<script>
import JetActionSection from '@/Jetstream/ActionSection'
import JetDangerButton from '@/Jetstream/DangerButton'
import DeleteResourceModal from './DeleteResourceModal';

export default {
    components: {
        JetActionSection,
        JetDangerButton,
        DeleteResourceModal
    },

    props: ['resource'],

    data() {
        return {
            resourceBeingDeleted: null,
        }
    },
}
</script>
