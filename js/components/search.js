'use strict';

const StationItems = (station,update) => {
  const divstation = $('<div class="statio"></div>');
  const h3 = $('<h3>'+station.name+'</h3>');
  const p = $('<p>'+station.address+'</p>');
  const distrito= $('<span>'+station.district+'</span>');
  const a = $('<a class="linkMap"></a>');
  const map = $('<i class = "fa fa-map"></i>');
  divstation.append(h3,p,distrito,a);
  a.append(map);

  a.click((e)=>{
    e.preventDefault();
    state.selectedStation = station;
    console.log(state.selectedStation);
    update();
  });
  return divstation;
}

const Station = (update) => {
  const parent = $("<div class='white-card'></div>");
  const div = $('<div class="inner-addon left-addon"><i class="fa fa-search"></i></div>');
  const input = $('<input id="input-item" type="text" class="form-control" placeholder="Ingresa tu distrito a buscar"/>');
  const hr = $("<hr>");
  const list = $("<div class='list'></div>");
  parent.append(div,hr,list);
  div.append(input);
  reRender(list,state.stations,update);
  input.on('keyup',(e) => {
      const filtersDistricts = filterByDistrict(state.stations,input.val());
      reRender(list,filtersDistricts,update);
  });
  return parent;
}

const reRender = (stationList,filtersDistricts,update)=>{
  stationList.empty();
  // state.stations.forEach(station, _ =>{reRender(stationList)});
  filtersDistricts.forEach((stations)=>{
    stationList.append(StationItems(stations, update));
  });
}
