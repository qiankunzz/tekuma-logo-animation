<<<<<<< HEAD
var diaUl = $("#dia-ul");
var diaUr = $("#dia-ur");
var diaLl = $("#dia-ll");
var diaLr = $("#dia-lr");

var smallBox = $("#smallbox");
var ptUlX = smallBox.attr("x");
var ptUlY = smallBox.attr("y");

var renderHTML;

=======
>>>>>>> gh-pages
function render() {
  var sliderSmallBoxX = $("#smallbox-x").val();
  var sliderSmallBoxY = $("#smallbox-y").val();
  var sliderSmallBoxWidth = $("#smallbox-width").val();

  var midPointX = 500 + parseInt(sliderSmallBoxX);
  var midPointY = 500 + parseInt(sliderSmallBoxY);
  var smallBoxWidth = 360 + parseInt(sliderSmallBoxWidth);

  var p1X = midPointX - 180;
  var p1Y = midPointY - 180;
  var vanishX = (980*p1X - 3600)/620;
  var vanishY = (980*p1Y - 3600)/620;

  var innerPoint1X = vanishX - (vanishX-10)*smallBoxWidth/980;
  var innerPoint1Y = vanishY - (vanishY-10)*smallBoxWidth/980;
  var innerPoint2X = innerPoint1X + smallBoxWidth;
  var innerPoint2Y = innerPoint1Y;
  var innerPoint3X = innerPoint2X;
  var innerPoint3Y = innerPoint1Y + smallBoxWidth;
  var innerPoint4X = innerPoint1X;
  var innerPoint4Y = innerPoint3Y;

<<<<<<< HEAD
  var largeBoxHTML = '<rect id="largebox" x="10" y="10" class="st0" width="980" height="980"/>';
  var smallBoxHTML = '<rect id="smallbox" x="'+ innerPoint1X +'" y="' + innerPoint1Y + '" class="st0" width="' + smallBoxWidth + '" height="' + smallBoxWidth + '"/>';
  var lineUpperLeft = '<line id="dia-ul" class="st0" x1="' + innerPoint1X + '" y1="' + innerPoint1Y + '" x2="10" y2="10"/>';
  var lineUpperRight = '<line id="dia-ur" class="st0" x1="' + innerPoint2X + '" y1="' + innerPoint2Y + '" x2="990" y2="10"/>';
  var lineLowerRight = '<line id="dia-ll" class="st0" x1="' + innerPoint3X + '" y1="' + innerPoint3Y + '" x2="990" y2="990"/>';
  var lineLowerLeft = '<line id="dia-lr" class="st0" x1="' + innerPoint4X + '" y1="' + innerPoint3Y + '" x2="10" y2="990"/>';
=======
  var largeBoxHTML = '<rect x="10" y="10" class="st0" width="980" height="980"/>';
  var smallBoxHTML = '<rect x="'+ innerPoint1X +'" y="' + innerPoint1Y + '" class="st0" width="' + smallBoxWidth + '" height="' + smallBoxWidth + '"/>';
  var lineUpperLeft = '<line class="st0" x1="' + innerPoint1X + '" y1="' + innerPoint1Y + '" x2="10" y2="10"/>';
  var lineUpperRight = '<line class="st0" x1="' + innerPoint2X + '" y1="' + innerPoint2Y + '" x2="990" y2="10"/>';
  var lineLowerRight = '<line class="st0" x1="' + innerPoint3X + '" y1="' + innerPoint3Y + '" x2="990" y2="990"/>';
  var lineLowerLeft = '<line class="st0" x1="' + innerPoint4X + '" y1="' + innerPoint3Y + '" x2="10" y2="990"/>';
>>>>>>> gh-pages
  // var testBoxHTML = '<rect id="smallbox" x="'+ vanishX +'" y="' + vanishY + '" class="st0" width="10" height="10"/>';

  var renderHTML = largeBoxHTML + lineUpperRight + lineUpperLeft + lineLowerRight + lineLowerLeft + smallBoxHTML;

  $("#drawing").html(renderHTML);
}

$(".slider").mousedown(function() {
  setInterval(function(){
    render();
  }, 36);
})

render();
