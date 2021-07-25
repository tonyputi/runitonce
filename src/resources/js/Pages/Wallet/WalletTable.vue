<template>
    <table class="table-auto text-gray-900 text-sm w-full">
        <thead>
            <tr class="border-b">
                <th class="p-3">
                    <jet-checkbox />
                </th>
                <th class="p-3 text-left">ID</th>
                <th class="p-3 text-left" v-if="$page.props.user.is_admin">User</th>
                <th class="p-3 text-left">Name</th>
                <th class="p-3 text-left">Balance</th>
                <th class="p-3">Is active</th>
                <th class="p-3">Created at</th>
                <th class="p-3">Updated at</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="wallet in wallets" :key="wallet.id">
                <td class="p-3 text-center">
                    <jet-checkbox />
                </td>
                <td class="p-3">{{ wallet.id }}</td>
                <td class="p-3" v-if="$page.props.user.is_admin">
                    <jet-nav-link :href="route('users.show', [wallet.user.id])">
                        {{ wallet.user.name }}
                    </jet-nav-link>
                </td>
                <td class="p-3">{{ wallet.name }}</td>
                <td class="p-3">€ {{ wallet.balance }}</td>
                <td class="p-3 text-center">
                    <jet-checkbox name="is_active" v-model:checked="wallet.is_active" />
                </td>
                <td class="p-3 text-center">{{ wallet.created_at }}</td>
                <td class="p-3 text-center">{{ wallet.updated_at }}</td>
                <td class="px-2 py-4">
                    <div class="inline-flex items-center">
                        <inertia-link :href="route('wallet.show', wallet.id)"
                            class="inline-flex cursor-pointer text-70 hover:text-primary mr-3">
                            <EyeIcon class="h-6 w-6" />
                        </inertia-link >
                        <button
                            @click="walletBeingDeleted=walled"
                            class="inline-flex appearance-none cursor-pointer hover:text-primary mr-3">
                            <TrashIcon class="h-6 w-6" />
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import JetCheckbox from '@/Jetstream/Checkbox'
    import JetNavLink from '@/Jetstream/NavLink'
    import { EyeIcon, TrashIcon } from '@heroicons/vue/outline'

    export default {
        components: {
            JetCheckbox,
            JetNavLink,
            EyeIcon,
            TrashIcon
        },

        data() {
            return {
                wallets: []
            }
        },

        mounted() {
            this.fetch()
        },

        methods: {
            fetch() {
                axios.get('/api/wallet').then((response) => {
                    this.wallets = response.data.data
                })
            }
        }
    }
</script>
