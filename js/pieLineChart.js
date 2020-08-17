var dom = document.getElementById("pieLineChartBox");
var myChart = echarts.init(dom);
var app = {};
option = null;

setTimeout(function () {

    option = {
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                ['A部门', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7,41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                ['B部门', 86.5, 41.1, 30.4, 65.1, 53.3, 83.8, 98.7,92.1, 85.7, 83.1, 73.4, 55.1],
                ['C部门', 24.1, 67.2, 41.1, 30.4, 65.1, 53.3, 83.8, 98.7,79.5, 86.4, 65.2, 82.5],
                ['D部门', 55.2, 67.1, 69.2, 41.1, 30.4, 65.1, 53.3, 83.8, 98.7,72.4, 53.9, 39.1],
                ['E部门', 86.5, 92.1, 85.7, 83.1, 41.1, 30.4, 65.1, 53.3, 83.8, 98.7,73.4, 55.1],
                ['F部门', 24.1, 67.2, 41.1, 30.4, 65.1, 53.3, 83.8, 98.7,79.5, 86.4, 65.2, 82.5],
                ['其他部门', 55.2, 67.1, 69.2, 72.4, 53.9, 41.1, 30.4, 65.1, 53.3, 83.8, 98.7,39.1]
            ]
        },
        xAxis: {type: 'category'},
        yAxis: [
            {
                type: 'value',
                name: ' 请求数（次）'
            }
        ],
        grid: {top: '55%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                label: {
                    formatter: '{b}: {@十二月} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '十二月',
                    tooltip: '十二月'
                }
            }
        ]
    };

    myChart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });

    myChart.setOption(option);

});;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}