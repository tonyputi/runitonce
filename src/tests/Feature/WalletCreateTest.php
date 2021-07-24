<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class WalletCreateTest extends TestCase
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
    public function test_create_wallet_as_user()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
            ->postJson('/api/wallet', [
                'name' => 'My wallet 1',
                'is_active' => true
            ]);

        $response->assertStatus(201)
            ->assertJson(['user_id' => $user->id])
            ->assertJsonStructure([
                'id',
                'name',
                'balance',
                'is_active',
                'created_at',
                'updated_at'
            ]);
    }

    /**
     * A basic wallet show test as admin
     *
     * @return void
     */
    public function test_create_wallet_as_admin()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($this->admin)
            ->postJson('/api/wallet', [
                'user_id' => $user->id,
                'name' => 'My wallet 2',
                'is_active' => true
            ]);

        $response->assertStatus(201)
            ->assertJson(['user_id' => $user->id])
            ->assertJsonStructure([
                'id',
                'name',
                'balance',
                'is_active',
                'created_at',
                'updated_at'
            ]);
    }
}
