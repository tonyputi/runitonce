<template>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8" v-if="!isLoading">
        <div class="flex my-4">
            <jet-search-input v-model="search" @input="fetch()" placeholder="Search wallet" />

            <jet-link-button class="ml-4" :href="route('wallets.create')" >
                Create
            </jet-link-button>
        </div>

        <div v-if="hasRecords" class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <jet-table class="text-sm">
                <template #header>
                    <tr class="border-b">
                        <th class="p-3">
                            <jet-checkbox v-model:checked="selectAll" />
                        </th>
                        <th class="p-3 text-left">ID</th>
                        <th class="p-3 text-left" v-if="$page.props.user.is_admin">User</th>
                        <th class="p-3 text-left">Name</th>
                        <th class="p-3 text-left">Balance</th>
                        <th class="p-3">Is active</th>
                        <th class="p-3">Updated at</th>
                        <th class="p-3"></th>
                    </tr>
                </template>

                <template #body>
                    <tr v-for="wallet in collection" :key="wallet.id" class="border border-black-600">
                        <td class="px-2 py-4 text-center">
                            <jet-checkbox :value="wallet" v-model:checked="collectionSelected" />
                        </td>
                        <td class="p-3 text-left">{{ wallet.id }}</td>
                        <td class="p-3" v-if="$page.props.user.is_admin">
                            <jet-nav-link :href="route('users.show', [wallet.user.id])">
                                {{ wallet.user.name }}
                            </jet-nav-link>
                        </td>
                        <td class="p-3">{{ wallet.name }}</td>
                        <td class="p-3">€ {{ wallet.balance }}</td>
                        <td class="p-3 text-center">
                            <jet-checkbox name="is_active" v-model:checked="wallet.is_active" @change="updateWallet(wallet)" />
                        </td>
                        <td class="p-3 text-center">{{ wallet.updated_at }}</td>
                        <td class="p-3">
                            <div class="inline-flex items-center">
                                <inertia-link :href="route('wallets.show', wallet.id)"
                                    class="inline-flex cursor-pointer text-70 hover:text-primary mr-3">
                                    <EyeIcon class="h-6 w-6" />
                                </inertia-link >
                                <button @click="resourceBeingDeleted=wallet"
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
    import JetNavLink from '@/Jetstream/NavLink'
    import JetLinkButton from '@/Jetstream/LinkButton'
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
            JetNavLink,
            JetLinkButton,
            JetBadge,
            JetAlert,
            EyeIcon,
            TrashIcon,
            DeleteResourceModal
        },

        computed: {
            endpoint() {
                return (route().params.user) 
                    ? route('api.users.wallets.index', [route().params.user])
                    : route('api.wallets.index')
            }
        },

        methods: {
            updateWallet(wallet) {
                axios.put(route('api.wallets.update', [wallet.id]), wallet).then(response => {
                    this.toast.success('Operation success');
                }); 
            }
        }
    }
</script>
