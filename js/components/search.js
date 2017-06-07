'use strict';

const StationItems = (station,update) => {
  const divstation = $('<div class="statio"></div>');
  const h3 = $('<h3>'+station.name+'</h3>');
  const p = $('<p>'+station.address+'</p>');
  const distrito= $('<span>'+station.district+'</span>');
  const a = $('<a class="linkMap"></a>');
  const map = $('<i class = "fa fa-map"></i>');
  a.append(map);
  divstation.append(h3);
  divstation.append(p);
  divstation.append(distrito);
  divstation.append(a);

  a.on('click',(e)=>{
    e.preventDefault();
    state.selectedStation = station;
    console.log(state.selectedStation);
    update();
  });
  return divstation;
}

const Station = (update) => {
  const parent = $("<div class='white-card'></div>");
  const input = $("<input id='input-item' type='text' placeholder='District'>");
  const hr = $("<hr>");
  const list = $("<div class='list'></div>");

  parent.append(input);
  parent.append(hr);
  parent.append(list);

  input.on('keyup',(e) => {

      const filtersDistricts = filterByDistrict(state.stations,input.val());
      reRender(list,filtersDistricts);
  });

  return parent;
}

const reRender = (stationList,filtersDistricts)=>{
  stationList.empty();
  // state.stations.forEach(station, _ =>{reRender(stationList)});
  filtersDistricts.forEach((stations)=>{
    stationList.append(StationItems(stations, _ => {reRender(stationList,filtersDistricts)}));
  });
}
