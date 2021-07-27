<?php

namespace Tests\Browser;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\Dashboard;
use Tests\DuskTestCase;

class DashboardTest extends DuskTestCase
{
    use DatabaseMigrations, WithFaker;

    /**
     * A Dusk basic test for dashboard.
     *
     * @group runitonce
     * @group dashboard
     * @return void
     */
    public function testDashboard()
    {
        $user = User::factory()->create();

        $this->browse(function (Browser $browser) use($user) {
            $browser->loginAs($user)
                ->visit(new Dashboard)
                ->waitForTextIn('h2', 'Dashboard')
                ->assertPathIs('/dashboard')
                ->assertSee('Welcome to wallets manager application');
        });
    }
}
