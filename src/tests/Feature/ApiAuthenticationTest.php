<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ApiAuthenticationTest extends TestCase
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

        $this->user = User::factory()->create();
    }

    /**
     * A basic api login validation error test.
     *
     * @group runitonce
     * @group authentication
     * @group authentication-login
     * @return void
     */
    public function test_login_validation_error()
    {
        $response = $this->json('POST', route('api.login'), [
            'email' => 'something@notexisting.com'
        ]);

        $response->assertStatus(422);
    }

    /**
     * A basic api login success test.
     *
     * @group runitonce
     * @group authentication
     * @group authentication-login
     * @return string
     */
    public function test_login_and_logout_success()
    {
        $response = $this->json('POST', route('api.login'), [
            'email' => $this->user->email,
            'password' => 'password',
            'device_name' => 'PHPUNIT'
        ]);

        $response->assertOk();

        $token = $response->content();

        $response = $this->withHeaders([
            'Authorization' => "Bearer {$token}"
        ])
            ->json('POST', route('api.logout'));

        $response->assertStatus(204);
    }
}
