'use strict';
const StationDetails = (update) => {
  const container = $('<div class="stationDetails"></div>');
  const title = $('<h2>'+state.selectedStation.name+'</h2>');
  const address = $('<h2>'+state.selectedStation.address+'</h2>');
  const listGas= $('<div class="listGas"></div>');

  const products = state.selectedStation.products;

  products.forEach((product) =>{
    const eachProduct = $('<span class="product">'+product+'</span>');
    listGas.append(eachProduct);
  });

  container.append(title);
  container.append(address);
  container.append(listGas);

  return container;
}
