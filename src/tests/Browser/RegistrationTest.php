<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Register;
use Tests\DuskTestCase;

class RegistrationTest extends DuskTestCase
{
    use DatabaseMigrations, WithFaker;

    /**
     * A basic browser registration success.
     *
     * @group runitonce
     * @group registration
     * @return void
     */
    public function testRegistrationSuccess()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit(new Register)
                ->within('form', function ($browser) {
                    $browser->waitFor('@register-button')
                        ->type('@name', $this->faker->name())
                        ->type('@email', $this->faker->safeEmail())
                        ->type('@password', 'password')
                        ->type('@password_confirmation', 'password')
                        ->click('@register-button');
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
     * @group registration
     * @return void
     */
    public function testRegistrationFail()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit(new Register)
                ->within('form', function ($browser) {
                    $browser->waitFor('@register-button')
                        ->type('@name', $this->faker->name())
                        ->type('@email', $this->faker->safeEmail())
                        ->type('@password', 'password')
                        ->type('@password_confirmation', 'drowssap')
                        ->click('@register-button');
                })
                    ->waitForText('Whoops! Something went wrong')
                    ->assertSee('The password confirmation does not match');

            $browser->blank();
        });
    }
}
