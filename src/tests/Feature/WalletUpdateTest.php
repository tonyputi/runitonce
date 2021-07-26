<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Wallet;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class WalletUpdateTest extends TestCase
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
     * A basic wallet update test as user
     *
     * @group runitonce
     * @group wallet
     * @group wallet-update
     * @return void
     */
    public function test_update_wallet_as_user()
    {
        $user = User::factory()->create();
        $wallet = Wallet::factory()->create([
            'user_id' => $user->id,
        ]);

        $response = $this->actingAs($user, 'sanctum')
            ->put(route('api.wallets.update', [$wallet->id]), [
                'name' => 'My brand new wallet',
                'is_active' => true
            ]);

        $response->assertStatus(200)
            ->assertJsonFragment(['name' => 'My brand new wallet'])
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
     * A basic wallet update test as admin
     *
     * @group runitonce
     * @group wallet
     * @group wallet-update 
     * @return void
     */
    public function test_update_wallet_as_admin()
    {
        $user = User::factory()->create();
        $wallet = Wallet::factory()->create([
            'user_id' => $user->id,
        ]);

        $response = $this->actingAs($this->admin, 'sanctum')
            ->put(route('api.wallets.update', [$wallet->id]), [
                'name' => 'My second brand new wallet',
                'is_active' => false
            ]);

        $response->assertStatus(200)
            ->assertJsonFragment(['name' => 'My second brand new wallet'])
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
     * A basic wallet update test as unauthorized admin
     *
     * @group runitonce
     * @group wallet
     * @group wallet-update
     * @return void
     */
    public function test_update_wallet_as_unauthorized_admin()
    {
        $user = User::factory()->create();
        $wallet = Wallet::factory()->create();

        $response = $this->actingAs($user, 'sanctum')
            ->put(route('api.wallets.update', [$wallet->id]), [
                'name' => 'My third brand new wallet',
                'is_active' => false
            ]);

        $response->assertStatus(403);
    }
}
