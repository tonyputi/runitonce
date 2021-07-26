<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserIndexTest extends TestCase
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
     * A basic user index test as user
     *
     * @group runitonce
     * @group user
     * @group user-index
     * @return void
     */
    public function test_index_user_as_user()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
            ->get(route('api.users.index'));

        $response->assertStatus(200)
            ->assertJsonCount(1, 'data')
            ->assertJsonStructure([
                'data' => [
                    '*' => [
                        'id',
                        'name',
                        'email',
                        'created_at',
                        'updated_at'
                    ]
                ]
            ]);
    }

    /**
     * A basic user index test as admin
     *
     * @group runitonce
     * @group user
     * @group user-index
     * @return void
     */
    public function test_index_user_as_admin()
    {
        User::factory(5)->create();
        
        $response = $this->actingAs($this->admin)
            ->get(route('api.users.index'));

        $response->assertStatus(200)
            ->assertJsonCount(6, 'data')
            ->assertJsonStructure([
                'data' => [
                    '*' => [
                        'id',
                        'name',
                        'email',
                        'created_at',
                        'updated_at'
                    ]
                ]
            ]);
    }
}
