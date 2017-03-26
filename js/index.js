var Ribbon = {
  ribbonWidth: 0,
  ribbonHeight: 0,
  init: function() {
    Ribbon.scale = Ribbon.getPixelRatio();
    Ribbon.canvas = Ribbon.getCanvas();
    this.resizeRibbon();

  },
  getCanvas: function() {
    return document.getElementById('bg');
  },
  getPixelRatio: function() {
    if (window.devicePixelRatio) return window.devicePixelRatio;
    if (window.matchMedia && window.matchMedia("(-moz-device-pixel-ratio: 2.0)").matches) return 2;
  },
  resizeRibbon: function() {
    768 > window.innerWidth ? (this.ribbonWidth = 60,
    this.ribbonHeight = 40) : (this.ribbonWidth = 136,
    this.ribbonHeight = 60);
    var wHeight = window.innerHeight;
    var wWidth = window.innerWidth;
    this.canvas.width = wWidth * this.scale;
    this.canvas.height = wHeight * this.scale;
    this.canvas.style.width = wWidth + 'px';
    this.canvas.style.height = wHeight + this.ribbonHeight + 'px';
  }
};

Ribbon.init();
// this.resizeRibbon = function() {
//     this.ribbon && (this.ribbon.setWidth(this.ribbonWidth, this.ribbonHeight),
//     this.ribbon.straighten(),
//     this.ribbon.resetSize())
// }

function draw() {
  var ctx = document.getElementById('bg').getContext('2d');
  for (var i=0;i<6;i++){
    for (var j=0;j<6;j++){
      ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' +
                       Math.floor(255-42.5*j) + ',0)';
      ctx.fillRect(j*25,i*25,25,25);
    }
  }
}
draw()
