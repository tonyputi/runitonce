<?php

namespace Tests\Browser;

use App\Models\User;
use App\Models\Wallet;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Dusk\Browser;
use Laravel\Sanctum\Sanctum;
use Tests\DuskTestCase;

class WalletIndexTest extends DuskTestCase
{
    use DatabaseMigrations, WithFaker;

    /**
     * A Dusk wallet index test
     *
     * @group runitonce
     * @group wallet
     * @group wallet-index
     * @return void
     */
    public function testWalletsCanBeIndexed()
    {
        $user = User::factory()->create();
        Wallet::factory(10)->for($user)->create();

        $this->browse(function (Browser $browser) use($user) {
            $browser->loginAs($user)
                ->visit('/wallets')
                ->waitForTextIn('h2', 'Wallets')
                ->assertPathIs('/wallets')
                ->waitFor('table', 25)
                ->assertVisible("@1-row")
                ->assertVisible("@2-row")
                ->assertVisible("@3-row");
        });
    }

    /**
     * A Dusk wallet delete test
     *
     * @group runitonce
     * @group wallet
     * @group wallet-index
     * @group wallet-index-delete
     * @return void
     */
    public function testWalletCanBeDeleted()
    {
        $user = User::factory()->create();
        Wallet::factory(3)->for($user)->create();

        $this->browse(function (Browser $browser) use($user) {
            $browser->loginAs($user)
                ->visit('/wallets')
                ->waitForTextIn('h2', 'Wallets')
                ->assertPathIs('/wallets')
                ->waitFor('table', 25)
                ->assertVisible("@1-row")
                ->assertVisible("@2-row")
                ->assertVisible("@3-row")
                ->click('@2-delete-button')
                ->whenAvailable('@modal', function ($browser) {
                    $browser->click('@confirm-delete-button');
                })
                ->pause(1000)
                ->assertVisible("@1-row")
                ->assertMissing("@2-row")
                ->assertVisible("@3-row");
        });
    }

    /**
     * A Dusk wallet delete test
     *
     * @group runitonce
     * @group wallet
     * @group wallet-index
     * @group wallet-index-update
     * @return void
     */
    public function testWalletCanBeUpdated()
    {
        $user = User::factory()->create();
        Wallet::factory(3)->for($user)->create();

        $this->browse(function (Browser $browser) use($user) {
            $browser->loginAs($user)
                ->visit('/wallets')
                ->waitForTextIn('h2', 'Wallets')
                ->assertPathIs('/wallets')
                ->waitFor('table', 25)
                ->assertVisible("@1-row")
                ->click('@1-view-button')
                ->waitForTextIn('h2', 'Wallet: Wallet')
                ->assertPathIs('/wallets/1')
                ->type('@name', 'My fresh updated wallet')
                ->click('@save-button')
                ->pause(300)
                ->assertSee('Saved');
        });
    }
}
