<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Wallet;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class WalletShowTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /**
     * Setup the test environment.
     *
     * @return void
     */
    protected function setUp(): void
    {
        parent::setUp();

        $this->admin = User::factory()->admin()->create();
    }

    /**
     * A basic wallet show test as user
     *
     * @group runitonce
     * @group wallet
     * @group wallet-show
     * @return void
     */
    public function test_show_wallet_as_user()
    {
        $user = User::factory()->create();
        $wallet = Wallet::factory()->create(['user_id' => $user->id]);

        $response = $this->actingAs($user)
            ->get(route('api.wallets.show', [$wallet->id]));

        $response->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    'id',
                    'name',
                    'balance',
                    'is_active',
                    'created_at',
                    'updated_at'
                ]
            ]);
    }

    /**
     * A basic wallet show test as admin
     *
     * @group runitonce
     * @group wallet
     * @group wallet-show
     * @return void
     */
    public function test_show_wallet_as_admin()
    {
        $user = User::factory()->create();
        $wallet = Wallet::factory()->create(['user_id' => $user->id]);

        $response = $this->actingAs($this->admin)
            ->get(route('api.wallets.show', [$wallet->id]));

        $response->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    'id',
                    'name',
                    'balance',
                    'is_active',
                    'created_at',
                    'updated_at'
                ]
            ]);
    }

    /**
     * A basic wallet show test as unauthorized user
     *
     * @group runitonce
     * @group wallet
     * @group wallet-show
     * @return void
     */
    public function test_show_wallet_as_unauthorized_user()
    {
        $user = User::factory()->create();
        $wallet = Wallet::factory()->create();

        $response = $this->actingAs($user)
            ->get(route('api.wallets.show', [$wallet->id]));

        $response->assertStatus(403);
    }
}
