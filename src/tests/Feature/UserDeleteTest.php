<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserDeleteTest extends TestCase
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
     * A basic user show test as user
     *
     * @group runitonce
     * @group user
     * @group user-delete
     * @return void
     */
    public function test_delete_user_as_user()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
            ->delete(route('api.users.destroy', [$user->id]));

        $response->assertStatus(204);
    }

    /**
     * A basic user show test as admin
     *
     * @group runitonce
     * @group user
     * @group user-delete
     * @return void
     */
    public function test_delete_user_as_admin()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($this->admin)
            ->delete(route('api.users.destroy', [$user->id]));

        $response->assertStatus(204);
    }

    /**
     * A basic user show test as unauthorized user
     *
     * @group runitonce
     * @group user
     * @group user-delete
     * @return void
     */
    public function test_delete_user_as_unauthorized_user()
    {
        $user = User::factory()->create();
        $user2 = User::factory()->create();

        $response = $this->actingAs($user)
            ->delete(route('api.users.destroy', [$user2->id]));

        $response->assertStatus(403);
    }
}
