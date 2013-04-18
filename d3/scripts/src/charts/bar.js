/**
 * Bar Chart:
 * This will draw a bar chart inside a given element.
 */
exports = function() {
  var width = 800,
      height = 600,
      margin = {top: 0, bottom: 0, left: 0, right: 0};

  function chart() {
    console.log(data);
  }

  chart.width = function(_) {
    if(!arguments.length) return width;
    width = _;
    return this;
  };

  chart.height = function(_) {
    if(!arguments.length) return height;
    height = _;
    return this;
  };

  chart.margin = function(_) {
    if(!arguments.length) return margin;
    margin = _;
    return this;
  };

  return chart;
}