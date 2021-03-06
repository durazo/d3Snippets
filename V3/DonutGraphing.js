var dounutGraph = function (args){
    
    //  data.name will be the name 
    //  data.value will be the value

    var containerId,
        data = [],
        width = 960,
        height = 500,
        radius = Math.min(width, height) / 2;
    
    if (args !== undefined) {
        for (var key in args) {
            switch (key) {
                case 'containerId':
                    _containerId = args[key];
                    break;
            }
        }
    }

        
    var width = 960,
    height = 500,
    radius = Math.min(width, height) / 2;

    var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    var arc = d3.svg.arc()
                .outerRadius(radius - 10)
                .innerRadius(radius - 70);

    var pie = d3.layout.pie()
                .sort(null)
                .value(function(d) { return d.value; });

    var svg = d3.select(containerId).append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // d3.csv("data.csv", type, function(error, data) {
    // if (error) throw error;

    // var g = svg.selectAll(".arc")
    //   .data(pie(data))
    // .enter().append("g")
    //   .attr("class", "arc");

    // g.append("path")
    //   .attr("d", arc)
    //   .style("fill", function(d) { return color(d.data.name); });

    // g.append("text")
    //   .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
    //   .attr("dy", ".35em")
    //   .text(function(d) { return d.data.name; });
    // });

}