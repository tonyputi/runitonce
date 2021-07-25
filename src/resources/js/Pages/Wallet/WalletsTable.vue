<template>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="flex my-4">
            <jet-search-input v-model="search" @input="fetch(1)" placeholder="Search wallet" />

            <jet-link-button class="ml-4" :href="route('wallets.create')">
                Create
            </jet-link-button>
        </div>

        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
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
                    <tr v-for="wallet in wallets" :key="wallet.id" class="border border-black-600">
                        <td class="px-2 py-4 text-center">
                            <jet-checkbox :value="wallet" v-model:checked="collectionSelected" />
                        </td>
                        <td class="p-3 text-left">{{ wallet.id }}</td>
                        <td class="p-3" v-if="$page.props.user.is_admin">
                            <jet-nav-link :href="route('users.show', [wallet.user.id])" v-if="wallet.user">
                                {{ wallet.user.name }}
                            </jet-nav-link>
                            <span v-else>-</span>
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
    import JetCheckbox from '@/Jetstream/Checkbox'
    import JetNavLink from '@/Jetstream/NavLink'
    import JetLinkButton from '@/Jetstream/LinkButton'
    import DeleteResourceModal from './DeleteResourceModal';
    import { EyeIcon, TrashIcon } from '@heroicons/vue/outline'


    export default {
        components: {
            JetSearchInput,
            JetTable,
            JetPagination,
            JetCheckbox,
            JetNavLink,
            JetLinkButton,
            JetBadge,
            EyeIcon,
            TrashIcon,
            DeleteResourceModal
        },

        data() {
            return {
                wallets: [],
                meta: null,
                search: null,
                resourceBeingDeleted: null,
                collectionSelected: []
            }
        },

        mounted() {
            this.fetch()
        },

        computed: {
            selectAll: {
                get() {
                    return this.wallets ? this.collectionSelected.length == this.wallets.length : false;
                },
                set(value) {
                    (value) ? this.collectionSelected = this.wallets : this.collectionSelected = [];
                }
            }
        },

        methods: {
            fetch(page = 1) {
                let config = {
                    params: {
                        page: page,
                        search: this.search
                    }
                }

                let _route = route('api.wallet.index')
                if (route().params.user) {
                    _route = route('api.users.wallets.index', [route().params.user])
                }
                
                axios.get(_route, config).then((response) => {
                    this.wallets = response.data.data
                    this.meta = response.data.meta
                })
            },
            updateWallet(wallet) {
                axios.put(route('api.wallet.update', [wallet.id]), wallet).then(response => {
                    // show banner
                });
                
            }
        }
    }
</script>
