<template>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="flex my-4">
            <jet-search-input v-model="search" @input="fetch()" placeholder="Search user" />
        </div>

        <div v-if="hasRecords" class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <jet-table class="text-sm">
                <template #header>
                    <tr class="border-b">
                        <th class="p-3">
                            <jet-checkbox v-model:checked="selectAll" />
                        </th>
                        <th class="p-3 text-left">ID</th>
                        <th class="p-3 text-left">Name</th>
                        <th class="p-3 text-left">Email</th>
                        <th class="p-3">Is admin</th>
                        <th class="p-3">Wallets</th>
                        <th class="p-3">Updated at</th>
                        <th class="p-3"></th>
                    </tr>
                </template>

                <template #body>
                    <tr v-for="user in collection" :key="user.id" class="border border-black-600">
                        <td class="px-2 py-4 text-center">
                            <jet-checkbox :value="user" v-model:checked="collectionSelected" />
                        </td>
                        <td class="p-3 text-left">{{ user.id }}</td>
                        <td class="p-3 text-left">{{ user.name }}</td>
                        <td class="p-3 text-left">{{ user.email }}</td>
                        <td class="p-3 text-center">{{ user.is_admin ? 'Yes' : 'No' }}</td>
                        <td class="p-3 text-center">
                            <inertia-link :href="route('users.wallets.index', [user.id])">
                                <jet-badge>{{ user.wallets_count }}</jet-badge>
                            </inertia-link>
                        </td>
                        <td class="p-3 text-center">{{ user.updated_at }}</td>
                        <td class="p-3">
                            <div class="inline-flex items-center">
                                <inertia-link  v-if="canView(user)"
                                    :href="route('users.show', user.id)"
                                    class="inline-flex cursor-pointer text-70 hover:text-primary mr-3">
                                    <EyeIcon class="h-6 w-6" />
                                </inertia-link >
                                <button v-if="canDelete(user)"
                                    @click="resourceBeingDeleted=user"
                                    class="inline-flex appearance-none cursor-pointer hover:text-primary mr-3">
                                    <TrashIcon class="h-6 w-6" />
                                </button>
                            </div>
                        </td>
                    </tr>
                </template>
            </jet-table>

            <jet-pagination v-bind="meta" @change="fetch($event)" />
        </div>

        <!-- no result alert -->
        <jet-alert v-else alertStyle="warning">
            <p>Ooops! No wallets to show. Create one or change search criteria if any</p>
        </jet-alert>

        <!-- resource delete modal -->
        <delete-resource-modal
            :resource="resourceBeingDeleted"
            @close="resourceBeingDeleted = null"
            @change="fetch($event)" />
    </div>
</template>

<script>
    import JetSearchInput from '@/Jetstream/SearchInput'
    import JetTable from '@/Jetstream/Table'
    import JetPagination from '@/Jetstream/Pagination'
    import JetBadge from '@/Jetstream/Badge'
    import JetAlert from '@/Jetstream/Alert'
    import JetCheckbox from '@/Jetstream/Checkbox'
    import DeleteResourceModal from './DeleteResourceModal';
    import { EyeIcon, TrashIcon } from '@heroicons/vue/outline'
    import InteractWithCollection from "@/mixins/InteractWithCollection"


    export default {
        mixins: [InteractWithCollection],
        components: {
            JetSearchInput,
            JetTable,
            JetPagination,
            JetCheckbox,
            JetBadge,
            JetAlert,
            EyeIcon,
            TrashIcon,
            DeleteResourceModal
        },

        computed: {
            endpoint() {
                return this.route('api.users.index')
            }
        },

        methods: {
            canView(user) {
                return this.$page.props.user.is_admin || this.$page.props.user.id == user.id
            },

            canDelete(user) {
                return this.$page.props.user.is_admin || this.$page.props.user.id == user.id
            }
        }
    }
</script>
