function start(){

  var points = document.getElementsByClassName('point');

  function callback(val){
    console.log('this is num ' + val);
  }

  forEach(points, callback);
}
