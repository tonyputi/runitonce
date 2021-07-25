<?php

namespace App\Http\Controllers\Api;

use App\Models\Wallet;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\WalletStoreRequest;
use App\Http\Requests\WalletUpdateRequest;
use App\Http\Resources\WalletResource;

class WalletController extends Controller
{
    /**
     * Create the controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->authorizeResource(Wallet::class, 'wallet');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();
        
        $query = Wallet::query();
        $query->when(!$user->is_admin, fn ($query) => $query->where('user_id', $request->user()->id));
        $query->when($user->is_admin, fn ($query) => $query->with('user'));
        $collection = $query->get();

        return WalletResource::collection($collection);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(WalletStoreRequest $request)
    {
        $user = $request->user();

        $resource = Wallet::create([
            'user_id' => $user->is_admin ? $request->input('user_id', $user->id) : $user->id,
            'name' => $request->name,
            'is_active' => $request->is_active
        ])->refresh();

        return new WalletResource($resource);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Wallet $wallet)
    {
        if ($request->user()->is_admin) {
            $wallet->load('user');
        }

        return new WalletResource($wallet);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(WalletUpdateRequest $request, Wallet $wallet)
    {
        $user = $request->user();

        $data = $user->is_admin ? $request->only('name', 'balance', 'is_active') : $request->only('name', 'is_active');

        $wallet->update($data);

        return new WalletResource($wallet);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Wallet $wallet)
    {
        $wallet->delete();

        return response(NULL, 204);
    }
}
