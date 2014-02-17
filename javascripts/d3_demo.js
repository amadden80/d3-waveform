
  var data = [10, 20, 30, 40, 60, 45, 30, 40];

  var d3_body = d3.select("body");

  var bars = d3_body.selectAll(".bars")
      .data(data);

  bars.enter().append("div")
      .attr("width", function(data) { 
        return data +'px'
      })
      .attr("class", "bars");

  bars.text(function(d) { return d; });

  bars.exit().remove();





