var d3 = require('d3');
var charts = {};

/**
 * Line Chart:
 * This will draw a line chart inside a given element.
 */
charts.line = function() {
  var width = 800,
      height = 600,
      margin = {top: 0, bottom: 0, left: 0, right: 0},
      xValue = function(d) { return d[0]; },
      yValue = function(d) { return d[1]; },
      xScale = d3.scale.linear(),
      yScale = d3.scale.linear(),
      xAxis = d3.svg.axis().scale(xScale).orient("bottom").tickSize(6, 0),
      yAxis = d3.svg.axis().scale(yScale).orient("left").tickSize(10, 0),
      line = d3.svg.line().x(X).y(Y).interpolate("basis");

  function chart(selection) {
    selection.each(function(data) {
      var w = width - margin.left - margin.right,
          h = height - margin.top - margin.bottom;      

      data = data.map(function(d, i) {
        return [xValue.call(data, d, i), yValue.call(data, d, i)];
      });

      xScale
          .domain(d3.extent(data, function(d) { return d[0]; }))
          .range([0, w]);

      yScale
          .domain(d3.extent(data, function(d) { return d[1]; }))
          .range([h, 0]);

      var svg = d3.select(this).selectAll('svg').data([data]);

      var gEnter = svg.enter().append("svg").append("g");

      gEnter.append("path").attr("class", "line");

      gEnter.append("g").attr("class", "x axis");

      svg.attr("width", width)
          .attr("height", height);

      var g = svg.select("g")
                .attr("transform", "translate(" + margin.left + "," + margin.right + ")");

      g.select(".line")
        .attr("d", line);

      g.select(".x.axis")
        .attr("transform", "translate(0, " + h + ")")
        .call(xAxis);

      g.select(".y.axis")
        .call(yAxis);
    });
  }

  function X(d) {
    return xScale(d[0]);
  }

  function Y(d) {
    return yScale(d[1]);
  }

  chart.width = function(_) {
    if(!arguments.length) return width;
    width = _;
    return chart;
  };

  chart.height = function(_) {
    if(!arguments.length) return height;
    height = _;
    return chart;
  };

  chart.margin = function(_) {
    if(!arguments.length) return margin;
    margin = _;
    return chart;
  };

  chart.x = function(_) {
    if (!arguments.length) return xValue;
    xValue = _;
    return chart;
  };

  chart.y = function(_) {
    if (!arguments.length) return yValue;
    yValue = _;
    return chart;
  };

  chart.xScale = function(_) { 
    if (!arguments.length) return xScale;
    xScale = _;
    return chart;
  };

  chart.yScale = function(_) {
    if(!arguments.length) return yScale;
    yScale = _;
    return chart;
  };

  chart.xAxis = function(_) {
    if (!arguments.length) return xAxis;
    xAxis = _;
    return chart;
  };

  chart.yAxis = function(_) {
    if (!arguments.length) return yAxis;
    yAxis = _;
    return chart;
  };

  chart.line = function(_) {
    if (!arguments.length) return line;
    line = _;
    return chart;
  };

  return chart;
};

/**
 * Bar Chart:
 * This will draw a bar chart inside a given element.
 */
charts.bar = function() {
  var width = 800,
      height = 600,
      margin = {top: 0, bottom: 0, left: 0, right: 0},
      xValue = function(d) { return d[0]; },
      yValue = function(d) { return d[1]; },
      xScale = d3.scale.ordinal(),
      yScale = d3.scale.linear(),
      xAxis = d3.svg.axis().scale(xScale).orient("bottom").tickSize(6, 0),
      yAxis = d3.svg.axis().scale(yScale).orient("left").tickSize(10, 0),
      line = d3.svg.line().x(X).y(Y).interpolate("basis");

  function chart(selection) {
    selection.each(function(data) {
      data = data.map(function(d, i) {
        return [xValue.call(data, d, i), yValue.call(data, d, i)];
      });
    });
  }

  function X(d) {
    return xScale(d[0]);
  }

  function Y(d) {
    return yScale(d[1]);
  }

  chart.width = function(_) {
    if(!arguments.length) return width;
    width = _;
    return chart;
  };

  chart.height = function(_) {
    if(!arguments.length) return height;
    height = _;
    return chart;
  };

  chart.margin = function(_) {
    if(!arguments.length) return margin;
    margin = _;
    return chart;
  };

  chart.x = function(_) {
    if (!arguments.length) return xValue;
    xValue = _;
    return chart;
  };

  chart.y = function(_) {
    if (!arguments.length) return yValue;
    yValue = _;
    return chart;
  };

  chart.xScale = function(_) { 
    if (!arguments.length) return xScale;
    xScale = _;
    return chart;
  };

  chart.yScale = function(_) {
    if(!arguments.length) return yScale;
    yScale = _;
    return chart;
  };

  chart.xAxis = function(_) {
    if (!arguments.length) return xAxis;
    xAxis = _;
    return chart;
  };

  chart.yAxis = function(_) {
    if (!arguments.length) return yAxis;
    yAxis = _;
    return chart;
  };

  chart.line = function(_) {
    if (!arguments.length) return line;
    line = _;
    return chart;
  };

  return chart;
};

/**
 * List Chart:
 * This will draw a list inside a given element.
 */
charts.list = function() {
  var width = 800,
      height = 600,
      margin = {top: 0, bottom: 0, left: 0, right: 0},
      xValue = function(d) { return d[0]; },
      yValue = function(d) { return d[1]; },
      xScale = d3.scale.ordinal(),
      yScale = d3.scale.linear(),
      xAxis = d3.svg.axis().scale(xScale).orient("bottom").tickSize(6, 0),
      yAxis = d3.svg.axis().scale(yScale).orient("left").tickSize(10, 0),
      line = d3.svg.line().x(X).y(Y).interpolate("basis");

  function chart(selection) {
    selection.each(function(data) {
      data = data.map(function(d, i) {
        return [xValue.call(data, d, i), yValue.call(data, d, i)];
      });
    });
  }

  function X(d) {
    return xScale(d[0]);
  }

  function Y(d) {
    return yScale(d[1]);
  }

  chart.width = function(_) {
    if(!arguments.length) return width;
    width = _;
    return chart;
  };

  chart.height = function(_) {
    if(!arguments.length) return height;
    height = _;
    return chart;
  };

  chart.margin = function(_) {
    if(!arguments.length) return margin;
    margin = _;
    return chart;
  };

  chart.x = function(_) {
    if (!arguments.length) return xValue;
    xValue = _;
    return chart;
  };

  chart.y = function(_) {
    if (!arguments.length) return yValue;
    yValue = _;
    return chart;
  };

  chart.xScale = function(_) { 
    if (!arguments.length) return xScale;
    xScale = _;
    return chart;
  };

  chart.yScale = function(_) {
    if(!arguments.length) return yScale;
    yScale = _;
    return chart;
  };

  chart.xAxis = function(_) {
    if (!arguments.length) return xAxis;
    xAxis = _;
    return chart;
  };

  chart.yAxis = function(_) {
    if (!arguments.length) return yAxis;
    yAxis = _;
    return chart;
  };

  chart.line = function(_) {
    if (!arguments.length) return line;
    line = _;
    return chart;
  };

  return chart;
};

module.exports = charts;