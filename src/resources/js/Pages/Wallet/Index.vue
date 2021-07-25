<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Wallets
            </h2>
        </template>

        <div class="py-12">
            <wallets-table />
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from '@/Layouts/AppLayout'
    import WalletsTable from './WalletsTable'
    
    export default {
        components: {
            AppLayout,
            WalletsTable
        }
    }
</script>
