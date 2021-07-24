<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Wallet;
use Illuminate\Auth\Access\HandlesAuthorization;

class WalletPolicy
{
    use HandlesAuthorization;

    /**
     * Perform pre-authorization checks.
     *
     * @param  \App\Models\User  $user
     * @param  string  $ability
     * @return void|bool
     */
    public function before(User $user, $ability)
    {
        if ($user->is_admin) {
            return true;
        }
    }

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Wallet  $wallet
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Wallet $wallet)
    {
        return $user->id === $wallet->user_id;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Wallet  $wallet
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Wallet $wallet)
    {
        return $user->id === $wallet->user_id;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Wallet  $wallet
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Wallet $wallet)
    {
        return $user->id === $wallet->user_id;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Wallet  $wallet
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Wallet $wallet)
    {
        return $user->id === $wallet->user_id;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Wallet  $wallet
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Wallet $wallet)
    {
        return false;
    }
}
