<style>
    header > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 100vw;
        height: 300px;
        object-fit: cover;
        background-color: #f8f8f8;
    }

    header > div div h1 {
        margin: 0 0 32px 0;
        font-size: 30px;
        font-weight: 400;
        letter-spacing: .5em;
        text-transform: uppercase;
    }

    header > div div h2 {
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 3px;
        text-transform: uppercase;
    }

    header > div div h3 {
        margin: 0 0 32px 0;
        font-size: 11px;
        font-weight: 400;
        letter-spacing: .4em;
        text-transform: uppercase;
    }

    header > div div a {
        font-size: 11px;
        font-weight: 400;
        color: black;
        text-decoration: none;
    }
</style>
<header>
    <div>
        <div>
            <h1>{{$title}}</h1>
            <h2>{{$messege}}</h2>
        </div>
        <div>
            <h3><a href="/">HOME</a> / {{$title}}</h3>
        </div>
    </div>
</header>