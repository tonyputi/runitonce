<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;

class UserController extends Controller
{
    /**
     * Create the controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->authorizeResource(User::class, 'user');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();
        
        $query = User::withCount('wallets');
        $query->when(!$user->is_admin, fn ($query) => $query->where('id', $request->user()->id));
        $query->when($request->filled('search'), function ($query) use($request) {
            $query->where(function ($query) use ($request) {
                $query->where('name', 'like', "%{$request->search}%");
                $query->orWhere('email', 'like', "%{$request->search}%");
            });
        });
        $collection = $request->has('page') ? $query->paginate() : $query->get();

        return UserResource::collection($collection);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserUpdateRequest $request, User $user)
    {
        $user->name = $request->name;
        if ($user->is($request->user()) and $request->filled('password')) {
            $user->password = Hash::make($request->password);
        }
        $user->save();

        return new UserResource($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();

        return response(NULL, 204);
    }
}
