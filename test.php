<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;


// INSERT INTO recepies(name, image, category, ingredients, directions, level, published) 
// values('Second', 'https://images.unsplash.com/photo-1545942504-645ff022a106?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=665&q=80', 1, 'ingridients', 'directions', 1, true);  

class CreateRecepiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recepies', function (Blueprint $table) {
            $table->increments('id');
            $table->char('name', 100);
            $table->integer('category');
            $table->text('ingredients');
            $table->text('directions');
            $table->text('image');
            $table->integer('level');
            $table->boolean('published');
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
        Schema::dropIfExists('recepies');
    }
}
