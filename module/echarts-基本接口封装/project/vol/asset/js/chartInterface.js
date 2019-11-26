/**
 * 创建柱状图(基本接口)
 * @param container      用来绘制柱状图的 DIV-ID 值
 * @param columnData     柱状图数据结构
 *                        categories: ['c1', 'c2', ..., 'Cn']
 *                        series: [
 *                          { name: 'var1', data: [d11, d12, ..., d1n]},
 *                          { name: 'var2', data: [d21, d22, ..., d2n]},
 *                          ...,
 *                          { name: 'varN', data: [dn1, dn2, ..., dnn]}
 *                        ]
 * @param columnConfig    柱状图全局配置
 *                        title:  图表标题
 * @returns
 */
function buildColumnChart(container, columnData, columnConfig) {
    var formatter = function () {   // 当鼠标悬停图表上时, 格式化提示信息
        return null;
    };

    var chartObj = getCommonColumnObj(formatter);
    chartObj.title.text = columnConfig.title;
    chartObj.xAxis.categories = columnConfig.categories;
    chartObj.series = columnConfig.series;
    var columnDataNum = (columnData.series == null ? 0 : columnData.series.length);
    for (var i = 0; i < columnDataNum; i++) {
        chartObj.series[i].type = 'column';
    }

    var chart = $('#'+container);
    chart.highcharts(chartObj);
}

function getCommonColumnObj(formatterFun) {
    var commonChartObj = {
        chart: {
            type: 'column',
            zoomType: 'x',
            events: {
                click: null
            },
            resetZoomButton: {
                position: {
                    x: -10,
                    y: 10
                },
                relativeTo: 'chart'
            }
        },

        title: {
            // 动态显示图表标题
            text: '',
            align: 'center',
            style: {
                fontSize: '12px',
                margin: '3px'
            }
        },

        legend: {   //图例样式设置
            x: 0,
            verticalAlign: 'top',
            y: -12,
            backgroundColor: ''
        },

        tooltip: {
            crosshairs: true,
            useHTML: true,
            shared: true,
            formatter: formatterFun
        },

        credits: {
            enabled: false,     //不显示LOGO链接
            text: ''
        },

        plotOptions: {
            series: {
                // 去掉点的marker, 使图形更美观
                marker: {
                    enabled: false,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                },
                turboThreshold: 0,
                events: {
                    click: null
                }
            },
            line: {
                lineWidth: 1.5
            }
        },

        xAxis: {

        },

        yAxis: {
            title: {
                text: ''
            },
            min: 0
        },

        series: []
    };
    return commonChartObj ;
}

/**
 * 创建饼图(基本接口)
 * @param container      用来绘制饼图的 DIV-ID 值
 * @param pieData        饼图数据结构
 *                        series: [
 *                          { name: 'var1', y: n1},
 *                          { name: 'var2', y: n2},
 *                          ...,
 *                          { name: 'varN', y: nN}
 *                        ]
 * @param pieConfig       饼图全局配置
 *                        title:  图表标题
 * @returns
 */

function buildPieChart(container, pieData, pieConfig) {
    var formatter = function () {   // 当鼠标悬停图表上时, 格式化提示信息
        return '<b>' + this.series.name + '</b>' + '：'+
            Highcharts.numberFormat(this.y, 0, ',') +' 次（'
            + Highcharts.numberFormat(this.percentage, 1) +'% ）'
            ;
    };

    var chartObj = getCommonPieObj(formatter);
    chartObj.title.text = pieConfig.title;
    chartObj.series[0].name = pieConfig.formatterText;
    chartObj.series[0].data = pieData.series;

    var chart = $('#'+container);
    chart.highcharts(chartObj);
}
function getCommonPieObj(formatterFun) {
    var commonChartObj = {
        chart: {
            type: 'pie',
            events: {
                click: null
            }
        },

        title: {
            text: ''
        },

        credits: {
            enabled: false     //不显示LOGO链接
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            formatter: formatterFun
        },

        colors:[
            '#a5b8e0', '#8cdef3', '#e1bfa6', '#77be7c',
            '#dda778', '#e3a6ec','#93e4a9',
            '#d9ec93', '#F4E001', '#F0805A', '#26C0C0','#dcbbea'
        ],

        plotOptions: {

        },

        series: [{
            type: 'pie',
            innerSize: '60%',
            center: ['50%', '50%'],
            name: '',
            data: []
        }]
    };
    return commonChartObj ;
}

/**
 * 创建饼图(针对对象数组的高层接口)
 * @param container  用来绘制柱状图的 DIV-ID 值
 * @param pieData     对象数组
 *                       不同数据结构的后台数据
 * @param pieConfig   柱状图全局配置
 *                       title: 图表标题
 *                       formatterText：提示数据名
 *                       cityField: 用于标准数据对象键
 *                       valueField: 用于标准数据对象键
 * @returns
 */
function buildPieChartUpper(container, pieData, pieConfig) {
    var cityField = pieConfig.cityField;
    var valueField = pieConfig.valueField;
    var dataModel = pieDataModel_1(pieData.series, cityField, valueField);
    var data = {};
    data.series = dataModel;
    buildPieChart(container, data, pieConfig);
}

/*
* 提取出如下标准格式
* eg：[{name:'item1',y:'item2'}...]
* */
var pieDataModel_1 = function (data, item1, item2) {
    var receiver =[];
    var dataNum = (data == null ? 0 : data[item1].length);
    for(var i = 0; i < dataNum; i++){
        var item = {};
        item.name = data[item1][i];
        item.y = data[item2][i];
        receiver.push(item);
    }
    return receiver;
};
