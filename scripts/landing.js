var animatePoints = function() {

    var points = document.getElementsByClassName('point');

    var revealFirstPoint = function() {
      points[2].style.opacity = 1;
      points[2].style.transform = "scaleX(1) translateX(-23)";
      points[2].style.msTransform = "scaleX(1) translateX(-23)";
      points[2].style.WebkitTransform = "scaleX(1) translateX(-23)";
    };

    var revealSecondPoint = function() {
      points[2].style.opacity = 1;
      points[2].style.transform = "scaleX(1) translateX(-23)";
      points[2].style.msTransform = "scaleX(1) translateX(-23)";
      points[2].style.WebkitTransform = "scaleX(1) translateX(-23)";
    };

    var revealThirdPoint = function() {
        points[2].style.opacity = 1;
        points[2].style.transform = "scaleX(1) translateX(-23)";
        points[2].style.msTransform = "scaleX(1) translateX(-23)";
        points[2].style.WebkitTransform = "scaleX(1) translateX(-23)";
    };

    revealFirstPoint();
    revealSecondPoint();
    revealThirdPoint();
};
