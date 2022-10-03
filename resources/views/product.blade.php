<x-main position="static" color="var(--color-1)">
  <h1>{{$product -> name}}</h1>
  
  @foreach ($product -> images as $images)
    <img src="../images/{{$images -> image}}" alt="">
  @endforeach
</x-main>