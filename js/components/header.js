'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<span>Gas Finder</span>");
  const left = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');

  header.append(title);
  if(state.selectedStation){
    header.prepend(left);
    left.on('click',(e) => {
      state.selectedStation = null;
      update();
    });
  };
  return header;
}
