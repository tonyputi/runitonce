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
     * @group runitonce
     * @group wallet
     * @group wallet-index
     * @return void
     */
    public function test_index_wallet_as_user()
    {
        $user = User::factory()->create();
        Wallet::factory(3)->create(['user_id' => $user->id]);

        $response = $this->actingAs($user)
            ->get(route('api.wallets.index'));

        $response->assertStatus(200)
            ->assertJsonCount(3, 'data')
            ->assertJsonStructure([
                'data' => [
                    '*' => [
                        'id',
                        'name',
                        'balance',
                        'is_active',
                        'created_at',
                        'updated_at'
                    ]
                ]
            ]);
    }

    /**
     * A basic wallet index test as admin
     *
     * @group runitonce
     * @group wallet
     * @group wallet-index
     * @return void
     */
    public function test_index_wallet_as_admin()
    {
        User::factory(2)->create()->each(function ($user) {
            Wallet::factory(3)->create(['user_id' => $user->id]);
        });
        
        $response = $this->actingAs($this->admin)
            ->get(route('api.wallets.index'));

        $response->assertStatus(200)
            ->assertJsonCount(6, 'data')
            ->assertJsonStructure([
                'data' => [
                    '*' => [
                        'id',
                        'user' => ['id', 'name'],
                        'name',
                        'balance',
                        'is_active',
                        'created_at',
                        'updated_at'
                    ]
                ]
            ]);
    }
}
