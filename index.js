

var width = 5
setInterval(function() {
  width = width + 5
  get("#logo").css({width:width})
}, 1000)
