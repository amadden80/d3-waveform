

function sinWave(time_offset, frequency, srate, duration, amplitude, dc_offset){

  var data = new Array(srate * duration);
  var omega = frequency * 2 * Math.PI;
console.log(amplitude)
  for(var i=0; i<data.length; i++){
    data[i] = amplitude * (Math.sin(omega * (time_offset+(i/srate)))) + dc_offset;
  }
  return data;

}


function projectData(data){

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






var srate = 100;
var duration = 1;
var frequency = 2;
var amplitude = 200;
var dc_offset = 400;
var time_offset = 0;
var data;


setInterval(function(){
  
  data = sinWave(time_offset, frequency, srate, duration, amplitude, dc_offset)

  projectData(data);

  time_offset+=(1/srate)

}, 100);


