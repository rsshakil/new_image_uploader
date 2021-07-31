<?php

namespace App\Models\IMG;

use Illuminate\Database\Eloquent\Model;
use App\Models\ADMIN\User;

class Image extends Model
{
    //
    public function user(){
        return $this->belongsTo(User::class,'user_id','id');
    }
}
