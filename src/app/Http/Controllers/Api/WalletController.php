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
        $query->when($request->filled('search'), function ($query) use($request) {
            $query->where(function ($query) use ($request) {
                $query->where('name', 'like', "%{$request->search}%");
                $query->orWHereHas('user', function ($query) use ($request) {
                    $query->where('email', 'like', "%{$request->search}%");
                    $query->orWhere('email', 'like', "%{$request->search}%");
                });
            });
        });
        $query->orderBy('id', 'desc');
        $collection = $request->has('page') ? $query->paginate() : $query->get();

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

        $wallet = new Wallet;
        $wallet->name = $request->name;
        $wallet->is_active = $request->is_active;
        if ($user->is_admin and $request->has('balance')) {
            $wallet->balance = $request->balance;
        }
        $wallet->user_id = $user->is_admin ? $request->input('user_id', $user->id) : $user->id;
        $wallet->save();
        

        return new WalletResource($wallet);
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

        $wallet->name = $request->name;
        $wallet->is_active = $request->is_active;
        if ($user->is_admin and $request->has('balance')) {
            $wallet->balance = $request->balance;
        }
        $wallet->save();

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
