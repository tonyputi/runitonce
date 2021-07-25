<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Wallet;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class WalletDeleteTest extends TestCase
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
     * @return void
     */
    public function test_delete_wallet_as_user()
    {
        $user = User::factory()->create();
        $wallet = Wallet::factory()->create(['user_id' => $user->id]);

        $response = $this->actingAs($user, 'sanctum')
            ->deleteJson("/api/wallet/{$wallet->id}");

        $response->assertStatus(204);
    }

    /**
     * A basic wallet show test as admin
     *
     * @return void
     */
    public function test_delete_wallet_as_admin()
    {
        $user = User::factory()->create();
        $wallet = Wallet::factory()->create(['user_id' => $user->id]);

        $response = $this->actingAs($this->admin, 'sanctum')
            ->deleteJson("/api/wallet/{$wallet->id}");

        $response->assertStatus(204);
    }

    /**
     * A basic wallet show test as unauthorized user
     *
     * @return void
     */
    public function test_delete_wallet_as_unauthorized_user()
    {
        $user = User::factory()->create();
        $wallet = Wallet::factory()->create();

        $response = $this->actingAs($user, 'sanctum')
            ->deleteJson("/api/wallet/{$wallet->id}");

        $response->assertStatus(403);
    }
}
