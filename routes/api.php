<?php

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'API\BACKEND\AUTH\AuthController@login');
    Route::post('logout', 'API\BACKEND\AUTH\AuthController@logout');
    Route::post('refresh', 'API\BACKEND\AUTH\AuthController@refresh');
    Route::post('me', 'API\BACKEND\AUTH\AuthController@me');

});
Route::group([
    'middleware' => 'jwt.auth',
], function ($router) {
    Route::apiResources(
        [
            'role' => 'API\BACKEND\ADMIN\RoleController'
        ]
    );
    Route::apiResources(

        [
            'permission' => 'API\BACKEND\ADMIN\PermissionController'
        ]
    );
    Route::apiResources(

        [
            'users' => 'API\BACKEND\ADMIN\UsersController'
        ]
    );
    Route::apiResources(
        [
            'img' => 'API\BACKEND\IMG\ImgController'
        ]
    );
    Route::get('/all_users_roles', 'API\BACKEND\ADMIN\AssignRoleModel@allUsersAndRoles');
    Route::get('/get_roles/{id}', 'API\BACKEND\ADMIN\AssignRoleModel@getRoleById');
    Route::post('/assign_role_to_user', 'API\BACKEND\ADMIN\AssignRoleModel@assignModelRole');

    Route::get('/all_users_permissions', 'API\BACKEND\ADMIN\AssignPermissionModel@allUsersAndPermissions');
    Route::get('/get_permission_model/{id}', 'API\BACKEND\ADMIN\AssignPermissionModel@getPermissionModel');
    Route::post('/assign_permission_to_user', 'API\BACKEND\ADMIN\AssignPermissionModel@assignPermissionToModel');

    Route::post('/get_permission_for_roles', 'API\BACKEND\ADMIN\AssignPermissionModel@getPermissionsByRole');
    Route::post('/permissions_by_users', 'API\BACKEND\ADMIN\AssignPermissionModel@getPermissionsByUser');
    Route::post('/change_password', 'API\BACKEND\ADMIN\UsersController@changePassword');

    Route::get('/user_details/{user_id}', 'API\BACKEND\ADMIN\UsersController@userDetails');
    Route::post('/users_update', 'API\BACKEND\ADMIN\UsersController@update');

    Route::get('/home_lang_data', 'API\BACKEND\ADMIN\LanguageController@homeLangData');
});
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
// Authentication Route
// Route::group(['middleware'=>'MyMiddleWire'],function(){

		// Route::post('/permission_check', 'API\PermissionController@check');

	// });
