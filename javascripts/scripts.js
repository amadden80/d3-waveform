


function newData(srate, freq, duration){

  d3.select("#container").selectAll(".bars").remove();

  var data = new Array(srate * duration);
  for(var i=0; i<data.length; i++){
    data[i] = 200*(Math.sin(freq * 2 * Math.PI * i/srate) + 2);
  }
  return data;

}


function updateData(data){

  var d3_body = d3.select("#container");

  var bars = d3_body.selectAll(".bars")
      .data(data);

  bars.enter().append("div")
      .attr("class", "bars")
      .style("width",  Math.floor((1/data.length)*100) + '%')  
      .text('.')

  bars
    .transition()
      .style("height", function(data_point) { 
          return data_point +'px'
        })
      .duration(110)
      .ease('sin')

  bars.exit().remove();
};



var data;
$(function(){

  var srate = 50;
  var duration = 1;
  var freq = 2;

  data = newData(srate, freq, duration);

  setInterval(function(){
    data.unshift(data.pop())
    updateData(data);
  }, 100);

})

