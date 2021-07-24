<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Wallet;
use Illuminate\Database\Eloquent\Factories\Factory;

class WalletFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Wallet::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => fn (array $attributes) => User::factory()->create(),
            'name' => $this->faker->numerify('Wallet ###'),
            'balance' => $this->faker->numberBetween(100, 50000),
            'is_active' => true
        ];
    }
}
