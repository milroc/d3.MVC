var charts = require('./charts/charts.js');
var d3 = require('d3');
var queue = require('queue-async');

function ready(error, results) {
  var names = results[0],
      data = results[1];
  console.log(names, data);
  data = sinAndCos();

  var bar = charts.bar();

  var line = charts.line()
                    .x(function(d) { return d.x; })
                    .y(function(d) { return d.y; });

  var list = charts.list();

  d3.selectAll('#bar')
      .data(names)
      .call(bar);

  d3.select("#line")
      .datum(data)
      .call(line);

  d3.select("#list")
      .data(data)
      .call(list);
}

function requestJSON(url, callback) {
  var req = new XMLHttpRequest;
  req.open("GET", url, true);
  req.setRequestHeader("Accept", "application/json");
  req.onreadystatechange = function() {
    if (req.readyState === 4) {
      if (req.status < 300) callback(null, JSON.parse(req.responseText));
      else callback(req.status);
    }
  };
  req.send(null);
}

function requestCSV(url, callback) {
  var req = new XMLHttpRequest;
  req.open("GET", url, true);
  req.setRequestHeader("Accept", "application/json");
  req.onreadystatechange = function() {
    if (req.readyState === 4) {
      if (req.status < 300) callback(null, d3.csv.parse(req.responseText));
      else callback(req.status);
    }
  };
  req.send(null);
}

function sinAndCos() {
  var sin = [],
      cos = [];

  for (var i = 0; i < 100; i++) {
    sin.push({x: i, y: Math.sin(i/10) }); //the nulls are to show how defined works
    cos.push({x: i, y: .5 * Math.cos(i/10)});
  }

  return sin;
}

var q = queue(2)
          .defer(requestCSV, 'data/test.csv')
          .defer(requestJSON, 'data/data.json')
          .awaitAll(ready);

