<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserUpdateTest extends TestCase
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
     * A basic user update test as user
     *
     * @group runitonce
     * @group user
     * @group user-update
     * @return void
     */
    public function test_update_user_as_user()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
            ->put(route('api.users.update', [$user->id]), [
                'name' => 'My brand new user'
            ]);

        $response->assertStatus(200)
            ->assertJsonFragment(['name' => 'My brand new user'])
            ->assertJsonStructure([
                'data' => [
                    'id',
                    'name',
                    'email',
                    'created_at',
                    'updated_at'
                ]
            ]);
    }

    /**
     * A basic user update test as admin
     *
     * @group runitonce
     * @group user
     * @group user-update 
     * @return void
     */
    public function test_update_user_as_admin()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($this->admin)
            ->put(route('api.users.update', [$user->id]), [
                'name' => 'My second brand new user'
            ]);

        $response->assertStatus(200)
            ->assertJsonFragment(['name' => 'My second brand new user'])
            ->assertJsonStructure([
                'data' => [
                    'id',
                    'name',
                    'email',
                    'created_at',
                    'updated_at'
                ]
            ]);
    }

    /**
     * A basic user update test as unauthorized admin
     *
     * @group runitonce
     * @group user
     * @group user-update
     * @return void
     */
    public function test_update_user_as_unauthorized_admin()
    {
        $user = User::factory()->create();
        $user2 = User::factory()->create();

        $response = $this->actingAs($user)
            ->put(route('api.users.update', [$user2->id]), [
                'name' => 'My third brand new user',
            ]);

        $response->assertStatus(403);
    }
}
