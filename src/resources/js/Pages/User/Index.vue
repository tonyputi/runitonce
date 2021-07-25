<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Users
            </h2>
        </template>

        <div class="py-12">
            <users-table />
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from '@/Layouts/AppLayout'
    import UsersTable from './UsersTable'
    
    export default {
        components: {
            AppLayout,
            UsersTable
        }
    }
</script>
