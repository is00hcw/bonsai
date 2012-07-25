/**
 * Animated attributes
 */
var rectPath = bonsai.Path.rect(50, 50, 100, 100).attr({fillColor: 'red', lineColor: 'green', lineWidth: 5});

stage.addChild(rectPath);

rectPath.animate(
  '3s',
{
  x: 300,
  y: 300,
  opacity: 0
}, {
  easing: 'linear'
});
