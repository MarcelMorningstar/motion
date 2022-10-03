<x-main position="absolute" color="var(--color-3)">
  <style>
    header {
      position: relative;
      height: 100vh;
      background-image: url("images/welcome.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    header div {
      position: absolute;
      top: 36%;
    }

    header div h1 {
      display: table;
      padding-left: 300px;
      padding-right: 16px;
      color: var(--color-3);
      font-size: 81px;
    }

    header div h1:first-child {
      background-color: var(--color-4);
    }
  </style>

  <header>
    <div>
      <h1>RIDE</h1>
      <h1>IN STYLE.</h1>
    </div>
  </header>
</x-main>