<?php

namespace App\Http\Resources\BACKEDN\IMG;

use Carbon\Carbon;
use Helper;
use Illuminate\Http\Resources\Json\JsonResource;

class image extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'                => $this->id,
            'user_id'           => $this->user_id,
            'image_url'     => Helper::publicUrl('/').'/'.'images/blog/'.$this->image_url,
            'image_path'        => '<img style="width:60px; height:60px;" class="img-fluid" src="'.Helper::publicUrl('/').'/'.'images/blog/'.$this->image_url.'">',
            'user'              => $this->user,
            'created_month'         => Carbon::parse($this->created_at)->format('M'),
            'created_day'         => Carbon::parse($this->created_at)->format('d'),
            'created_date'         => Carbon::parse($this->created_at)->format('d/M/Y'),
                                       
           
        ];
    }
}
