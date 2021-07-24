<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserRegistrationTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /**
     * A basic registration test success
     *
     * @return void
     */
    public function test_registration_success()
    {
        $response = $this->postJson('/api/register', [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $response->assertStatus(201)
            ->assertJsonStructure([
                'id',
                'name',
                'email',
                'created_at',
                'updated_at'
            ]);
    }

    /**
     * A basic registration test with validation error
     *
     * @return void
     */
    public function test_registration_validation_error()
    {
        $response = $this->postJson('/api/register', []);

        $response->assertStatus(422);
    }
}
