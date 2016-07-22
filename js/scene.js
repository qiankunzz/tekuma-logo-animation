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

  var largeBoxHTML = '<rect id="frame" x="0" y="0" class="st0" width="1000" height="1000"/>';
  var smallBoxHTML = '<rect x="'+ innerPoint1X +'" y="' + innerPoint1Y + '" class="st0" width="' + smallBoxWidth + '" height="' + smallBoxWidth + '"/>';
  var lineUpperLeft = '<line class="st0" x1="' + innerPoint1X + '" y1="' + innerPoint1Y + '" x2="0" y2="0"/>';
  var lineUpperRight = '<line class="st0" x1="' + innerPoint2X + '" y1="' + innerPoint2Y + '" x2="1000" y2="0"/>';
  var lineLowerRight = '<line class="st0" x1="' + innerPoint3X + '" y1="' + innerPoint3Y + '" x2="1000" y2="1000"/>';
  var lineLowerLeft = '<line class="st0" x1="' + innerPoint4X + '" y1="' + innerPoint3Y + '" x2="0" y2="1000"/>';
  // var testBoxHTML = '<rect id="smallbox" x="'+ vanishX +'" y="' + vanishY + '" class="st0" width="10" height="10"/>';

  var renderHTML = largeBoxHTML + lineUpperRight + lineUpperLeft + lineLowerRight + lineLowerLeft + smallBoxHTML;


if (sliderSmallBoxWidth >= 355) {
  $("#scene").show(1000);
  $("#list").fadeIn(1000);
  $("#drawing").hide();
} else {
  $("#drawing").html(renderHTML);
}

}

$(".slider").mousedown(function() {
  setInterval(function(){
    render();
  }, 36);
})


$("#art1").click(function(){
  $("#artwork").attr("xlink:href","assets/01.png");
  $("#artwork").fadeIn(1000);
})

$("#art2").click(function(){
  $("#artwork").attr("xlink:href","assets/02.png");
  $("#artwork").fadeIn(1000);
})

$("#art3").click(function(){
  $("#artwork").attr("xlink:href","assets/03.png");
  $("#artwork").fadeIn(1000);
})

$("#art4").click(function(){
  $("#artwork").attr("xlink:href","assets/04.png");
  $("#artwork").fadeIn(1000);
})

$("#art5").click(function(){
  $("#artwork").attr("xlink:href","assets/05.png");
  $("#artwork").fadeIn(1000);
})

$("#art8").click(function(){
  $("#artwork").attr("xlink:href","assets/08.png");
  $("#artwork").fadeIn(1000);
})

$("#art6").click(function(){
  $("#artwork").attr("xlink:href","assets/06.png");
  $("#artwork").fadeIn(1000);
})

$("#art7").click(function(){
  $("#artwork").attr("xlink:href","assets/07.png");
  $("#artwork").fadeIn(1000);
})

$("#scene").hide();
$("#smallbox-x").hide();
$("#smallbox-y").hide();
$("#list").hide();

$("#artwork").hide();

render();
