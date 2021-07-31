<?php

namespace App\Http\Resources\BACKEND\IMG;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ImageResource extends JsonResource
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
            'image_url'     => $this->image_url,
            'image_path'        => '<img style="width:60px; height:60px;" class="img-fluid" src="'.config('app.url').'storage/app/public/backend/images/blog/'.$this->image_url.'">',
            'user'              => $this->user,
            'created_month'         => Carbon::parse($this->created_at)->format('M'),
            'created_day'         => Carbon::parse($this->created_at)->format('d'),
            'created_date'         => Carbon::parse($this->created_at)->format('d/M/Y'),
            'updated_at'         => Carbon::parse($this->updated_at)->format('d/M/Y'),
                                       
           
        ];
    }
}
