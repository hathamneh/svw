<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrganizationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organizations', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->nullable();
            $table->string("name");
            $table->string("city")->nullable();
            $table->string("country")->nullable();
            $table->string("address")->nullable();
            $table->string("about")->nullable();
            $table->string("profile_picture")->nullable();
            $table->string("cover_picture")->nullable();
            $table->string("website")->nullable();
            $table->timestamp("founded_date")->nullable();
            $table->string("category")->nullable();
            $table->string("specialities")->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('organizations');
    }
}
