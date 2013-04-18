/** Class: bll.LineView
 * Provides an Ember View containing a simple line chart.
 * Use contentBinding to bind it to an ArrayControllers content.
 */
bll.LineView = Ember.View.extend({
    chart: {},
    line: {},
    x: {},
    y: {},
    xAxis: {},
    yAxis: {},
    xAxisEl: {},

    /** Method updateChart() 
     * Listens for changes in the data and updates the line chart
     * along with the X and Y axis
     * Observes:
     *  - content.@each.value
     */
    updateChart: function updateChart() {
        var chart = this.get('chart');
        var data = this.get('content');
        var line = this.get('line');
        var x = this.get('x');
        var y = this.get('y');
        var xAxis = this.get('xAxis');
        var yAxis = this.get('yAxis');

        var xAxisEl = this.get('xAxisEl');

        x.domain([1, data.length]);

        y.domain(d3.extent(data, function(d) { return d.get('value'); }));

        xAxisEl.call(xAxis);

        //other method
        chart.select('.y.axis')
              .call(yAxis);


        chart.selectAll('path.line')
            .data(data)        
            .transition()
              .duration(500)
              .ease('sin')
              .attr('d', line(data));

    }.observes('data.@each.value'),

    /** Method: didInsertElement()
     * Creates the d3 SVG line chart with an X and Y Axis
     */
    didInsertElement: function didInsertElement() {
      var elementId = this.get('elementId');
      var data = this.get('data');

      var margin = this.get('margin');
      var w = this.get('width') - margin.right - margin.left;
      var h = this.get('height') - margin.top - margin.bottom;

      var x = d3.scale.linear()
                .range([0, w])
                .domain([1, data.length]);
      this.set('x', x);

      var y = d3.scale.linear()
                .range([h, 0])
                .domain(d3.extent(data), function(d) { return d.get('value'); });
      this.set('y', y);

      var xAxis = d3.svg.axis()
                      .scale(x)
                      .ticks(10)
                      .tickSize(-h)
                      .tickSubdivide(true);
      this.set('xAxis', xAxis);
      var yAxis = d3.svg.axis()
                      .scale(y)
                      .ticks(4)
                      .tickSize(-w)
                      .orient('left');
      this.set('yAxis', yAxis);

      var line = d3.svg.line()
                    .interpolate('monotone')
                    .x(function(d) { return x(d.get('timestamp')); })
                    .y(function(d) { return y(d.get('value')); });
      this.set('line', line);

      var xAxisEl = chart.append('svg:g')
                        .attr('class', 'x axis')
                        .attr('transform', 'translate(0, '+ h + ')')
                        .call(xAxis);
      this.set('xAxisEl', xAxisEl);

      //not set to showcase another methodology
      var yAxisEl = chart.append('svg:g')
                        .attr('class', 'y axis')
                        .call(yAxis);

      chart.append('svg:path')
            .attr('class', 'line')
            .attr('clip-path', 'url(#clip)')
            .attr('d', line(content));
      this.set('chart', chart);
    }
});
