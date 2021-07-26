<template>
    <div>
        <div class="p-6 sm:px-10 bg-white border-b border-gray-200">
            <div class="mt-8 text-2xl">
                Welcome to wallets manager application!
            </div>

            <div class="mt-6 text-gray-500">
                Wallet manager is the application that will help you to manage all your wallets.
                To use it is simple as it is. Just go on the `wallets` page to create, activate, update or delete your wallets
            </div>
        </div>

        <div class="bg-gray-200 bg-opacity-25 grid grid-cols-1 md:grid-cols-2">
            <div class="p-6">
                <div class="flex items-center">
                    <div class="ml-4 text-lg text-gray-600 leading-7 font-semibold"><a href="https://laravel.com/docs/8.x/sanctum">Sanctum</a></div>
                </div>

                <div class="ml-4">
                    <div class="mt-2 text-sm text-gray-500">
                        Laravel Sanctum provides a featherweight authentication system for SPAs (single page applications), mobile applications, and simple, token based APIs.
                    </div>
                </div>
            </div>

            <div class="p-6 border-t border-gray-200 md:border-t-0 md:border-l">
                <div class="flex items-center">
                    <div class="ml-4 text-lg text-gray-600 leading-7 font-semibold"><a href="https://jetstream.laravel.com/2.x/introduction.html">Jetstream</a></div>
                </div>

                <div class="ml-4">
                    <div class="mt-2 text-sm text-gray-500">
                        Laravel Jetstream is a beautifully designed application starter kit for Laravel and provides the perfect starting point for your next Laravel application
                    </div>
                </div>
            </div>

            <div class="p-6 border-t border-gray-200">
                <div class="flex items-center">
                    <div class="ml-4 text-lg text-gray-600 leading-7 font-semibold"><a href="https://laravel.com/docs/8.x/http-tests">API Tests</a></div>
                </div>

                <div class="ml-4">
                    <div class="mt-2 text-sm text-gray-500">
                        Laravel provides a very fluent API for making HTTP requests to your application and examining the responses.
                    </div>
                </div>
            </div>

            <div class="p-6 border-t border-gray-200 md:border-l">
                <div class="flex items-center">
                    <div class="ml-4 text-lg text-gray-600 leading-7 font-semibold"><a href="https://docs.docker.com/">Docker</a></div>
                </div>

                <div class="ml-4">
                    <div class="mt-2 text-sm text-gray-500">
                        Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import JetApplicationLogo from '@/Jetstream/ApplicationLogo'

    export default {
        components: {
            JetApplicationLogo,
        },
    }
</script>
