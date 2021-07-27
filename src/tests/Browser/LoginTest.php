<?php

namespace Tests\Browser;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Login;
use Tests\DuskTestCase;

class LoginTest extends DuskTestCase
{
    use DatabaseMigrations, WithFaker;

    /**
     * A basic browser login success.
     *
     * @group runitonce
     * @group login
     * @return void
     */
    public function testLoginSuccess()
    {
        $user = User::factory()->create();

        $this->browse(function (Browser $browser) use ($user) {
            $browser->visit(new Login)
                ->within('form', function ($browser) use ($user) {
                    $browser->waitFor('@login-button')
                        ->type('@email', $user->email)
                        ->type('@password', 'password')
                        ->click('@login-button');
                })
                ->waitForTextIn('h2', 'Dashboard')
                ->assertPathIs('/dashboard')
                ->within('#app', function ($browser) {
                    $browser->waitFor('@header-dropdown-user')
                        ->click('@header-dropdown-user')
                        ->waitFor('@header-link-user-logout')
                        ->click('@header-link-user-logout');
                })
                ->waitForLocation('/')
                ->assertSee('Wallet management');

            $browser->blank();
        });
    }

    /**
     * A basic browser registration with validation errors.
     *
     * @group runitonce
     * @group login
     * @return void
     */
    public function testLoginFail()
    {
        $user = User::factory()->create();

        $this->browse(function (Browser $browser) use ($user) {
            $browser->visit(new Login)
                ->within('form', function ($browser) use ($user) {
                    $browser->waitFor('@login-button')
                        ->type('@email', $user->email)
                        ->type('@password', '123123921')
                        ->click('@login-button');
                })
                ->waitForText('Whoops! Something went wrong')
                ->assertSee('These credentials do not match our records');

            $browser->blank();
        });
    }
}
