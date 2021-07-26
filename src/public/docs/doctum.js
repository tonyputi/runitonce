

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '<ul><li data-name="namespace:" class="opened"><div style="padding-left:0px" class="hd"><span class="icon icon-play"></span><a href="[Global_Namespace].html">[Global Namespace]</a></div><div class="bd"><ul><li data-name="class:AddTwoFactorColumnsToUsersTable" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="AddTwoFactorColumnsToUsersTable.html">AddTwoFactorColumnsToUsersTable</a></div></li><li data-name="class:CreateFailedJobsTable" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="CreateFailedJobsTable.html">CreateFailedJobsTable</a></div></li><li data-name="class:CreatePasswordResetsTable" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="CreatePasswordResetsTable.html">CreatePasswordResetsTable</a></div></li><li data-name="class:CreatePersonalAccessTokensTable" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="CreatePersonalAccessTokensTable.html">CreatePersonalAccessTokensTable</a></div></li><li data-name="class:CreateSessionsTable" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="CreateSessionsTable.html">CreateSessionsTable</a></div></li><li data-name="class:CreateUsersTable" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="CreateUsersTable.html">CreateUsersTable</a></div></li><li data-name="class:CreateWalletsTable" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="CreateWalletsTable.html">CreateWalletsTable</a></div></li></ul></div></li><li data-name="namespace:App" class="opened"><div style="padding-left:0px" class="hd"><span class="icon icon-play"></span><a href="App.html">App</a></div><div class="bd"><ul><li data-name="namespace:App_Actions" class="opened"><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="App/Actions.html">Actions</a></div><div class="bd"><ul><li data-name="namespace:App_Actions_Fortify" ><div style="padding-left:36px" class="hd"><span class="icon icon-play"></span><a href="App/Actions/Fortify.html">Fortify</a></div><div class="bd"><ul><li data-name="class:App_Actions_Fortify_CreateNewUser" ><div style="padding-left:62px" class="hd leaf"><a href="App/Actions/Fortify/CreateNewUser.html">CreateNewUser</a></div></li><li data-name="class:App_Actions_Fortify_PasswordValidationRules" ><div style="padding-left:62px" class="hd leaf"><a href="App/Actions/Fortify/PasswordValidationRules.html">PasswordValidationRules</a></div></li><li data-name="class:App_Actions_Fortify_ResetUserPassword" ><div style="padding-left:62px" class="hd leaf"><a href="App/Actions/Fortify/ResetUserPassword.html">ResetUserPassword</a></div></li><li data-name="class:App_Actions_Fortify_UpdateUserPassword" ><div style="padding-left:62px" class="hd leaf"><a href="App/Actions/Fortify/UpdateUserPassword.html">UpdateUserPassword</a></div></li><li data-name="class:App_Actions_Fortify_UpdateUserProfileInformation" ><div style="padding-left:62px" class="hd leaf"><a href="App/Actions/Fortify/UpdateUserProfileInformation.html">UpdateUserProfileInformation</a></div></li></ul></div></li><li data-name="namespace:App_Actions_Jetstream" ><div style="padding-left:36px" class="hd"><span class="icon icon-play"></span><a href="App/Actions/Jetstream.html">Jetstream</a></div><div class="bd"><ul><li data-name="class:App_Actions_Jetstream_DeleteUser" ><div style="padding-left:62px" class="hd leaf"><a href="App/Actions/Jetstream/DeleteUser.html">DeleteUser</a></div></li></ul></div></li></ul></div></li><li data-name="namespace:App_Casts" class="opened"><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="App/Casts.html">Casts</a></div><div class="bd"><ul><li data-name="class:App_Casts_Cents" ><div style="padding-left:44px" class="hd leaf"><a href="App/Casts/Cents.html">Cents</a></div></li></ul></div></li><li data-name="namespace:App_Console" class="opened"><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="App/Console.html">Console</a></div><div class="bd"><ul><li data-name="class:App_Console_Kernel" ><div style="padding-left:44px" class="hd leaf"><a href="App/Console/Kernel.html">Kernel</a></div></li></ul></div></li><li data-name="namespace:App_Exceptions" class="opened"><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="App/Exceptions.html">Exceptions</a></div><div class="bd"><ul><li data-name="class:App_Exceptions_Handler" ><div style="padding-left:44px" class="hd leaf"><a href="App/Exceptions/Handler.html">Handler</a></div></li></ul></div></li><li data-name="namespace:App_Http" class="opened"><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="App/Http.html">Http</a></div><div class="bd"><ul><li data-name="namespace:App_Http_Controllers" ><div style="padding-left:36px" class="hd"><span class="icon icon-play"></span><a href="App/Http/Controllers.html">Controllers</a></div><div class="bd"><ul><li data-name="namespace:App_Http_Controllers_Api" ><div style="padding-left:54px" class="hd"><span class="icon icon-play"></span><a href="App/Http/Controllers/Api.html">Api</a></div><div class="bd"><ul><li data-name="class:App_Http_Controllers_Api_AuthController" ><div style="padding-left:80px" class="hd leaf"><a href="App/Http/Controllers/Api/AuthController.html">AuthController</a></div></li><li data-name="class:App_Http_Controllers_Api_UserController" ><div style="padding-left:80px" class="hd leaf"><a href="App/Http/Controllers/Api/UserController.html">UserController</a></div></li><li data-name="class:App_Http_Controllers_Api_WalletController" ><div style="padding-left:80px" class="hd leaf"><a href="App/Http/Controllers/Api/WalletController.html">WalletController</a></div></li></ul></div></li><li data-name="class:App_Http_Controllers_Controller" ><div style="padding-left:62px" class="hd leaf"><a href="App/Http/Controllers/Controller.html">Controller</a></div></li></ul></div></li><li data-name="namespace:App_Http_Middleware" ><div style="padding-left:36px" class="hd"><span class="icon icon-play"></span><a href="App/Http/Middleware.html">Middleware</a></div><div class="bd"><ul><li data-name="class:App_Http_Middleware_Authenticate" ><div style="padding-left:62px" class="hd leaf"><a href="App/Http/Middleware/Authenticate.html">Authenticate</a></div></li><li data-name="class:App_Http_Middleware_EncryptCookies" ><div style="padding-left:62px" class="hd leaf"><a href="App/Http/Middleware/EncryptCookies.html">EncryptCookies</a></div></li><li data-name="class:App_Http_Middleware_HandleInertiaRequests" ><div style="padding-left:62px" class="hd leaf"><a href="App/Http/Middleware/HandleInertiaRequests.html">HandleInertiaRequests</a></div></li><li data-name="class:App_Http_Middleware_PreventRequestsDuringMaintenance" ><div style="padding-left:62px" class="hd leaf"><a href="App/Http/Middleware/PreventRequestsDuringMaintenance.html">PreventRequestsDuringMaintenance</a></div></li><li data-name="class:App_Http_Middleware_RedirectIfAuthenticated" ><div style="padding-left:62px" class="hd leaf"><a href="App/Http/Middleware/RedirectIfAuthenticated.html">RedirectIfAuthenticated</a></div></li><li data-name="class:App_Http_Middleware_TrimStrings" ><div style="padding-left:62px" class="hd leaf"><a href="App/Http/Middleware/TrimStrings.html">TrimStrings</a></div></li><li data-name="class:App_Http_Middleware_TrustHosts" ><div style="padding-left:62px" class="hd leaf"><a href="App/Http/Middleware/TrustHosts.html">TrustHosts</a></div></li><li data-name="class:App_Http_Middleware_TrustProxies" ><div style="padding-left:62px" class="hd leaf"><a href="App/Http/Middleware/TrustProxies.html">TrustProxies</a></div></li><li data-name="class:App_Http_Middleware_VerifyCsrfToken" ><div style="padding-left:62px" class="hd leaf"><a href="App/Http/Middleware/VerifyCsrfToken.html">VerifyCsrfToken</a></div></li></ul></div></li><li data-name="namespace:App_Http_Requests" ><div style="padding-left:36px" class="hd"><span class="icon icon-play"></span><a href="App/Http/Requests.html">Requests</a></div><div class="bd"><ul><li data-name="class:App_Http_Requests_UserStoreRequest" ><div style="padding-left:62px" class="hd leaf"><a href="App/Http/Requests/UserStoreRequest.html">UserStoreRequest</a></div></li><li data-name="class:App_Http_Requests_UserUpdateRequest" ><div style="padding-left:62px" class="hd leaf"><a href="App/Http/Requests/UserUpdateRequest.html">UserUpdateRequest</a></div></li><li data-name="class:App_Http_Requests_WalletStoreRequest" ><div style="padding-left:62px" class="hd leaf"><a href="App/Http/Requests/WalletStoreRequest.html">WalletStoreRequest</a></div></li><li data-name="class:App_Http_Requests_WalletUpdateRequest" ><div style="padding-left:62px" class="hd leaf"><a href="App/Http/Requests/WalletUpdateRequest.html">WalletUpdateRequest</a></div></li></ul></div></li><li data-name="namespace:App_Http_Resources" ><div style="padding-left:36px" class="hd"><span class="icon icon-play"></span><a href="App/Http/Resources.html">Resources</a></div><div class="bd"><ul><li data-name="class:App_Http_Resources_UserResource" ><div style="padding-left:62px" class="hd leaf"><a href="App/Http/Resources/UserResource.html">UserResource</a></div></li><li data-name="class:App_Http_Resources_WalletResource" ><div style="padding-left:62px" class="hd leaf"><a href="App/Http/Resources/WalletResource.html">WalletResource</a></div></li></ul></div></li><li data-name="class:App_Http_Kernel" ><div style="padding-left:44px" class="hd leaf"><a href="App/Http/Kernel.html">Kernel</a></div></li></ul></div></li><li data-name="namespace:App_Models" class="opened"><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="App/Models.html">Models</a></div><div class="bd"><ul><li data-name="class:App_Models_User" ><div style="padding-left:44px" class="hd leaf"><a href="App/Models/User.html">User</a></div></li><li data-name="class:App_Models_Wallet" ><div style="padding-left:44px" class="hd leaf"><a href="App/Models/Wallet.html">Wallet</a></div></li></ul></div></li><li data-name="namespace:App_Observers" class="opened"><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="App/Observers.html">Observers</a></div><div class="bd"><ul><li data-name="class:App_Observers_UserObserver" ><div style="padding-left:44px" class="hd leaf"><a href="App/Observers/UserObserver.html">UserObserver</a></div></li></ul></div></li><li data-name="namespace:App_Policies" class="opened"><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="App/Policies.html">Policies</a></div><div class="bd"><ul><li data-name="class:App_Policies_UserPolicy" ><div style="padding-left:44px" class="hd leaf"><a href="App/Policies/UserPolicy.html">UserPolicy</a></div></li><li data-name="class:App_Policies_WalletPolicy" ><div style="padding-left:44px" class="hd leaf"><a href="App/Policies/WalletPolicy.html">WalletPolicy</a></div></li></ul></div></li><li data-name="namespace:App_Providers" class="opened"><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="App/Providers.html">Providers</a></div><div class="bd"><ul><li data-name="class:App_Providers_AppServiceProvider" ><div style="padding-left:44px" class="hd leaf"><a href="App/Providers/AppServiceProvider.html">AppServiceProvider</a></div></li><li data-name="class:App_Providers_AuthServiceProvider" ><div style="padding-left:44px" class="hd leaf"><a href="App/Providers/AuthServiceProvider.html">AuthServiceProvider</a></div></li><li data-name="class:App_Providers_BroadcastServiceProvider" ><div style="padding-left:44px" class="hd leaf"><a href="App/Providers/BroadcastServiceProvider.html">BroadcastServiceProvider</a></div></li><li data-name="class:App_Providers_EventServiceProvider" ><div style="padding-left:44px" class="hd leaf"><a href="App/Providers/EventServiceProvider.html">EventServiceProvider</a></div></li><li data-name="class:App_Providers_FortifyServiceProvider" ><div style="padding-left:44px" class="hd leaf"><a href="App/Providers/FortifyServiceProvider.html">FortifyServiceProvider</a></div></li><li data-name="class:App_Providers_JetstreamServiceProvider" ><div style="padding-left:44px" class="hd leaf"><a href="App/Providers/JetstreamServiceProvider.html">JetstreamServiceProvider</a></div></li><li data-name="class:App_Providers_RouteServiceProvider" ><div style="padding-left:44px" class="hd leaf"><a href="App/Providers/RouteServiceProvider.html">RouteServiceProvider</a></div></li></ul></div></li></ul></div></li><li data-name="namespace:Database" class="opened"><div style="padding-left:0px" class="hd"><span class="icon icon-play"></span><a href="Database.html">Database</a></div><div class="bd"><ul><li data-name="namespace:Database_Factories" class="opened"><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="Database/Factories.html">Factories</a></div><div class="bd"><ul><li data-name="class:Database_Factories_UserFactory" ><div style="padding-left:44px" class="hd leaf"><a href="Database/Factories/UserFactory.html">UserFactory</a></div></li><li data-name="class:Database_Factories_WalletFactory" ><div style="padding-left:44px" class="hd leaf"><a href="Database/Factories/WalletFactory.html">WalletFactory</a></div></li></ul></div></li><li data-name="namespace:Database_Seeders" class="opened"><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="Database/Seeders.html">Seeders</a></div><div class="bd"><ul><li data-name="class:Database_Seeders_DatabaseSeeder" ><div style="padding-left:44px" class="hd leaf"><a href="Database/Seeders/DatabaseSeeder.html">DatabaseSeeder</a></div></li></ul></div></li></ul></div></li><li data-name="namespace:Tests" class="opened"><div style="padding-left:0px" class="hd"><span class="icon icon-play"></span><a href="Tests.html">Tests</a></div><div class="bd"><ul><li data-name="namespace:Tests_Feature" class="opened"><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="Tests/Feature.html">Feature</a></div><div class="bd"><ul><li data-name="class:Tests_Feature_ApiAuthenticationTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/ApiAuthenticationTest.html">ApiAuthenticationTest</a></div></li><li data-name="class:Tests_Feature_ApiRegistrationTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/ApiRegistrationTest.html">ApiRegistrationTest</a></div></li><li data-name="class:Tests_Feature_ApiTokenPermissionsTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/ApiTokenPermissionsTest.html">ApiTokenPermissionsTest</a></div></li><li data-name="class:Tests_Feature_AuthenticationTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/AuthenticationTest.html">AuthenticationTest</a></div></li><li data-name="class:Tests_Feature_BrowserSessionsTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/BrowserSessionsTest.html">BrowserSessionsTest</a></div></li><li data-name="class:Tests_Feature_CreateApiTokenTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/CreateApiTokenTest.html">CreateApiTokenTest</a></div></li><li data-name="class:Tests_Feature_DeleteAccountTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/DeleteAccountTest.html">DeleteAccountTest</a></div></li><li data-name="class:Tests_Feature_DeleteApiTokenTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/DeleteApiTokenTest.html">DeleteApiTokenTest</a></div></li><li data-name="class:Tests_Feature_EmailVerificationTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/EmailVerificationTest.html">EmailVerificationTest</a></div></li><li data-name="class:Tests_Feature_PasswordConfirmationTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/PasswordConfirmationTest.html">PasswordConfirmationTest</a></div></li><li data-name="class:Tests_Feature_PasswordResetTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/PasswordResetTest.html">PasswordResetTest</a></div></li><li data-name="class:Tests_Feature_ProfileInformationTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/ProfileInformationTest.html">ProfileInformationTest</a></div></li><li data-name="class:Tests_Feature_RegistrationTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/RegistrationTest.html">RegistrationTest</a></div></li><li data-name="class:Tests_Feature_TwoFactorAuthenticationSettingsTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/TwoFactorAuthenticationSettingsTest.html">TwoFactorAuthenticationSettingsTest</a></div></li><li data-name="class:Tests_Feature_UpdatePasswordTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/UpdatePasswordTest.html">UpdatePasswordTest</a></div></li><li data-name="class:Tests_Feature_UserDeleteTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/UserDeleteTest.html">UserDeleteTest</a></div></li><li data-name="class:Tests_Feature_UserIndexTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/UserIndexTest.html">UserIndexTest</a></div></li><li data-name="class:Tests_Feature_UserShowTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/UserShowTest.html">UserShowTest</a></div></li><li data-name="class:Tests_Feature_UserUpdateTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/UserUpdateTest.html">UserUpdateTest</a></div></li><li data-name="class:Tests_Feature_WalletCreateTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/WalletCreateTest.html">WalletCreateTest</a></div></li><li data-name="class:Tests_Feature_WalletDeleteTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/WalletDeleteTest.html">WalletDeleteTest</a></div></li><li data-name="class:Tests_Feature_WalletIndexTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/WalletIndexTest.html">WalletIndexTest</a></div></li><li data-name="class:Tests_Feature_WalletShowTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/WalletShowTest.html">WalletShowTest</a></div></li><li data-name="class:Tests_Feature_WalletUpdateTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Feature/WalletUpdateTest.html">WalletUpdateTest</a></div></li></ul></div></li><li data-name="namespace:Tests_Unit" class="opened"><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="Tests/Unit.html">Unit</a></div><div class="bd"><ul><li data-name="class:Tests_Unit_ExampleTest" ><div style="padding-left:44px" class="hd leaf"><a href="Tests/Unit/ExampleTest.html">ExampleTest</a></div></li></ul></div></li><li data-name="class:Tests_CreatesApplication" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="Tests/CreatesApplication.html">CreatesApplication</a></div></li><li data-name="class:Tests_TestCase" class="opened"><div style="padding-left:26px" class="hd leaf"><a href="Tests/TestCase.html">TestCase</a></div></li></ul></div></li></ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                        {"type":"Namespace","link":"[Global_Namespace].html","name":"","doc":"Namespace "},{"type":"Namespace","link":"App.html","name":"App","doc":"Namespace App"},{"type":"Namespace","link":"App/Actions.html","name":"App\\Actions","doc":"Namespace App\\Actions"},{"type":"Namespace","link":"App/Actions/Fortify.html","name":"App\\Actions\\Fortify","doc":"Namespace App\\Actions\\Fortify"},{"type":"Namespace","link":"App/Actions/Jetstream.html","name":"App\\Actions\\Jetstream","doc":"Namespace App\\Actions\\Jetstream"},{"type":"Namespace","link":"App/Casts.html","name":"App\\Casts","doc":"Namespace App\\Casts"},{"type":"Namespace","link":"App/Console.html","name":"App\\Console","doc":"Namespace App\\Console"},{"type":"Namespace","link":"App/Exceptions.html","name":"App\\Exceptions","doc":"Namespace App\\Exceptions"},{"type":"Namespace","link":"App/Http.html","name":"App\\Http","doc":"Namespace App\\Http"},{"type":"Namespace","link":"App/Http/Controllers.html","name":"App\\Http\\Controllers","doc":"Namespace App\\Http\\Controllers"},{"type":"Namespace","link":"App/Http/Controllers/Api.html","name":"App\\Http\\Controllers\\Api","doc":"Namespace App\\Http\\Controllers\\Api"},{"type":"Namespace","link":"App/Http/Middleware.html","name":"App\\Http\\Middleware","doc":"Namespace App\\Http\\Middleware"},{"type":"Namespace","link":"App/Http/Requests.html","name":"App\\Http\\Requests","doc":"Namespace App\\Http\\Requests"},{"type":"Namespace","link":"App/Http/Resources.html","name":"App\\Http\\Resources","doc":"Namespace App\\Http\\Resources"},{"type":"Namespace","link":"App/Models.html","name":"App\\Models","doc":"Namespace App\\Models"},{"type":"Namespace","link":"App/Observers.html","name":"App\\Observers","doc":"Namespace App\\Observers"},{"type":"Namespace","link":"App/Policies.html","name":"App\\Policies","doc":"Namespace App\\Policies"},{"type":"Namespace","link":"App/Providers.html","name":"App\\Providers","doc":"Namespace App\\Providers"},{"type":"Namespace","link":"Database.html","name":"Database","doc":"Namespace Database"},{"type":"Namespace","link":"Database/Factories.html","name":"Database\\Factories","doc":"Namespace Database\\Factories"},{"type":"Namespace","link":"Database/Seeders.html","name":"Database\\Seeders","doc":"Namespace Database\\Seeders"},{"type":"Namespace","link":"Tests.html","name":"Tests","doc":"Namespace Tests"},{"type":"Namespace","link":"Tests/Feature.html","name":"Tests\\Feature","doc":"Namespace Tests\\Feature"},{"type":"Namespace","link":"Tests/Unit.html","name":"Tests\\Unit","doc":"Namespace Tests\\Unit"},                            {"type":"Class","link":"AddTwoFactorColumnsToUsersTable.html","name":"AddTwoFactorColumnsToUsersTable","doc":null},
                                {"type":"Method","fromName":"AddTwoFactorColumnsToUsersTable","fromLink":"AddTwoFactorColumnsToUsersTable.html","link":"AddTwoFactorColumnsToUsersTable.html#method_up","name":"AddTwoFactorColumnsToUsersTable::up","doc":"<p>Run the migrations.</p>"},
        {"type":"Method","fromName":"AddTwoFactorColumnsToUsersTable","fromLink":"AddTwoFactorColumnsToUsersTable.html","link":"AddTwoFactorColumnsToUsersTable.html#method_down","name":"AddTwoFactorColumnsToUsersTable::down","doc":"<p>Reverse the migrations.</p>"},
            
                                                {"type":"Class","fromName":"App\\Actions\\Fortify","fromLink":"App/Actions/Fortify.html","link":"App/Actions/Fortify/CreateNewUser.html","name":"App\\Actions\\Fortify\\CreateNewUser","doc":null},
                                {"type":"Method","fromName":"App\\Actions\\Fortify\\CreateNewUser","fromLink":"App/Actions/Fortify/CreateNewUser.html","link":"App/Actions/Fortify/CreateNewUser.html#method_create","name":"App\\Actions\\Fortify\\CreateNewUser::create","doc":"<p>Validate and create a newly registered user.</p>"},
            
                                                {"type":"Trait","fromName":"App\\Actions\\Fortify","fromLink":"App/Actions/Fortify.html","link":"App/Actions/Fortify/PasswordValidationRules.html","name":"App\\Actions\\Fortify\\PasswordValidationRules","doc":null},
                                {"type":"Method","fromName":"App\\Actions\\Fortify\\PasswordValidationRules","fromLink":"App/Actions/Fortify/PasswordValidationRules.html","link":"App/Actions/Fortify/PasswordValidationRules.html#method_passwordRules","name":"App\\Actions\\Fortify\\PasswordValidationRules::passwordRules","doc":"<p>Get the validation rules used to validate passwords.</p>"},
            
                                                {"type":"Class","fromName":"App\\Actions\\Fortify","fromLink":"App/Actions/Fortify.html","link":"App/Actions/Fortify/ResetUserPassword.html","name":"App\\Actions\\Fortify\\ResetUserPassword","doc":null},
                                {"type":"Method","fromName":"App\\Actions\\Fortify\\ResetUserPassword","fromLink":"App/Actions/Fortify/ResetUserPassword.html","link":"App/Actions/Fortify/ResetUserPassword.html#method_reset","name":"App\\Actions\\Fortify\\ResetUserPassword::reset","doc":"<p>Validate and reset the user's forgotten password.</p>"},
            
                                                {"type":"Class","fromName":"App\\Actions\\Fortify","fromLink":"App/Actions/Fortify.html","link":"App/Actions/Fortify/UpdateUserPassword.html","name":"App\\Actions\\Fortify\\UpdateUserPassword","doc":null},
                                {"type":"Method","fromName":"App\\Actions\\Fortify\\UpdateUserPassword","fromLink":"App/Actions/Fortify/UpdateUserPassword.html","link":"App/Actions/Fortify/UpdateUserPassword.html#method_update","name":"App\\Actions\\Fortify\\UpdateUserPassword::update","doc":"<p>Validate and update the user's password.</p>"},
            
                                                {"type":"Class","fromName":"App\\Actions\\Fortify","fromLink":"App/Actions/Fortify.html","link":"App/Actions/Fortify/UpdateUserProfileInformation.html","name":"App\\Actions\\Fortify\\UpdateUserProfileInformation","doc":null},
                                {"type":"Method","fromName":"App\\Actions\\Fortify\\UpdateUserProfileInformation","fromLink":"App/Actions/Fortify/UpdateUserProfileInformation.html","link":"App/Actions/Fortify/UpdateUserProfileInformation.html#method_update","name":"App\\Actions\\Fortify\\UpdateUserProfileInformation::update","doc":"<p>Validate and update the given user's profile information.</p>"},
        {"type":"Method","fromName":"App\\Actions\\Fortify\\UpdateUserProfileInformation","fromLink":"App/Actions/Fortify/UpdateUserProfileInformation.html","link":"App/Actions/Fortify/UpdateUserProfileInformation.html#method_updateVerifiedUser","name":"App\\Actions\\Fortify\\UpdateUserProfileInformation::updateVerifiedUser","doc":"<p>Update the given verified user's profile information.</p>"},
            
                                                {"type":"Class","fromName":"App\\Actions\\Jetstream","fromLink":"App/Actions/Jetstream.html","link":"App/Actions/Jetstream/DeleteUser.html","name":"App\\Actions\\Jetstream\\DeleteUser","doc":null},
                                {"type":"Method","fromName":"App\\Actions\\Jetstream\\DeleteUser","fromLink":"App/Actions/Jetstream/DeleteUser.html","link":"App/Actions/Jetstream/DeleteUser.html#method_delete","name":"App\\Actions\\Jetstream\\DeleteUser::delete","doc":"<p>Delete the given user.</p>"},
            
                                                {"type":"Class","fromName":"App\\Casts","fromLink":"App/Casts.html","link":"App/Casts/Cents.html","name":"App\\Casts\\Cents","doc":null},
                                {"type":"Method","fromName":"App\\Casts\\Cents","fromLink":"App/Casts/Cents.html","link":"App/Casts/Cents.html#method_get","name":"App\\Casts\\Cents::get","doc":"<p>Cast the given value.</p>"},
        {"type":"Method","fromName":"App\\Casts\\Cents","fromLink":"App/Casts/Cents.html","link":"App/Casts/Cents.html#method_set","name":"App\\Casts\\Cents::set","doc":"<p>Prepare the given value for storage.</p>"},
            
                                                {"type":"Class","fromName":"App\\Console","fromLink":"App/Console.html","link":"App/Console/Kernel.html","name":"App\\Console\\Kernel","doc":null},
                                {"type":"Method","fromName":"App\\Console\\Kernel","fromLink":"App/Console/Kernel.html","link":"App/Console/Kernel.html#method_schedule","name":"App\\Console\\Kernel::schedule","doc":"<p>Define the application's command schedule.</p>"},
        {"type":"Method","fromName":"App\\Console\\Kernel","fromLink":"App/Console/Kernel.html","link":"App/Console/Kernel.html#method_commands","name":"App\\Console\\Kernel::commands","doc":"<p>Register the commands for the application.</p>"},
            
                                                {"type":"Class","fromName":"App\\Exceptions","fromLink":"App/Exceptions.html","link":"App/Exceptions/Handler.html","name":"App\\Exceptions\\Handler","doc":null},
                                {"type":"Method","fromName":"App\\Exceptions\\Handler","fromLink":"App/Exceptions/Handler.html","link":"App/Exceptions/Handler.html#method_register","name":"App\\Exceptions\\Handler::register","doc":"<p>Register the exception handling callbacks for the application.</p>"},
            
                                                {"type":"Class","fromName":"App\\Http\\Controllers\\Api","fromLink":"App/Http/Controllers/Api.html","link":"App/Http/Controllers/Api/AuthController.html","name":"App\\Http\\Controllers\\Api\\AuthController","doc":null},
                                {"type":"Method","fromName":"App\\Http\\Controllers\\Api\\AuthController","fromLink":"App/Http/Controllers/Api/AuthController.html","link":"App/Http/Controllers/Api/AuthController.html#method_register","name":"App\\Http\\Controllers\\Api\\AuthController::register","doc":"<p>Sign up user</p>"},
        {"type":"Method","fromName":"App\\Http\\Controllers\\Api\\AuthController","fromLink":"App/Http/Controllers/Api/AuthController.html","link":"App/Http/Controllers/Api/AuthController.html#method_login","name":"App\\Http\\Controllers\\Api\\AuthController::login","doc":"<p>Sign in user</p>"},
        {"type":"Method","fromName":"App\\Http\\Controllers\\Api\\AuthController","fromLink":"App/Http/Controllers/Api/AuthController.html","link":"App/Http/Controllers/Api/AuthController.html#method_logout","name":"App\\Http\\Controllers\\Api\\AuthController::logout","doc":"<p>Sign off user</p>"},
            
                                                {"type":"Class","fromName":"App\\Http\\Controllers\\Api","fromLink":"App/Http/Controllers/Api.html","link":"App/Http/Controllers/Api/UserController.html","name":"App\\Http\\Controllers\\Api\\UserController","doc":null},
                                {"type":"Method","fromName":"App\\Http\\Controllers\\Api\\UserController","fromLink":"App/Http/Controllers/Api/UserController.html","link":"App/Http/Controllers/Api/UserController.html#method___construct","name":"App\\Http\\Controllers\\Api\\UserController::__construct","doc":"<p>Create the controller instance.</p>"},
        {"type":"Method","fromName":"App\\Http\\Controllers\\Api\\UserController","fromLink":"App/Http/Controllers/Api/UserController.html","link":"App/Http/Controllers/Api/UserController.html#method_index","name":"App\\Http\\Controllers\\Api\\UserController::index","doc":"<p>Display a listing of the resource.</p>"},
        {"type":"Method","fromName":"App\\Http\\Controllers\\Api\\UserController","fromLink":"App/Http/Controllers/Api/UserController.html","link":"App/Http/Controllers/Api/UserController.html#method_show","name":"App\\Http\\Controllers\\Api\\UserController::show","doc":"<p>Display the specified resource.</p>"},
        {"type":"Method","fromName":"App\\Http\\Controllers\\Api\\UserController","fromLink":"App/Http/Controllers/Api/UserController.html","link":"App/Http/Controllers/Api/UserController.html#method_update","name":"App\\Http\\Controllers\\Api\\UserController::update","doc":"<p>Update the specified resource in storage.</p>"},
        {"type":"Method","fromName":"App\\Http\\Controllers\\Api\\UserController","fromLink":"App/Http/Controllers/Api/UserController.html","link":"App/Http/Controllers/Api/UserController.html#method_destroy","name":"App\\Http\\Controllers\\Api\\UserController::destroy","doc":"<p>Remove the specified resource from storage.</p>"},
            
                                                {"type":"Class","fromName":"App\\Http\\Controllers\\Api","fromLink":"App/Http/Controllers/Api.html","link":"App/Http/Controllers/Api/WalletController.html","name":"App\\Http\\Controllers\\Api\\WalletController","doc":null},
                                {"type":"Method","fromName":"App\\Http\\Controllers\\Api\\WalletController","fromLink":"App/Http/Controllers/Api/WalletController.html","link":"App/Http/Controllers/Api/WalletController.html#method___construct","name":"App\\Http\\Controllers\\Api\\WalletController::__construct","doc":"<p>Create the controller instance.</p>"},
        {"type":"Method","fromName":"App\\Http\\Controllers\\Api\\WalletController","fromLink":"App/Http/Controllers/Api/WalletController.html","link":"App/Http/Controllers/Api/WalletController.html#method_index","name":"App\\Http\\Controllers\\Api\\WalletController::index","doc":"<p>Display a listing of the resource.</p>"},
        {"type":"Method","fromName":"App\\Http\\Controllers\\Api\\WalletController","fromLink":"App/Http/Controllers/Api/WalletController.html","link":"App/Http/Controllers/Api/WalletController.html#method_store","name":"App\\Http\\Controllers\\Api\\WalletController::store","doc":"<p>Store a newly created resource in storage.</p>"},
        {"type":"Method","fromName":"App\\Http\\Controllers\\Api\\WalletController","fromLink":"App/Http/Controllers/Api/WalletController.html","link":"App/Http/Controllers/Api/WalletController.html#method_show","name":"App\\Http\\Controllers\\Api\\WalletController::show","doc":"<p>Display the specified resource.</p>"},
        {"type":"Method","fromName":"App\\Http\\Controllers\\Api\\WalletController","fromLink":"App/Http/Controllers/Api/WalletController.html","link":"App/Http/Controllers/Api/WalletController.html#method_update","name":"App\\Http\\Controllers\\Api\\WalletController::update","doc":"<p>Update the specified resource in storage.</p>"},
        {"type":"Method","fromName":"App\\Http\\Controllers\\Api\\WalletController","fromLink":"App/Http/Controllers/Api/WalletController.html","link":"App/Http/Controllers/Api/WalletController.html#method_destroy","name":"App\\Http\\Controllers\\Api\\WalletController::destroy","doc":"<p>Remove the specified resource from storage.</p>"},
            
                                                {"type":"Class","fromName":"App\\Http\\Controllers","fromLink":"App/Http/Controllers.html","link":"App/Http/Controllers/Controller.html","name":"App\\Http\\Controllers\\Controller","doc":null},
                
                                                {"type":"Class","fromName":"App\\Http","fromLink":"App/Http.html","link":"App/Http/Kernel.html","name":"App\\Http\\Kernel","doc":null},
                
                                                {"type":"Class","fromName":"App\\Http\\Middleware","fromLink":"App/Http/Middleware.html","link":"App/Http/Middleware/Authenticate.html","name":"App\\Http\\Middleware\\Authenticate","doc":null},
                                {"type":"Method","fromName":"App\\Http\\Middleware\\Authenticate","fromLink":"App/Http/Middleware/Authenticate.html","link":"App/Http/Middleware/Authenticate.html#method_redirectTo","name":"App\\Http\\Middleware\\Authenticate::redirectTo","doc":"<p>Get the path the user should be redirected to when they are not authenticated.</p>"},
            
                                                {"type":"Class","fromName":"App\\Http\\Middleware","fromLink":"App/Http/Middleware.html","link":"App/Http/Middleware/EncryptCookies.html","name":"App\\Http\\Middleware\\EncryptCookies","doc":null},
                
                                                {"type":"Class","fromName":"App\\Http\\Middleware","fromLink":"App/Http/Middleware.html","link":"App/Http/Middleware/HandleInertiaRequests.html","name":"App\\Http\\Middleware\\HandleInertiaRequests","doc":null},
                                {"type":"Method","fromName":"App\\Http\\Middleware\\HandleInertiaRequests","fromLink":"App/Http/Middleware/HandleInertiaRequests.html","link":"App/Http/Middleware/HandleInertiaRequests.html#method_version","name":"App\\Http\\Middleware\\HandleInertiaRequests::version","doc":"<p>Determines the current asset version.</p>"},
        {"type":"Method","fromName":"App\\Http\\Middleware\\HandleInertiaRequests","fromLink":"App/Http/Middleware/HandleInertiaRequests.html","link":"App/Http/Middleware/HandleInertiaRequests.html#method_share","name":"App\\Http\\Middleware\\HandleInertiaRequests::share","doc":"<p>Defines the props that are shared by default.</p>"},
            
                                                {"type":"Class","fromName":"App\\Http\\Middleware","fromLink":"App/Http/Middleware.html","link":"App/Http/Middleware/PreventRequestsDuringMaintenance.html","name":"App\\Http\\Middleware\\PreventRequestsDuringMaintenance","doc":null},
                
                                                {"type":"Class","fromName":"App\\Http\\Middleware","fromLink":"App/Http/Middleware.html","link":"App/Http/Middleware/RedirectIfAuthenticated.html","name":"App\\Http\\Middleware\\RedirectIfAuthenticated","doc":null},
                                {"type":"Method","fromName":"App\\Http\\Middleware\\RedirectIfAuthenticated","fromLink":"App/Http/Middleware/RedirectIfAuthenticated.html","link":"App/Http/Middleware/RedirectIfAuthenticated.html#method_handle","name":"App\\Http\\Middleware\\RedirectIfAuthenticated::handle","doc":"<p>Handle an incoming request.</p>"},
            
                                                {"type":"Class","fromName":"App\\Http\\Middleware","fromLink":"App/Http/Middleware.html","link":"App/Http/Middleware/TrimStrings.html","name":"App\\Http\\Middleware\\TrimStrings","doc":null},
                
                                                {"type":"Class","fromName":"App\\Http\\Middleware","fromLink":"App/Http/Middleware.html","link":"App/Http/Middleware/TrustHosts.html","name":"App\\Http\\Middleware\\TrustHosts","doc":null},
                                {"type":"Method","fromName":"App\\Http\\Middleware\\TrustHosts","fromLink":"App/Http/Middleware/TrustHosts.html","link":"App/Http/Middleware/TrustHosts.html#method_hosts","name":"App\\Http\\Middleware\\TrustHosts::hosts","doc":"<p>Get the host patterns that should be trusted.</p>"},
            
                                                {"type":"Class","fromName":"App\\Http\\Middleware","fromLink":"App/Http/Middleware.html","link":"App/Http/Middleware/TrustProxies.html","name":"App\\Http\\Middleware\\TrustProxies","doc":null},
                
                                                {"type":"Class","fromName":"App\\Http\\Middleware","fromLink":"App/Http/Middleware.html","link":"App/Http/Middleware/VerifyCsrfToken.html","name":"App\\Http\\Middleware\\VerifyCsrfToken","doc":null},
                
                                                {"type":"Class","fromName":"App\\Http\\Requests","fromLink":"App/Http/Requests.html","link":"App/Http/Requests/UserStoreRequest.html","name":"App\\Http\\Requests\\UserStoreRequest","doc":null},
                                {"type":"Method","fromName":"App\\Http\\Requests\\UserStoreRequest","fromLink":"App/Http/Requests/UserStoreRequest.html","link":"App/Http/Requests/UserStoreRequest.html#method_authorize","name":"App\\Http\\Requests\\UserStoreRequest::authorize","doc":"<p>Determine if the user is authorized to make this request.</p>"},
        {"type":"Method","fromName":"App\\Http\\Requests\\UserStoreRequest","fromLink":"App/Http/Requests/UserStoreRequest.html","link":"App/Http/Requests/UserStoreRequest.html#method_rules","name":"App\\Http\\Requests\\UserStoreRequest::rules","doc":"<p>Get the validation rules that apply to the request.</p>"},
            
                                                {"type":"Class","fromName":"App\\Http\\Requests","fromLink":"App/Http/Requests.html","link":"App/Http/Requests/UserUpdateRequest.html","name":"App\\Http\\Requests\\UserUpdateRequest","doc":null},
                                {"type":"Method","fromName":"App\\Http\\Requests\\UserUpdateRequest","fromLink":"App/Http/Requests/UserUpdateRequest.html","link":"App/Http/Requests/UserUpdateRequest.html#method_authorize","name":"App\\Http\\Requests\\UserUpdateRequest::authorize","doc":"<p>Determine if the user is authorized to make this request.</p>"},
        {"type":"Method","fromName":"App\\Http\\Requests\\UserUpdateRequest","fromLink":"App/Http/Requests/UserUpdateRequest.html","link":"App/Http/Requests/UserUpdateRequest.html#method_rules","name":"App\\Http\\Requests\\UserUpdateRequest::rules","doc":"<p>Get the validation rules that apply to the request.</p>"},
            
                                                {"type":"Class","fromName":"App\\Http\\Requests","fromLink":"App/Http/Requests.html","link":"App/Http/Requests/WalletStoreRequest.html","name":"App\\Http\\Requests\\WalletStoreRequest","doc":null},
                                {"type":"Method","fromName":"App\\Http\\Requests\\WalletStoreRequest","fromLink":"App/Http/Requests/WalletStoreRequest.html","link":"App/Http/Requests/WalletStoreRequest.html#method_authorize","name":"App\\Http\\Requests\\WalletStoreRequest::authorize","doc":"<p>Determine if the user is authorized to make this request.</p>"},
        {"type":"Method","fromName":"App\\Http\\Requests\\WalletStoreRequest","fromLink":"App/Http/Requests/WalletStoreRequest.html","link":"App/Http/Requests/WalletStoreRequest.html#method_rules","name":"App\\Http\\Requests\\WalletStoreRequest::rules","doc":"<p>Get the validation rules that apply to the request.</p>"},
            
                                                {"type":"Class","fromName":"App\\Http\\Requests","fromLink":"App/Http/Requests.html","link":"App/Http/Requests/WalletUpdateRequest.html","name":"App\\Http\\Requests\\WalletUpdateRequest","doc":null},
                                {"type":"Method","fromName":"App\\Http\\Requests\\WalletUpdateRequest","fromLink":"App/Http/Requests/WalletUpdateRequest.html","link":"App/Http/Requests/WalletUpdateRequest.html#method_authorize","name":"App\\Http\\Requests\\WalletUpdateRequest::authorize","doc":"<p>Determine if the user is authorized to make this request.</p>"},
        {"type":"Method","fromName":"App\\Http\\Requests\\WalletUpdateRequest","fromLink":"App/Http/Requests/WalletUpdateRequest.html","link":"App/Http/Requests/WalletUpdateRequest.html#method_rules","name":"App\\Http\\Requests\\WalletUpdateRequest::rules","doc":"<p>Get the validation rules that apply to the request.</p>"},
            
                                                {"type":"Class","fromName":"App\\Http\\Resources","fromLink":"App/Http/Resources.html","link":"App/Http/Resources/UserResource.html","name":"App\\Http\\Resources\\UserResource","doc":null},
                                {"type":"Method","fromName":"App\\Http\\Resources\\UserResource","fromLink":"App/Http/Resources/UserResource.html","link":"App/Http/Resources/UserResource.html#method_toArray","name":"App\\Http\\Resources\\UserResource::toArray","doc":"<p>Transform the resource into an array.</p>"},
            
                                                {"type":"Class","fromName":"App\\Http\\Resources","fromLink":"App/Http/Resources.html","link":"App/Http/Resources/WalletResource.html","name":"App\\Http\\Resources\\WalletResource","doc":null},
                                {"type":"Method","fromName":"App\\Http\\Resources\\WalletResource","fromLink":"App/Http/Resources/WalletResource.html","link":"App/Http/Resources/WalletResource.html#method_toArray","name":"App\\Http\\Resources\\WalletResource::toArray","doc":"<p>Transform the resource into an array.</p>"},
            
                                                {"type":"Class","fromName":"App\\Models","fromLink":"App/Models.html","link":"App/Models/User.html","name":"App\\Models\\User","doc":null},
                                {"type":"Method","fromName":"App\\Models\\User","fromLink":"App/Models/User.html","link":"App/Models/User.html#method_wallets","name":"App\\Models\\User::wallets","doc":"<p>The walletes own by the user</p>"},
            
                                                {"type":"Class","fromName":"App\\Models","fromLink":"App/Models.html","link":"App/Models/Wallet.html","name":"App\\Models\\Wallet","doc":null},
                                {"type":"Method","fromName":"App\\Models\\Wallet","fromLink":"App/Models/Wallet.html","link":"App/Models/Wallet.html#method_user","name":"App\\Models\\Wallet::user","doc":"<p>The user than own the walled</p>"},
            
                                                {"type":"Class","fromName":"App\\Observers","fromLink":"App/Observers.html","link":"App/Observers/UserObserver.html","name":"App\\Observers\\UserObserver","doc":null},
                                {"type":"Method","fromName":"App\\Observers\\UserObserver","fromLink":"App/Observers/UserObserver.html","link":"App/Observers/UserObserver.html#method_created","name":"App\\Observers\\UserObserver::created","doc":"<p>Handle the User &quot;created&quot; event.</p>"},
        {"type":"Method","fromName":"App\\Observers\\UserObserver","fromLink":"App/Observers/UserObserver.html","link":"App/Observers/UserObserver.html#method_updated","name":"App\\Observers\\UserObserver::updated","doc":"<p>Handle the User &quot;updated&quot; event.</p>"},
        {"type":"Method","fromName":"App\\Observers\\UserObserver","fromLink":"App/Observers/UserObserver.html","link":"App/Observers/UserObserver.html#method_deleted","name":"App\\Observers\\UserObserver::deleted","doc":"<p>Handle the User &quot;deleted&quot; event.</p>"},
        {"type":"Method","fromName":"App\\Observers\\UserObserver","fromLink":"App/Observers/UserObserver.html","link":"App/Observers/UserObserver.html#method_restored","name":"App\\Observers\\UserObserver::restored","doc":"<p>Handle the User &quot;restored&quot; event.</p>"},
        {"type":"Method","fromName":"App\\Observers\\UserObserver","fromLink":"App/Observers/UserObserver.html","link":"App/Observers/UserObserver.html#method_forceDeleted","name":"App\\Observers\\UserObserver::forceDeleted","doc":"<p>Handle the User &quot;force deleted&quot; event.</p>"},
            
                                                {"type":"Class","fromName":"App\\Policies","fromLink":"App/Policies.html","link":"App/Policies/UserPolicy.html","name":"App\\Policies\\UserPolicy","doc":null},
                                {"type":"Method","fromName":"App\\Policies\\UserPolicy","fromLink":"App/Policies/UserPolicy.html","link":"App/Policies/UserPolicy.html#method_before","name":"App\\Policies\\UserPolicy::before","doc":"<p>Perform pre-authorization checks.</p>"},
        {"type":"Method","fromName":"App\\Policies\\UserPolicy","fromLink":"App/Policies/UserPolicy.html","link":"App/Policies/UserPolicy.html#method_viewAny","name":"App\\Policies\\UserPolicy::viewAny","doc":"<p>Determine whether the user can view any models.</p>"},
        {"type":"Method","fromName":"App\\Policies\\UserPolicy","fromLink":"App/Policies/UserPolicy.html","link":"App/Policies/UserPolicy.html#method_view","name":"App\\Policies\\UserPolicy::view","doc":"<p>Determine whether the user can view the model.</p>"},
        {"type":"Method","fromName":"App\\Policies\\UserPolicy","fromLink":"App/Policies/UserPolicy.html","link":"App/Policies/UserPolicy.html#method_create","name":"App\\Policies\\UserPolicy::create","doc":"<p>Determine whether the user can create models.</p>"},
        {"type":"Method","fromName":"App\\Policies\\UserPolicy","fromLink":"App/Policies/UserPolicy.html","link":"App/Policies/UserPolicy.html#method_update","name":"App\\Policies\\UserPolicy::update","doc":"<p>Determine whether the user can update the model.</p>"},
        {"type":"Method","fromName":"App\\Policies\\UserPolicy","fromLink":"App/Policies/UserPolicy.html","link":"App/Policies/UserPolicy.html#method_delete","name":"App\\Policies\\UserPolicy::delete","doc":"<p>Determine whether the user can delete the model.</p>"},
        {"type":"Method","fromName":"App\\Policies\\UserPolicy","fromLink":"App/Policies/UserPolicy.html","link":"App/Policies/UserPolicy.html#method_restore","name":"App\\Policies\\UserPolicy::restore","doc":"<p>Determine whether the user can restore the model.</p>"},
        {"type":"Method","fromName":"App\\Policies\\UserPolicy","fromLink":"App/Policies/UserPolicy.html","link":"App/Policies/UserPolicy.html#method_forceDelete","name":"App\\Policies\\UserPolicy::forceDelete","doc":"<p>Determine whether the user can permanently delete the model.</p>"},
            
                                                {"type":"Class","fromName":"App\\Policies","fromLink":"App/Policies.html","link":"App/Policies/WalletPolicy.html","name":"App\\Policies\\WalletPolicy","doc":null},
                                {"type":"Method","fromName":"App\\Policies\\WalletPolicy","fromLink":"App/Policies/WalletPolicy.html","link":"App/Policies/WalletPolicy.html#method_before","name":"App\\Policies\\WalletPolicy::before","doc":"<p>Perform pre-authorization checks.</p>"},
        {"type":"Method","fromName":"App\\Policies\\WalletPolicy","fromLink":"App/Policies/WalletPolicy.html","link":"App/Policies/WalletPolicy.html#method_viewAny","name":"App\\Policies\\WalletPolicy::viewAny","doc":"<p>Determine whether the user can view any models.</p>"},
        {"type":"Method","fromName":"App\\Policies\\WalletPolicy","fromLink":"App/Policies/WalletPolicy.html","link":"App/Policies/WalletPolicy.html#method_view","name":"App\\Policies\\WalletPolicy::view","doc":"<p>Determine whether the user can view the model.</p>"},
        {"type":"Method","fromName":"App\\Policies\\WalletPolicy","fromLink":"App/Policies/WalletPolicy.html","link":"App/Policies/WalletPolicy.html#method_create","name":"App\\Policies\\WalletPolicy::create","doc":"<p>Determine whether the user can create models.</p>"},
        {"type":"Method","fromName":"App\\Policies\\WalletPolicy","fromLink":"App/Policies/WalletPolicy.html","link":"App/Policies/WalletPolicy.html#method_update","name":"App\\Policies\\WalletPolicy::update","doc":"<p>Determine whether the user can update the model.</p>"},
        {"type":"Method","fromName":"App\\Policies\\WalletPolicy","fromLink":"App/Policies/WalletPolicy.html","link":"App/Policies/WalletPolicy.html#method_delete","name":"App\\Policies\\WalletPolicy::delete","doc":"<p>Determine whether the user can delete the model.</p>"},
        {"type":"Method","fromName":"App\\Policies\\WalletPolicy","fromLink":"App/Policies/WalletPolicy.html","link":"App/Policies/WalletPolicy.html#method_restore","name":"App\\Policies\\WalletPolicy::restore","doc":"<p>Determine whether the user can restore the model.</p>"},
        {"type":"Method","fromName":"App\\Policies\\WalletPolicy","fromLink":"App/Policies/WalletPolicy.html","link":"App/Policies/WalletPolicy.html#method_forceDelete","name":"App\\Policies\\WalletPolicy::forceDelete","doc":"<p>Determine whether the user can permanently delete the model.</p>"},
            
                                                {"type":"Class","fromName":"App\\Providers","fromLink":"App/Providers.html","link":"App/Providers/AppServiceProvider.html","name":"App\\Providers\\AppServiceProvider","doc":null},
                                {"type":"Method","fromName":"App\\Providers\\AppServiceProvider","fromLink":"App/Providers/AppServiceProvider.html","link":"App/Providers/AppServiceProvider.html#method_register","name":"App\\Providers\\AppServiceProvider::register","doc":"<p>Register any application services.</p>"},
        {"type":"Method","fromName":"App\\Providers\\AppServiceProvider","fromLink":"App/Providers/AppServiceProvider.html","link":"App/Providers/AppServiceProvider.html#method_boot","name":"App\\Providers\\AppServiceProvider::boot","doc":"<p>Bootstrap any application services.</p>"},
            
                                                {"type":"Class","fromName":"App\\Providers","fromLink":"App/Providers.html","link":"App/Providers/AuthServiceProvider.html","name":"App\\Providers\\AuthServiceProvider","doc":null},
                                {"type":"Method","fromName":"App\\Providers\\AuthServiceProvider","fromLink":"App/Providers/AuthServiceProvider.html","link":"App/Providers/AuthServiceProvider.html#method_boot","name":"App\\Providers\\AuthServiceProvider::boot","doc":"<p>Register any authentication / authorization services.</p>"},
            
                                                {"type":"Class","fromName":"App\\Providers","fromLink":"App/Providers.html","link":"App/Providers/BroadcastServiceProvider.html","name":"App\\Providers\\BroadcastServiceProvider","doc":null},
                                {"type":"Method","fromName":"App\\Providers\\BroadcastServiceProvider","fromLink":"App/Providers/BroadcastServiceProvider.html","link":"App/Providers/BroadcastServiceProvider.html#method_boot","name":"App\\Providers\\BroadcastServiceProvider::boot","doc":"<p>Bootstrap any application services.</p>"},
            
                                                {"type":"Class","fromName":"App\\Providers","fromLink":"App/Providers.html","link":"App/Providers/EventServiceProvider.html","name":"App\\Providers\\EventServiceProvider","doc":null},
                                {"type":"Method","fromName":"App\\Providers\\EventServiceProvider","fromLink":"App/Providers/EventServiceProvider.html","link":"App/Providers/EventServiceProvider.html#method_boot","name":"App\\Providers\\EventServiceProvider::boot","doc":"<p>Register any events for your application.</p>"},
            
                                                {"type":"Class","fromName":"App\\Providers","fromLink":"App/Providers.html","link":"App/Providers/FortifyServiceProvider.html","name":"App\\Providers\\FortifyServiceProvider","doc":null},
                                {"type":"Method","fromName":"App\\Providers\\FortifyServiceProvider","fromLink":"App/Providers/FortifyServiceProvider.html","link":"App/Providers/FortifyServiceProvider.html#method_register","name":"App\\Providers\\FortifyServiceProvider::register","doc":"<p>Register any application services.</p>"},
        {"type":"Method","fromName":"App\\Providers\\FortifyServiceProvider","fromLink":"App/Providers/FortifyServiceProvider.html","link":"App/Providers/FortifyServiceProvider.html#method_boot","name":"App\\Providers\\FortifyServiceProvider::boot","doc":"<p>Bootstrap any application services.</p>"},
            
                                                {"type":"Class","fromName":"App\\Providers","fromLink":"App/Providers.html","link":"App/Providers/JetstreamServiceProvider.html","name":"App\\Providers\\JetstreamServiceProvider","doc":null},
                                {"type":"Method","fromName":"App\\Providers\\JetstreamServiceProvider","fromLink":"App/Providers/JetstreamServiceProvider.html","link":"App/Providers/JetstreamServiceProvider.html#method_register","name":"App\\Providers\\JetstreamServiceProvider::register","doc":"<p>Register any application services.</p>"},
        {"type":"Method","fromName":"App\\Providers\\JetstreamServiceProvider","fromLink":"App/Providers/JetstreamServiceProvider.html","link":"App/Providers/JetstreamServiceProvider.html#method_boot","name":"App\\Providers\\JetstreamServiceProvider::boot","doc":"<p>Bootstrap any application services.</p>"},
        {"type":"Method","fromName":"App\\Providers\\JetstreamServiceProvider","fromLink":"App/Providers/JetstreamServiceProvider.html","link":"App/Providers/JetstreamServiceProvider.html#method_configurePermissions","name":"App\\Providers\\JetstreamServiceProvider::configurePermissions","doc":"<p>Configure the permissions that are available within the application.</p>"},
            
                                                {"type":"Class","fromName":"App\\Providers","fromLink":"App/Providers.html","link":"App/Providers/RouteServiceProvider.html","name":"App\\Providers\\RouteServiceProvider","doc":null},
                                {"type":"Method","fromName":"App\\Providers\\RouteServiceProvider","fromLink":"App/Providers/RouteServiceProvider.html","link":"App/Providers/RouteServiceProvider.html#method_boot","name":"App\\Providers\\RouteServiceProvider::boot","doc":"<p>Define your route model bindings, pattern filters, etc.</p>"},
        {"type":"Method","fromName":"App\\Providers\\RouteServiceProvider","fromLink":"App/Providers/RouteServiceProvider.html","link":"App/Providers/RouteServiceProvider.html#method_configureRateLimiting","name":"App\\Providers\\RouteServiceProvider::configureRateLimiting","doc":"<p>Configure the rate limiters for the application.</p>"},
            
                    {"type":"Class","link":"CreateFailedJobsTable.html","name":"CreateFailedJobsTable","doc":null},
                                {"type":"Method","fromName":"CreateFailedJobsTable","fromLink":"CreateFailedJobsTable.html","link":"CreateFailedJobsTable.html#method_up","name":"CreateFailedJobsTable::up","doc":"<p>Run the migrations.</p>"},
        {"type":"Method","fromName":"CreateFailedJobsTable","fromLink":"CreateFailedJobsTable.html","link":"CreateFailedJobsTable.html#method_down","name":"CreateFailedJobsTable::down","doc":"<p>Reverse the migrations.</p>"},
            
                    {"type":"Class","link":"CreatePasswordResetsTable.html","name":"CreatePasswordResetsTable","doc":null},
                                {"type":"Method","fromName":"CreatePasswordResetsTable","fromLink":"CreatePasswordResetsTable.html","link":"CreatePasswordResetsTable.html#method_up","name":"CreatePasswordResetsTable::up","doc":"<p>Run the migrations.</p>"},
        {"type":"Method","fromName":"CreatePasswordResetsTable","fromLink":"CreatePasswordResetsTable.html","link":"CreatePasswordResetsTable.html#method_down","name":"CreatePasswordResetsTable::down","doc":"<p>Reverse the migrations.</p>"},
            
                    {"type":"Class","link":"CreatePersonalAccessTokensTable.html","name":"CreatePersonalAccessTokensTable","doc":null},
                                {"type":"Method","fromName":"CreatePersonalAccessTokensTable","fromLink":"CreatePersonalAccessTokensTable.html","link":"CreatePersonalAccessTokensTable.html#method_up","name":"CreatePersonalAccessTokensTable::up","doc":"<p>Run the migrations.</p>"},
        {"type":"Method","fromName":"CreatePersonalAccessTokensTable","fromLink":"CreatePersonalAccessTokensTable.html","link":"CreatePersonalAccessTokensTable.html#method_down","name":"CreatePersonalAccessTokensTable::down","doc":"<p>Reverse the migrations.</p>"},
            
                    {"type":"Class","link":"CreateSessionsTable.html","name":"CreateSessionsTable","doc":null},
                                {"type":"Method","fromName":"CreateSessionsTable","fromLink":"CreateSessionsTable.html","link":"CreateSessionsTable.html#method_up","name":"CreateSessionsTable::up","doc":"<p>Run the migrations.</p>"},
        {"type":"Method","fromName":"CreateSessionsTable","fromLink":"CreateSessionsTable.html","link":"CreateSessionsTable.html#method_down","name":"CreateSessionsTable::down","doc":"<p>Reverse the migrations.</p>"},
            
                    {"type":"Class","link":"CreateUsersTable.html","name":"CreateUsersTable","doc":null},
                                {"type":"Method","fromName":"CreateUsersTable","fromLink":"CreateUsersTable.html","link":"CreateUsersTable.html#method_up","name":"CreateUsersTable::up","doc":"<p>Run the migrations.</p>"},
        {"type":"Method","fromName":"CreateUsersTable","fromLink":"CreateUsersTable.html","link":"CreateUsersTable.html#method_down","name":"CreateUsersTable::down","doc":"<p>Reverse the migrations.</p>"},
            
                    {"type":"Class","link":"CreateWalletsTable.html","name":"CreateWalletsTable","doc":null},
                                {"type":"Method","fromName":"CreateWalletsTable","fromLink":"CreateWalletsTable.html","link":"CreateWalletsTable.html#method_up","name":"CreateWalletsTable::up","doc":"<p>Run the migrations.</p>"},
        {"type":"Method","fromName":"CreateWalletsTable","fromLink":"CreateWalletsTable.html","link":"CreateWalletsTable.html#method_down","name":"CreateWalletsTable::down","doc":"<p>Reverse the migrations.</p>"},
            
                                                {"type":"Class","fromName":"Database\\Factories","fromLink":"Database/Factories.html","link":"Database/Factories/UserFactory.html","name":"Database\\Factories\\UserFactory","doc":null},
                                {"type":"Method","fromName":"Database\\Factories\\UserFactory","fromLink":"Database/Factories/UserFactory.html","link":"Database/Factories/UserFactory.html#method_definition","name":"Database\\Factories\\UserFactory::definition","doc":"<p>Define the model's default state.</p>"},
        {"type":"Method","fromName":"Database\\Factories\\UserFactory","fromLink":"Database/Factories/UserFactory.html","link":"Database/Factories/UserFactory.html#method_unverified","name":"Database\\Factories\\UserFactory::unverified","doc":"<p>Indicate that the model's email address should be unverified.</p>"},
        {"type":"Method","fromName":"Database\\Factories\\UserFactory","fromLink":"Database/Factories/UserFactory.html","link":"Database/Factories/UserFactory.html#method_withPersonalTeam","name":"Database\\Factories\\UserFactory::withPersonalTeam","doc":"<p>Indicate that the user should have a personal team.</p>"},
        {"type":"Method","fromName":"Database\\Factories\\UserFactory","fromLink":"Database/Factories/UserFactory.html","link":"Database/Factories/UserFactory.html#method_admin","name":"Database\\Factories\\UserFactory::admin","doc":"<p>Indicate that the user must be admin</p>"},
            
                                                {"type":"Class","fromName":"Database\\Factories","fromLink":"Database/Factories.html","link":"Database/Factories/WalletFactory.html","name":"Database\\Factories\\WalletFactory","doc":null},
                                {"type":"Method","fromName":"Database\\Factories\\WalletFactory","fromLink":"Database/Factories/WalletFactory.html","link":"Database/Factories/WalletFactory.html#method_definition","name":"Database\\Factories\\WalletFactory::definition","doc":"<p>Define the model's default state.</p>"},
            
                                                {"type":"Class","fromName":"Database\\Seeders","fromLink":"Database/Seeders.html","link":"Database/Seeders/DatabaseSeeder.html","name":"Database\\Seeders\\DatabaseSeeder","doc":null},
                                {"type":"Method","fromName":"Database\\Seeders\\DatabaseSeeder","fromLink":"Database/Seeders/DatabaseSeeder.html","link":"Database/Seeders/DatabaseSeeder.html#method_run","name":"Database\\Seeders\\DatabaseSeeder::run","doc":"<p>Seed the application's database.</p>"},
            
                                                {"type":"Trait","fromName":"Tests","fromLink":"Tests.html","link":"Tests/CreatesApplication.html","name":"Tests\\CreatesApplication","doc":null},
                                {"type":"Method","fromName":"Tests\\CreatesApplication","fromLink":"Tests/CreatesApplication.html","link":"Tests/CreatesApplication.html#method_createApplication","name":"Tests\\CreatesApplication::createApplication","doc":"<p>Creates the application.</p>"},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/ApiAuthenticationTest.html","name":"Tests\\Feature\\ApiAuthenticationTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\ApiAuthenticationTest","fromLink":"Tests/Feature/ApiAuthenticationTest.html","link":"Tests/Feature/ApiAuthenticationTest.html#method_setUp","name":"Tests\\Feature\\ApiAuthenticationTest::setUp","doc":"<p>Setup the test environment.</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\ApiAuthenticationTest","fromLink":"Tests/Feature/ApiAuthenticationTest.html","link":"Tests/Feature/ApiAuthenticationTest.html#method_test_login_validation_error","name":"Tests\\Feature\\ApiAuthenticationTest::test_login_validation_error","doc":"<p>A basic api login validation error test.</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\ApiAuthenticationTest","fromLink":"Tests/Feature/ApiAuthenticationTest.html","link":"Tests/Feature/ApiAuthenticationTest.html#method_test_login_and_logout_success","name":"Tests\\Feature\\ApiAuthenticationTest::test_login_and_logout_success","doc":"<p>A basic api login success test.</p>"},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/ApiRegistrationTest.html","name":"Tests\\Feature\\ApiRegistrationTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\ApiRegistrationTest","fromLink":"Tests/Feature/ApiRegistrationTest.html","link":"Tests/Feature/ApiRegistrationTest.html#method_test_registration_success","name":"Tests\\Feature\\ApiRegistrationTest::test_registration_success","doc":"<p>A basic registration test success</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\ApiRegistrationTest","fromLink":"Tests/Feature/ApiRegistrationTest.html","link":"Tests/Feature/ApiRegistrationTest.html#method_test_registration_validation_error","name":"Tests\\Feature\\ApiRegistrationTest::test_registration_validation_error","doc":"<p>A basic registration test with validation error</p>"},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/ApiTokenPermissionsTest.html","name":"Tests\\Feature\\ApiTokenPermissionsTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\ApiTokenPermissionsTest","fromLink":"Tests/Feature/ApiTokenPermissionsTest.html","link":"Tests/Feature/ApiTokenPermissionsTest.html#method_test_api_token_permissions_can_be_updated","name":"Tests\\Feature\\ApiTokenPermissionsTest::test_api_token_permissions_can_be_updated","doc":null},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/AuthenticationTest.html","name":"Tests\\Feature\\AuthenticationTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\AuthenticationTest","fromLink":"Tests/Feature/AuthenticationTest.html","link":"Tests/Feature/AuthenticationTest.html#method_test_login_screen_can_be_rendered","name":"Tests\\Feature\\AuthenticationTest::test_login_screen_can_be_rendered","doc":null},
        {"type":"Method","fromName":"Tests\\Feature\\AuthenticationTest","fromLink":"Tests/Feature/AuthenticationTest.html","link":"Tests/Feature/AuthenticationTest.html#method_test_users_can_authenticate_using_the_login_screen","name":"Tests\\Feature\\AuthenticationTest::test_users_can_authenticate_using_the_login_screen","doc":null},
        {"type":"Method","fromName":"Tests\\Feature\\AuthenticationTest","fromLink":"Tests/Feature/AuthenticationTest.html","link":"Tests/Feature/AuthenticationTest.html#method_test_users_can_not_authenticate_with_invalid_password","name":"Tests\\Feature\\AuthenticationTest::test_users_can_not_authenticate_with_invalid_password","doc":null},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/BrowserSessionsTest.html","name":"Tests\\Feature\\BrowserSessionsTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\BrowserSessionsTest","fromLink":"Tests/Feature/BrowserSessionsTest.html","link":"Tests/Feature/BrowserSessionsTest.html#method_test_other_browser_sessions_can_be_logged_out","name":"Tests\\Feature\\BrowserSessionsTest::test_other_browser_sessions_can_be_logged_out","doc":null},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/CreateApiTokenTest.html","name":"Tests\\Feature\\CreateApiTokenTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\CreateApiTokenTest","fromLink":"Tests/Feature/CreateApiTokenTest.html","link":"Tests/Feature/CreateApiTokenTest.html#method_test_api_tokens_can_be_created","name":"Tests\\Feature\\CreateApiTokenTest::test_api_tokens_can_be_created","doc":null},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/DeleteAccountTest.html","name":"Tests\\Feature\\DeleteAccountTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\DeleteAccountTest","fromLink":"Tests/Feature/DeleteAccountTest.html","link":"Tests/Feature/DeleteAccountTest.html#method_test_user_accounts_can_be_deleted","name":"Tests\\Feature\\DeleteAccountTest::test_user_accounts_can_be_deleted","doc":null},
        {"type":"Method","fromName":"Tests\\Feature\\DeleteAccountTest","fromLink":"Tests/Feature/DeleteAccountTest.html","link":"Tests/Feature/DeleteAccountTest.html#method_test_correct_password_must_be_provided_before_account_can_be_deleted","name":"Tests\\Feature\\DeleteAccountTest::test_correct_password_must_be_provided_before_account_can_be_deleted","doc":null},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/DeleteApiTokenTest.html","name":"Tests\\Feature\\DeleteApiTokenTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\DeleteApiTokenTest","fromLink":"Tests/Feature/DeleteApiTokenTest.html","link":"Tests/Feature/DeleteApiTokenTest.html#method_test_api_tokens_can_be_deleted","name":"Tests\\Feature\\DeleteApiTokenTest::test_api_tokens_can_be_deleted","doc":null},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/EmailVerificationTest.html","name":"Tests\\Feature\\EmailVerificationTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\EmailVerificationTest","fromLink":"Tests/Feature/EmailVerificationTest.html","link":"Tests/Feature/EmailVerificationTest.html#method_test_email_verification_screen_can_be_rendered","name":"Tests\\Feature\\EmailVerificationTest::test_email_verification_screen_can_be_rendered","doc":null},
        {"type":"Method","fromName":"Tests\\Feature\\EmailVerificationTest","fromLink":"Tests/Feature/EmailVerificationTest.html","link":"Tests/Feature/EmailVerificationTest.html#method_test_email_can_be_verified","name":"Tests\\Feature\\EmailVerificationTest::test_email_can_be_verified","doc":null},
        {"type":"Method","fromName":"Tests\\Feature\\EmailVerificationTest","fromLink":"Tests/Feature/EmailVerificationTest.html","link":"Tests/Feature/EmailVerificationTest.html#method_test_email_can_not_verified_with_invalid_hash","name":"Tests\\Feature\\EmailVerificationTest::test_email_can_not_verified_with_invalid_hash","doc":null},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/PasswordConfirmationTest.html","name":"Tests\\Feature\\PasswordConfirmationTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\PasswordConfirmationTest","fromLink":"Tests/Feature/PasswordConfirmationTest.html","link":"Tests/Feature/PasswordConfirmationTest.html#method_test_confirm_password_screen_can_be_rendered","name":"Tests\\Feature\\PasswordConfirmationTest::test_confirm_password_screen_can_be_rendered","doc":null},
        {"type":"Method","fromName":"Tests\\Feature\\PasswordConfirmationTest","fromLink":"Tests/Feature/PasswordConfirmationTest.html","link":"Tests/Feature/PasswordConfirmationTest.html#method_test_password_can_be_confirmed","name":"Tests\\Feature\\PasswordConfirmationTest::test_password_can_be_confirmed","doc":null},
        {"type":"Method","fromName":"Tests\\Feature\\PasswordConfirmationTest","fromLink":"Tests/Feature/PasswordConfirmationTest.html","link":"Tests/Feature/PasswordConfirmationTest.html#method_test_password_is_not_confirmed_with_invalid_password","name":"Tests\\Feature\\PasswordConfirmationTest::test_password_is_not_confirmed_with_invalid_password","doc":null},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/PasswordResetTest.html","name":"Tests\\Feature\\PasswordResetTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\PasswordResetTest","fromLink":"Tests/Feature/PasswordResetTest.html","link":"Tests/Feature/PasswordResetTest.html#method_test_reset_password_link_screen_can_be_rendered","name":"Tests\\Feature\\PasswordResetTest::test_reset_password_link_screen_can_be_rendered","doc":null},
        {"type":"Method","fromName":"Tests\\Feature\\PasswordResetTest","fromLink":"Tests/Feature/PasswordResetTest.html","link":"Tests/Feature/PasswordResetTest.html#method_test_reset_password_link_can_be_requested","name":"Tests\\Feature\\PasswordResetTest::test_reset_password_link_can_be_requested","doc":null},
        {"type":"Method","fromName":"Tests\\Feature\\PasswordResetTest","fromLink":"Tests/Feature/PasswordResetTest.html","link":"Tests/Feature/PasswordResetTest.html#method_test_reset_password_screen_can_be_rendered","name":"Tests\\Feature\\PasswordResetTest::test_reset_password_screen_can_be_rendered","doc":null},
        {"type":"Method","fromName":"Tests\\Feature\\PasswordResetTest","fromLink":"Tests/Feature/PasswordResetTest.html","link":"Tests/Feature/PasswordResetTest.html#method_test_password_can_be_reset_with_valid_token","name":"Tests\\Feature\\PasswordResetTest::test_password_can_be_reset_with_valid_token","doc":null},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/ProfileInformationTest.html","name":"Tests\\Feature\\ProfileInformationTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\ProfileInformationTest","fromLink":"Tests/Feature/ProfileInformationTest.html","link":"Tests/Feature/ProfileInformationTest.html#method_test_profile_information_can_be_updated","name":"Tests\\Feature\\ProfileInformationTest::test_profile_information_can_be_updated","doc":null},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/RegistrationTest.html","name":"Tests\\Feature\\RegistrationTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\RegistrationTest","fromLink":"Tests/Feature/RegistrationTest.html","link":"Tests/Feature/RegistrationTest.html#method_test_registration_screen_can_be_rendered","name":"Tests\\Feature\\RegistrationTest::test_registration_screen_can_be_rendered","doc":null},
        {"type":"Method","fromName":"Tests\\Feature\\RegistrationTest","fromLink":"Tests/Feature/RegistrationTest.html","link":"Tests/Feature/RegistrationTest.html#method_test_registration_screen_cannot_be_rendered_if_support_is_disabled","name":"Tests\\Feature\\RegistrationTest::test_registration_screen_cannot_be_rendered_if_support_is_disabled","doc":null},
        {"type":"Method","fromName":"Tests\\Feature\\RegistrationTest","fromLink":"Tests/Feature/RegistrationTest.html","link":"Tests/Feature/RegistrationTest.html#method_test_new_users_can_register","name":"Tests\\Feature\\RegistrationTest::test_new_users_can_register","doc":null},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/TwoFactorAuthenticationSettingsTest.html","name":"Tests\\Feature\\TwoFactorAuthenticationSettingsTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\TwoFactorAuthenticationSettingsTest","fromLink":"Tests/Feature/TwoFactorAuthenticationSettingsTest.html","link":"Tests/Feature/TwoFactorAuthenticationSettingsTest.html#method_test_two_factor_authentication_can_be_enabled","name":"Tests\\Feature\\TwoFactorAuthenticationSettingsTest::test_two_factor_authentication_can_be_enabled","doc":null},
        {"type":"Method","fromName":"Tests\\Feature\\TwoFactorAuthenticationSettingsTest","fromLink":"Tests/Feature/TwoFactorAuthenticationSettingsTest.html","link":"Tests/Feature/TwoFactorAuthenticationSettingsTest.html#method_test_recovery_codes_can_be_regenerated","name":"Tests\\Feature\\TwoFactorAuthenticationSettingsTest::test_recovery_codes_can_be_regenerated","doc":null},
        {"type":"Method","fromName":"Tests\\Feature\\TwoFactorAuthenticationSettingsTest","fromLink":"Tests/Feature/TwoFactorAuthenticationSettingsTest.html","link":"Tests/Feature/TwoFactorAuthenticationSettingsTest.html#method_test_two_factor_authentication_can_be_disabled","name":"Tests\\Feature\\TwoFactorAuthenticationSettingsTest::test_two_factor_authentication_can_be_disabled","doc":null},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/UpdatePasswordTest.html","name":"Tests\\Feature\\UpdatePasswordTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\UpdatePasswordTest","fromLink":"Tests/Feature/UpdatePasswordTest.html","link":"Tests/Feature/UpdatePasswordTest.html#method_test_password_can_be_updated","name":"Tests\\Feature\\UpdatePasswordTest::test_password_can_be_updated","doc":null},
        {"type":"Method","fromName":"Tests\\Feature\\UpdatePasswordTest","fromLink":"Tests/Feature/UpdatePasswordTest.html","link":"Tests/Feature/UpdatePasswordTest.html#method_test_current_password_must_be_correct","name":"Tests\\Feature\\UpdatePasswordTest::test_current_password_must_be_correct","doc":null},
        {"type":"Method","fromName":"Tests\\Feature\\UpdatePasswordTest","fromLink":"Tests/Feature/UpdatePasswordTest.html","link":"Tests/Feature/UpdatePasswordTest.html#method_test_new_passwords_must_match","name":"Tests\\Feature\\UpdatePasswordTest::test_new_passwords_must_match","doc":null},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/UserDeleteTest.html","name":"Tests\\Feature\\UserDeleteTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\UserDeleteTest","fromLink":"Tests/Feature/UserDeleteTest.html","link":"Tests/Feature/UserDeleteTest.html#method_setUp","name":"Tests\\Feature\\UserDeleteTest::setUp","doc":"<p>Setup the test environment.</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\UserDeleteTest","fromLink":"Tests/Feature/UserDeleteTest.html","link":"Tests/Feature/UserDeleteTest.html#method_test_delete_user_as_user","name":"Tests\\Feature\\UserDeleteTest::test_delete_user_as_user","doc":"<p>A basic user show test as user</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\UserDeleteTest","fromLink":"Tests/Feature/UserDeleteTest.html","link":"Tests/Feature/UserDeleteTest.html#method_test_delete_user_as_admin","name":"Tests\\Feature\\UserDeleteTest::test_delete_user_as_admin","doc":"<p>A basic user show test as admin</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\UserDeleteTest","fromLink":"Tests/Feature/UserDeleteTest.html","link":"Tests/Feature/UserDeleteTest.html#method_test_delete_user_as_unauthorized_user","name":"Tests\\Feature\\UserDeleteTest::test_delete_user_as_unauthorized_user","doc":"<p>A basic user show test as unauthorized user</p>"},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/UserIndexTest.html","name":"Tests\\Feature\\UserIndexTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\UserIndexTest","fromLink":"Tests/Feature/UserIndexTest.html","link":"Tests/Feature/UserIndexTest.html#method_setUp","name":"Tests\\Feature\\UserIndexTest::setUp","doc":"<p>Setup the test environment.</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\UserIndexTest","fromLink":"Tests/Feature/UserIndexTest.html","link":"Tests/Feature/UserIndexTest.html#method_test_index_user_as_user","name":"Tests\\Feature\\UserIndexTest::test_index_user_as_user","doc":"<p>A basic user index test as user</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\UserIndexTest","fromLink":"Tests/Feature/UserIndexTest.html","link":"Tests/Feature/UserIndexTest.html#method_test_index_user_as_admin","name":"Tests\\Feature\\UserIndexTest::test_index_user_as_admin","doc":"<p>A basic user index test as admin</p>"},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/UserShowTest.html","name":"Tests\\Feature\\UserShowTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\UserShowTest","fromLink":"Tests/Feature/UserShowTest.html","link":"Tests/Feature/UserShowTest.html#method_setUp","name":"Tests\\Feature\\UserShowTest::setUp","doc":"<p>Setup the test environment.</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\UserShowTest","fromLink":"Tests/Feature/UserShowTest.html","link":"Tests/Feature/UserShowTest.html#method_test_show_user_as_user","name":"Tests\\Feature\\UserShowTest::test_show_user_as_user","doc":"<p>A basic user show test as user</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\UserShowTest","fromLink":"Tests/Feature/UserShowTest.html","link":"Tests/Feature/UserShowTest.html#method_test_show_user_as_admin","name":"Tests\\Feature\\UserShowTest::test_show_user_as_admin","doc":"<p>A basic user show test as admin</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\UserShowTest","fromLink":"Tests/Feature/UserShowTest.html","link":"Tests/Feature/UserShowTest.html#method_test_show_user_as_unauthorized_user","name":"Tests\\Feature\\UserShowTest::test_show_user_as_unauthorized_user","doc":"<p>A basic user show test as unauthorized user</p>"},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/UserUpdateTest.html","name":"Tests\\Feature\\UserUpdateTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\UserUpdateTest","fromLink":"Tests/Feature/UserUpdateTest.html","link":"Tests/Feature/UserUpdateTest.html#method_setUp","name":"Tests\\Feature\\UserUpdateTest::setUp","doc":"<p>Setup the test environment.</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\UserUpdateTest","fromLink":"Tests/Feature/UserUpdateTest.html","link":"Tests/Feature/UserUpdateTest.html#method_test_update_user_as_user","name":"Tests\\Feature\\UserUpdateTest::test_update_user_as_user","doc":"<p>A basic user update test as user</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\UserUpdateTest","fromLink":"Tests/Feature/UserUpdateTest.html","link":"Tests/Feature/UserUpdateTest.html#method_test_update_user_as_admin","name":"Tests\\Feature\\UserUpdateTest::test_update_user_as_admin","doc":"<p>A basic user update test as admin</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\UserUpdateTest","fromLink":"Tests/Feature/UserUpdateTest.html","link":"Tests/Feature/UserUpdateTest.html#method_test_update_user_as_unauthorized_admin","name":"Tests\\Feature\\UserUpdateTest::test_update_user_as_unauthorized_admin","doc":"<p>A basic user update test as unauthorized admin</p>"},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/WalletCreateTest.html","name":"Tests\\Feature\\WalletCreateTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\WalletCreateTest","fromLink":"Tests/Feature/WalletCreateTest.html","link":"Tests/Feature/WalletCreateTest.html#method_setUp","name":"Tests\\Feature\\WalletCreateTest::setUp","doc":"<p>Setup the test environment.</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\WalletCreateTest","fromLink":"Tests/Feature/WalletCreateTest.html","link":"Tests/Feature/WalletCreateTest.html#method_test_create_wallet_as_user","name":"Tests\\Feature\\WalletCreateTest::test_create_wallet_as_user","doc":"<p>A basic wallet show test as user</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\WalletCreateTest","fromLink":"Tests/Feature/WalletCreateTest.html","link":"Tests/Feature/WalletCreateTest.html#method_test_create_wallet_as_admin","name":"Tests\\Feature\\WalletCreateTest::test_create_wallet_as_admin","doc":"<p>A basic wallet show test as admin</p>"},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/WalletDeleteTest.html","name":"Tests\\Feature\\WalletDeleteTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\WalletDeleteTest","fromLink":"Tests/Feature/WalletDeleteTest.html","link":"Tests/Feature/WalletDeleteTest.html#method_setUp","name":"Tests\\Feature\\WalletDeleteTest::setUp","doc":"<p>Setup the test environment.</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\WalletDeleteTest","fromLink":"Tests/Feature/WalletDeleteTest.html","link":"Tests/Feature/WalletDeleteTest.html#method_test_delete_wallet_as_user","name":"Tests\\Feature\\WalletDeleteTest::test_delete_wallet_as_user","doc":"<p>A basic wallet show test as user</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\WalletDeleteTest","fromLink":"Tests/Feature/WalletDeleteTest.html","link":"Tests/Feature/WalletDeleteTest.html#method_test_delete_wallet_as_admin","name":"Tests\\Feature\\WalletDeleteTest::test_delete_wallet_as_admin","doc":"<p>A basic wallet show test as admin</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\WalletDeleteTest","fromLink":"Tests/Feature/WalletDeleteTest.html","link":"Tests/Feature/WalletDeleteTest.html#method_test_delete_wallet_as_unauthorized_user","name":"Tests\\Feature\\WalletDeleteTest::test_delete_wallet_as_unauthorized_user","doc":"<p>A basic wallet show test as unauthorized user</p>"},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/WalletIndexTest.html","name":"Tests\\Feature\\WalletIndexTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\WalletIndexTest","fromLink":"Tests/Feature/WalletIndexTest.html","link":"Tests/Feature/WalletIndexTest.html#method_setUp","name":"Tests\\Feature\\WalletIndexTest::setUp","doc":"<p>Setup the test environment.</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\WalletIndexTest","fromLink":"Tests/Feature/WalletIndexTest.html","link":"Tests/Feature/WalletIndexTest.html#method_test_index_wallet_as_user","name":"Tests\\Feature\\WalletIndexTest::test_index_wallet_as_user","doc":"<p>A basic wallet index test as user</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\WalletIndexTest","fromLink":"Tests/Feature/WalletIndexTest.html","link":"Tests/Feature/WalletIndexTest.html#method_test_index_wallet_as_admin","name":"Tests\\Feature\\WalletIndexTest::test_index_wallet_as_admin","doc":"<p>A basic wallet index test as admin</p>"},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/WalletShowTest.html","name":"Tests\\Feature\\WalletShowTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\WalletShowTest","fromLink":"Tests/Feature/WalletShowTest.html","link":"Tests/Feature/WalletShowTest.html#method_setUp","name":"Tests\\Feature\\WalletShowTest::setUp","doc":"<p>Setup the test environment.</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\WalletShowTest","fromLink":"Tests/Feature/WalletShowTest.html","link":"Tests/Feature/WalletShowTest.html#method_test_show_wallet_as_user","name":"Tests\\Feature\\WalletShowTest::test_show_wallet_as_user","doc":"<p>A basic wallet show test as user</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\WalletShowTest","fromLink":"Tests/Feature/WalletShowTest.html","link":"Tests/Feature/WalletShowTest.html#method_test_show_wallet_as_admin","name":"Tests\\Feature\\WalletShowTest::test_show_wallet_as_admin","doc":"<p>A basic wallet show test as admin</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\WalletShowTest","fromLink":"Tests/Feature/WalletShowTest.html","link":"Tests/Feature/WalletShowTest.html#method_test_show_wallet_as_unauthorized_user","name":"Tests\\Feature\\WalletShowTest::test_show_wallet_as_unauthorized_user","doc":"<p>A basic wallet show test as unauthorized user</p>"},
            
                                                {"type":"Class","fromName":"Tests\\Feature","fromLink":"Tests/Feature.html","link":"Tests/Feature/WalletUpdateTest.html","name":"Tests\\Feature\\WalletUpdateTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Feature\\WalletUpdateTest","fromLink":"Tests/Feature/WalletUpdateTest.html","link":"Tests/Feature/WalletUpdateTest.html#method_setUp","name":"Tests\\Feature\\WalletUpdateTest::setUp","doc":"<p>Setup the test environment.</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\WalletUpdateTest","fromLink":"Tests/Feature/WalletUpdateTest.html","link":"Tests/Feature/WalletUpdateTest.html#method_test_update_wallet_as_user","name":"Tests\\Feature\\WalletUpdateTest::test_update_wallet_as_user","doc":"<p>A basic wallet update test as user</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\WalletUpdateTest","fromLink":"Tests/Feature/WalletUpdateTest.html","link":"Tests/Feature/WalletUpdateTest.html#method_test_update_wallet_as_admin","name":"Tests\\Feature\\WalletUpdateTest::test_update_wallet_as_admin","doc":"<p>A basic wallet update test as admin</p>"},
        {"type":"Method","fromName":"Tests\\Feature\\WalletUpdateTest","fromLink":"Tests/Feature/WalletUpdateTest.html","link":"Tests/Feature/WalletUpdateTest.html#method_test_update_wallet_as_unauthorized_admin","name":"Tests\\Feature\\WalletUpdateTest::test_update_wallet_as_unauthorized_admin","doc":"<p>A basic wallet update test as unauthorized admin</p>"},
            
                                                {"type":"Class","fromName":"Tests","fromLink":"Tests.html","link":"Tests/TestCase.html","name":"Tests\\TestCase","doc":null},
                
                                                {"type":"Class","fromName":"Tests\\Unit","fromLink":"Tests/Unit.html","link":"Tests/Unit/ExampleTest.html","name":"Tests\\Unit\\ExampleTest","doc":null},
                                {"type":"Method","fromName":"Tests\\Unit\\ExampleTest","fromLink":"Tests/Unit/ExampleTest.html","link":"Tests/Unit/ExampleTest.html#method_test_example","name":"Tests\\Unit\\ExampleTest::test_example","doc":"<p>A basic test example.</p>"},
            
                                // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Doctum = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Doctum.injectApiTree($('#api-tree'));
    });

    return root.Doctum;
})(window);

$(function() {

    
    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').on('click', function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Doctum.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


