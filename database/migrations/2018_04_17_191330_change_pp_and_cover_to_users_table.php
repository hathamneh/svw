<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangePpAndCoverToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('volunteers', function (Blueprint $table) {
            $table->dropColumn(["cover_picture", "profile_picture"]);
        });
        Schema::table('organizations', function (Blueprint $table) {
            $table->dropColumn(["cover_picture", "profile_picture"]);
        });
        Schema::table('users', function (Blueprint $table) {
            $table->string('profile_picture');
            $table->string('cover_picture');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('volunteers', function (Blueprint $table) {
            //
        });
    }
}
