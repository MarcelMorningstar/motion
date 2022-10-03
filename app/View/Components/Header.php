<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Header extends Component
{
    public $title;
    public $messege;

    public function __construct($title, $messege)
    {
        $this -> title = $title;
        $this -> messege = $messege;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.header');
    }
}
