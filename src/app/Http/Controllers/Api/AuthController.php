<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserStoreRequest;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Sign up user
     *
     * @return void
     */
    public function register(UserStoreRequest $request)
    {
        return User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'email_verified_at' => now()
        ])->refresh();
    }

    /**
     * Sign in user
     *
     * @param Request $request
     * @return void
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'device_name' => 'required',
        ]);
    
        $user = User::where('email', $request->email)->first();
    
        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
    
        return $user->createToken($request->device_name)->plainTextToken;
    }

    /**
     * Sign off user
     *
     * @param Request $request
     * @return void
     */
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
    
        return response(NULL, 204);
    }
}
