'use strict';
const init = (divmap) =>{
  let map = new GMaps({
    div: divmap,
    lat: state.selectedStation.lat,
    lng: state.selectedStation.long
  });

  map.addMarker({
    lat: state.selectedStation.lat,
    lng: state.selectedStation.long,
    zoom: 13
    title: state.selectedStation.name,
  });
}

const Gmap = ()=>{
  const mapa = $("<div id='map'></div>");
  mapa.init = init.bind(null,mapa.get(0));

  return mapa;
};
