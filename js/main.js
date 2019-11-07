var slider = {
  slides: ["img/1.jpg", "img/2.jpg", "img/3.jpg"],
  frame: 0,
  set: function(image) {
    document.getElementById("scr").style.backgroundImage = "url(" + image + ")";
  },
  init: function() {
    this.set(this.slides[this.frame]);
  },
  left: function() {
    this.frame--;
    if (this.frame < 0) this.frame = this.slides.length - 1;
    this.set(this.slides[this.frame]);
  },
  right: function() {
    this.frame++;
    if (this.frame == this.slides.length) this.frame = 0;
    this.set(this.slides[this.frame]);
  }
};

window.onload = function() {
  slider.init();
  setInterval(function() {
    slider.right();
  }, 5000);
};
