<template>
    <jet-form-section @submitted="updateOrCreate">
        <template #title>
            Wallet Information
        </template>

        <template #description>
            Update wallet information.
        </template>

        <template #form>
            <!-- Name -->
            <div class="col-span-6 sm:col-span-4">
                <jet-label for="name" value="Name" />
                <jet-input id="name" type="text" class="mt-1 block w-full"
                    v-model="resource.name" :disabled="!canUpdateOrCreate" />
                <jet-input-error :message="errors.name" class="mt-2" />
            </div>

            <!-- User -->
            <div class="col-span-6 sm:col-span-4" v-if="$page.props.user.is_admin">
                <jet-label for="user_id" value="User" />
                <jet-select id="user_id" class="mt-1 block w-full" v-model="resource.user_id" :options="users" />
                <jet-input-error :message="errors.user_id" class="mt-2" />
            </div>

            <!-- Balance -->
            <div class="col-span-6 sm:col-span-4">
                <jet-label for="balance" value="Balance" />
                <jet-input id="balance" type="text" class="mt-1 block w-full"
                    v-model="resource.balance" :disabled="!$page.props.user.is_admin" />
                <jet-input-error :message="errors.balance" class="mt-2" />
            </div>

            <!-- Is active -->
            <div class="col-span-6 sm:col-span-4 mt-2">
                <jet-label for="is_active" value="Is active" />
                <jet-checkbox id="is_active" v-model:checked="resource.is_active" ref="is_active" />
                <jet-input-error :message="errors.is_active" class="mt-2" />
            </div>
        </template>

        <template #actions v-if="canUpdateOrCreate">
            <jet-action-message :on="recentlySuccessful" class="mr-3">
                Saved.
            </jet-action-message>

            <jet-button>
                Save
            </jet-button>

            <!-- <jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Save
            </jet-button> -->
        </template>
    </jet-form-section>
</template>

<script>
    import JetButton from '@/Jetstream/Button'
    import JetFormSection from '@/Jetstream/FormSection'
    import JetInput from '@/Jetstream/Input'
    import JetCheckbox from '@/Jetstream/Checkbox'
    import JetInputError from '@/Jetstream/InputError'
    import JetLabel from '@/Jetstream/Label'
    import JetActionMessage from '@/Jetstream/ActionMessage'
    import JetSecondaryButton from '@/Jetstream/SecondaryButton'
    import JetSelect from '@/Jetstream/Select'

    export default {
        components: {
            JetActionMessage,
            JetButton,
            JetFormSection,
            JetInput,
            JetCheckbox,
            JetInputError,
            JetLabel,
            JetSelect,
            JetSecondaryButton,
        },

        props: {
            resource: {
                type: Object,
                // default: {
                //     name: '',
                //     user_id: null,
                //     balance: 0,
                //     is_active: 0
                // }
            }
        },

        data() {
            return {
                recentlySuccessful: false,
                errors: {},
                users: [],
                // wallet: {
                //     name: this.resource.name,
                //     user_id: this.resource.user_id,
                //     balance: this.resource.balance,
                //     is_active: this.resource.is_active
                // }
            }
        },

        mounted() {
            if(this.$page.props.user.is_admin) {
                this.fetchUsers()
            }
        },

        computed: {
            canUpdateOrCreate() {
                return true
                // return this.permissions.canUpdate || !this.attributes.id
            },
        },

        methods: {
            updateOrCreate() {
                if(this.resource.id) {
                    axios.put(route('api.wallets.update', [this.resource.id]), this.resource)
                        .then((response) => {
                            this.recentlySuccessful = true
                        });

                } else {
                    axios.post(route('api.wallets.store'), this.resource)
                        .then((response) => {
                            this.recentlySuccessful = true
                            this.$inertia.visit(route('wallets.index'))
                        }).catch(error => {
                            if (error.response.status == 422) {
                                this.errors = _.mapValues(error.response.data.errors, error => _.first(error))
                            }
                        });
                }
            },
            fetchUsers() {
                axios.get(route('api.users.index')).then(response => {
                    let data = _.reject(response.data.data, {id: this.$page.props.user.id})
                    this.users = _.map(data, (user) => ({
                        value: user.id,
                        name: user.name
                    }))
                    this.resource.user_id = _.first(this.users).value
                })
            }
        },
    }
</script>
