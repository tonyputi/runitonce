<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Wallet;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class WalletIndexTest extends TestCase
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
     * A basic wallet index test as user
     *
     * @return void
     */
    public function test_index_wallet_as_user()
    {
        $user = User::factory()->create();
        Wallet::factory(3)->create(['user_id' => $user->id]);

        $response = $this->actingAs($user, 'api')
            ->getJson('/api/wallet');

        $response->assertStatus(200)
            ->assertJsonCount(3)
            ->assertJsonStructure([
                '*' => [
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
     * A basic wallet index test as admin
     *
     * @return void
     */
    public function test_index_wallet_as_admin()
    {
        User::factory(2)->create()->each(function ($user) {
            Wallet::factory(3)->create(['user_id' => $user->id]);
        });
        

        $response = $this->actingAs($this->admin, 'api')
            ->getJson('/api/wallet');

        $response->assertStatus(200)
            ->assertJsonCount(6)
            ->assertJsonStructure([
                '*' => [
                    'id',
                    'name',
                    'balance',
                    'is_active',
                    'created_at',
                    'updated_at'
                ]
            ]);
    }
}
