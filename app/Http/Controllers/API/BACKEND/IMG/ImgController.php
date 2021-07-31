<?php

namespace App\Http\Controllers\API\BACKEND\IMG;
use Helper;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\BACKEDN\IMG\ImageRequest;
use App\Http\Resources\BACKEND\IMG\ImageResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

use Illuminate\Http\Request;
use App\Models\IMG\image;
use App\Models\ADM\User;

class ImgController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user_id = Auth::user()->id;
        $result = image::where('is_delete', '1')->where('user_id',$user_id)->get();
        return ImageResource::collection($result)->additional([
            'user_info' => $user_id
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ImageRequest $request)
    {
        $validated = $request->validated();
        $path = storage_path().'/app/public/backend/images/';
       if(!is_dir($path)) {
        mkdir($path, 0755, true);
    }
    
    $image = @file_get_contents($request->image_url);
    if($image){
    $get_extion = explode('.',$request->image_url);
    $imge_name = time().'.'.$get_extion[1];

    file_put_contents($path.'/'.$imge_name, $image);
       try{
        $user_id= Auth::user()->id;
        image::insert(['image_url'=>$imge_name,'user_id'=>$user_id]);
        return response()->json(['error' =>'0','msg' => 'Image insert success']);
       }catch(Throwable $e){
        return response()->json(['error' => $e,'msg' => 'Image insert fail']);
       }    
    }else{
        
        return response()->json(['error' => '1','msg' => 'Invalid Image url']);
    }
}

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
