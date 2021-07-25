<template>
    <table class="table-auto text-gray-900 text-sm w-full">
        <thead>
            <tr class="border-b">
                <th class="p-3 text-left">ID</th>
                <th class="p-3 text-left">Name</th>
                <th class="p-3 text-left">Email</th>
                <th class="p-3">Is admin</th>
                <th class="p-3 text-left">Wallets</th>
                <th class="p-3">Created at</th>
                <th class="p-3">Updated at</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td class="p-3">{{ user.id }}</td>
                <td class="p-3">{{ user.name }}</td>
                <td class="p-3">{{ user.email }}</td>
                <td class="p-3 text-center">
                    <jet-checkbox name="is_admin" v-model:checked="user.is_admin" v-if="$page.props.user.is_admin && $page.props.user.id != user.id" />
                    <span v-else>{{ user.is_admin }}</span>
                </td>
                <td class="p-3">
                    <jet-nav-link :href="route('users.wallets', [user.id])">
                        {{ user.wallets_count }}
                    </jet-nav-link>
                </td>
                <td class="p-3 text-center">{{ user.created_at }}</td>
                <td class="p-3 text-center">{{ user.updated_at }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import JetCheckbox from '@/Jetstream/Checkbox'
    import JetNavLink from '@/Jetstream/NavLink'

    export default {
        components: {
            JetCheckbox,
            JetNavLink
        },

        data() {
            return {
                users: []
            }
        },

        mounted() {
            this.fetch()
        },

        methods: {
            fetch() {
                axios.get('/api/users').then((response) => {
                    this.users = response.data.data
                })
            }
        }
    }
</script>
