<x-main position="static" color="var(--color-1)">
    <style>
        #dealers-container {
            display: flex;
        }

        #map {
            width: 100%;
            height: calc(100vh - 80px);
        }
    </style>

    <div id="dealers-container">
        <section id="dealers" data-dealers="{{$dealers}}" data-countries="{{$countries}}"></section>
        <div id="map"></div>
        <div id="markers"></div>
        <script>
            const red_icon =  'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
            let locations = [
                @foreach ($dealers as $dealer)
                    [{{ $dealer -> ID }}, {{ $dealer -> lat }}, {{ $dealer -> lng }}],
                @endforeach
            ];
            
            console.log(locations);
            
            var infoWindowContent = [
                    @foreach ($dealers as $dealer)
                        ['<div class="info_content">' +
                        '<h3>{{ $dealer -> name }}</h3>' +
                        '<p></p>' + '</div>'],
                    @endforeach
            ];

            function initMap() {
                const myOptions = {
                    zoom: 3,
                    center: new google.maps.LatLng(21.7, 0),
                    mapTypeId: 'roadmap',
                    mapTypeControl: false,
                    streetViewControl: false,
                };

                const map = new google.maps.Map(document.getElementById('map'), myOptions);
                
                let infoWindow = new google.maps.InfoWindow(), marker, i;

                for (i = 0; i < locations.length; i++) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map: map,
                        icon : red_icon,
                        html: document.getElementById('markers')
                    });
                    
                    google.maps.event.addListener(marker, 'click', (function(marker, i) {
                            return function() {
                                infoWindow.setContent(infoWindowContent[i][0]);
                                infoWindow.open(map, marker);
                            }
                    })(marker, i));
                }
            }
        </script>
    </div>

    <script async defer src="https://maps.googleapis.com/maps/api/js?language=en&key={{ env('MAPS_API_KEY') }}&callback=initMap"></script>
</x-main>