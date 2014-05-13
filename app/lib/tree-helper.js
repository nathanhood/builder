'use strict';

function getClass(height){
  if(height === 0){
    return 'seed';
  }

  if(height <= 12){
    return 'sapling';
  }

  if(height <= 48){
    return 'adolescent';
  }

  return 'adult';
}

exports.getClass = getClass;//exporting the function. You could write this with the 'exports.getClass =' at beginning of function
