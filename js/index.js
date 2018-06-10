var firstDate = new Date();

var data = [
  {
    "time": new Date(2018, 4, 7, 15, 00, 00),
    "value": 3
  }, {
    "time": new Date(2018, 4, 14, 15, 00, 00),
    "value": 1
  }, {
    "time": new Date(2018, 4, 21, 15, 00, 00),
    "value": 4
  }, {
    "time": new Date(2018, 4, 28, 15, 00, 00),
    "value": 5
  }, {
    "time": new Date(2018, 4, 35, 15, 00, 00),
    "value": 7
  }, {
    "time": new Date(2018, 4, 42, 15, 00, 00),
    "value": 3
  }, {
    "time": new Date(2018, 4, 49, 15, 00, 00),
    "value": 7
  }, {
    "time": new Date(2018, 4, 56, 15, 00, 00),
    "value": 8
  }, {
    "time": new Date(2018, 4, 63, 15, 00, 00),
    "value": 9
  }, {
    "time": new Date(2018, 4, 70, 15, 00, 00),
    "value": 7 
  }];

var chart = AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "theme": "light",
  "fontFamily": "Open Sans",
	"fontSize": 12,
  "marginTop": 0,
  "marginRight": 10,
  "dataProvider": data,
  
  "valueAxes": [{
    "axisAlpha": 0,
    "position": "left",
    "guides": [{
      "value": 4,
      "lineAlpha": 1.0,
      "lineColor": "#f35266",
      "lineThickness": 2
    }, {
      "value": 6,
      "lineAlpha": 1.0,
      "lineColor": "#45d278",
      "lineThickness": 2
    }]
  }],
  "graphs": [{
    "id": "g1",
    
    "bullet": "round",
    "bulletSize": 10,
    "bulletColor": "white",
    "bulletAlpha": 1,
    
    "lineColor": "#45d278",
    "lineThickness": 10,
    "lineAlpha": 1.0,
    "negativeLineColor": "#fec93e",
    "negativeBase": 6,
    "negativeLineAlpha": 1,
    "type": "smoothedLine",
    "valueField": "value"
  }, {
    "id": "g2",
    
    // "bulletSize": 11,
    // "bullet": "square",
    
    "lineColor": "#f35266",
    "lineThickness": 10,
    "lineAlpha": 0,
    "negativeLineColor": "#f35266",
    "negativeBase": 4,
    "negativeLineAlpha": 1,
    "showBalloon": false,
    "type": "smoothedLine",
    "valueField": "value"
  }],
  "chartScrollbar": {
    "graph": "g1",
    "gridAlpha": 0,
    "color": "#888888",
    "scrollbarHeight": 50,
    "backgroundAlpha": 0,
    "selectedBackgroundAlpha": 0.1,
    "selectedBackgroundColor": "#888888",
    "graphFillAlpha": 0,
    "autoGridCount": true,
    "selectedGraphFillAlpha": 0.1,
    "graphLineAlpha": 0.2,
    "graphLineColor": "#c2c2c2",
    "selectedGraphLineColor": "#888888",
    "selectedGraphLineAlpha": 1
  },
  "chartCursor": {
    "categoryBalloonDateFormat": "MMM DD, JJ:NN",
    "cursorAlpha": 0,
    "valueLineEnabled": true,
    "valueLineBalloonEnabled": true,
    "valueLineAlpha": 0.5,
    "fullWidth": true
  },
  "dataDateFormat": "JJ, DD MMMM",
  "categoryField": "time",
  "categoryAxis": {
    "minPeriod": "hh",
    "parseDates": true,
    "minorGridAlpha": 0.1,
    "minorGridEnabled": true,
  }
});

chart.addListener("rendered", zoomChart);
if (chart.zoomChart) {
  chart.zoomChart();
}

function zoomChart() {
  chart.zoomToIndexes(Math.round(chart.dataProvider.length * 0.0), Math.round(chart.dataProvider.length * 0.6));
}