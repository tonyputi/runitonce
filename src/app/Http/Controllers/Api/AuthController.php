<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterUserRequest;

class AuthController extends Controller
{
    /**
     * Sign up user
     *
     * @return void
     */
    public function register(RegisterUserRequest $request)
    {
        return User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'email_verified_at' => now()
        ]);
    }

    /**
     * Sign in user
     *
     * @param Request $request
     * @return void
     */
    public function login(Request $request)
    {
        return [];
    }
}
