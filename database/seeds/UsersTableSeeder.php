<?php
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\ADMIN\User;
use App\Models\ADMIN\users_details;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user_array=array(
            [
                'name' => 'Jacos Super Admin',
                'email' => 'super_admin@jacos.co.jp',
                'password' => bcrypt('Qe75ymSr')
            ],
            [
                'name' => 'Jacos Admin',
                'email' => 'admin@jacos.co.jp',
                'password' => bcrypt('Qe75ymSr')
            ],
            [
                'name' => 'Jacos User',
                'email' => 'user@jacos.co.jp',
                'password' => bcrypt('Qe75ymSr')
            ]
        );


        $user_details_array=array(
            ['user_id'=>1],
            ['user_id'=>2],
            ['user_id'=>3],
        );
        User::insert($user_array);
        users_details::insert($user_details_array);

    }
}
