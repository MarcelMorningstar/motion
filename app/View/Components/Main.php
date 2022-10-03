<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Main extends Component
{
    /**
     * 
     *
     * @var string
     */
    public $position;
 
    /**
     * 
     *
     * @var string
     */
    public $color;
 
    /**
     * Create the component instance.
     *
     * @param  string  $position
     * @param  string  $color
     * @return void
     */

    public function __construct($position, $color)
    {
        $this -> position = $position;
        $this -> color = $color;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.main');
    }
}
