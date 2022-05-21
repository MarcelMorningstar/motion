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
        Schema::create('products', function (Blueprint $table) {
            $table -> id('ID') -> unsigned();
            $table -> string('name', 32) -> unique();
            $table -> enum('gender', ['men', 'women','unisex']);
            $table -> decimal('price', 5, 2);
            $table -> bigInteger('categoryID') -> unsigned();
            $table -> bigInteger('materialID') -> unsigned();
            $table -> foreign('categoryID') -> references('ID') -> on('categories');
            $table -> foreign('materialID') -> references('ID') -> on('materials');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
