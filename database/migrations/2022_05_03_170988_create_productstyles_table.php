<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productstyles', function (Blueprint $table) {
            $table -> id('ID') -> unsigned();
            $table -> bigInteger('productID') -> unsigned();
            $table -> bigInteger('styleID') -> unsigned();
            $table -> foreign('productID') -> references('ID') -> on('products');
            $table -> foreign('styleID') -> references('ID') -> on('styles');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('productstyles');
    }
};
