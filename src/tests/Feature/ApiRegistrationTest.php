<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ApiRegistrationTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /**
     * A basic registration test success
     *
     * @group runitonce
     * @group registration
     * @return void
     */
    public function test_registration_success()
    {
        $response = $this->json('POST', route('api.register'), [
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
     * @group runitonce
     * @group registration
     * @return void
     */
    public function test_registration_validation_error()
    {
        $response = $this->json('POST', route('api.register'), [
            'name' => $this->faker->name(),
            'password' => 'password',
            'password_confirmation' => 'pasa',
        ]);

        $response->assertStatus(422);
    }
}
