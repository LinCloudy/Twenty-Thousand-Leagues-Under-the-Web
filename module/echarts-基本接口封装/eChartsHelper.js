/**
 * @author Lin
 * @date 2019/11/14 16:15
 */

/**
 * 创建柱状图(基本接口)
 * @param container      用来绘制柱状图的 DIV-ID 值
 * @param barData     柱状图数据结构
 *                        categories: ['c1', 'c2', ..., 'Cn']
 *                        series: [
 *                          { name: 'var1', data: [d11, d12, ..., d1n]},
 *                          { name: 'var2', data: [d21, d22, ..., d2n]},
 *                          ...,
 *                          { name: 'varN', data: [dn1, dn2, ..., dnn]}
 *                        ]
 * @param barConfig    柱状图全局配置
 *
 * @returns
 */
function buildBarChart(container, barData, barConfig) {
    var formatter = function () {   // 当鼠标悬停图表上时, 格式化提示信息
        return null;
    };

    var chartObj = getCommonBarObj(formatter);
    chartObj.title.text = barConfig.title.text;
    chartObj.xAxis.data = barConfig.xAxis.data;
    chartObj.legend.data = barConfig.legend.data;
    chartObj.series[0].data = barData.series[0].data;
    chartObj.series[1].data = barData.series[1].data;
    chartObj.series[0].name = barData.series[0].name;
    chartObj.series[1].name = barData.series[1].name;
    var barDataNum = (barData.series == null ? 0 : barData.series.length);
    for (var i = 0; i < barDataNum; i++) {
        chartObj.series[i].type = 'bar';
    }

    var chart = echarts.init(document.getElementById(container));
    chart.setOption(chartObj);
}

function getCommonBarObj(formatterFun) {
    var commonChartObj = {
        title: {
            text: '',
            textStyle: {
                //设置主标题字体颜色
                color: "#90E5E7"
            },
            subtext: ""     //副标题
        },
        backgroundColor: "",
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}"
        },
        grid:{
            top:60,
            right:70,
            bottom:30,
            left:60
        },
        legend: {
            top:32,
            left:'center',
            textStyle:{     //字体样式
                fontSize:"8px",
                color:"#a7aab3",
                align:"center"
            },
            data:[]
        },
        calculable : true,
        xAxis : {
            type : 'category',
            axisLabel:{
                show:true,
                textStyle:{     //x轴字体样式
                    fontSize:"8px",
                    color:"#a7aab3",
                    align:"center"
                },
                formatter:function(e){
                    return e;
                },
                margin: 12,//刻度标签与轴线之间的距离
            },
            axisLine: {
                show: false,     //x轴
                lineStyle:{
                    color:"#a7aab3"     //x轴颜色
                }
            },
            axisTick:{          //x轴小刻度线
                show: false,
            },
            data : []
        },
        yAxis : [
            {
                type: 'value',
                name:"",    //Y轴含义以及单位
                nameLocation:"center",
                nameGap:35,
                nameRotate:0,
                nameTextStyle:{
                    fontSize: 16,
                },
                //interval: 5000,
                axisLine: {
                    show: false,     //y轴
                },
                axisTick: {
                    show: false     //刻度线
                },
                splitLine: {
                    show: true      //网格线
                },
                axisLabel : {   //调整左侧Y轴刻度， 直接按对应数据显示
                    show:true,
                    textStyle:{
                        color:"#a7aab3"//y轴的数字颜色
                    },
                    showMinLabel:true,
                    showMaxLabel:true,
                    formatter: function(value,index){
                        var value;
                        if (value >= 10000) {
                            value = value/10000+'k';
                        }else if(value < 10000){
                            value = value;
                        }
                        return value
                    }
                }
            },
            {
                type: 'value',
                name:"",    //Y轴含义以及单位
                nameLocation:"center",
                nameGap:50,
                nameRotate:0,
                nameTextStyle:{
                    fontSize: 16,
                },
                //interval: 500000,
                axisLine: {
                    show: false     //y轴
                },
                axisTick: {
                    show: false     //刻度线
                },
                splitLine: {
                    show: true      //网格线
                },
                axisLabel : {   //调整左侧Y轴刻度， 直接按对应数据显示
                    show:true,
                    textStyle:{
                        color:"#a7aab3"//x轴，y轴的数字颜色
                    },
                    showMinLabel:true,
                    showMaxLabel:true,
                    formatter: function(value,index){
                        var value;
                        if (value >= 10000) {
                            value = value/10000+'k';
                        }else if(value < 10000){
                            value = value;
                        }
                        return value
                    }
                }
            }
        ],
        series: [{
            name: '',
            type:'bar',          //特别指出图表类型
            barWidth: "13",     //设置柱状图宽度
            yAxisIndex: 0,      // 注意要在这里显示设置一下
            data: [],
            itemStyle: {
                normal: {
                    //柱形图圆角，顺时针左上，右上，右下，左下）
                    barBorderRadius: [12, 12, 12, 12],
                    // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，
                    // 如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: "#f75d5d"
                        }, {
                            offset: 1,
                            color: "#f0caca"
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            }
        },{
            name: '',
            type:'bar',
            barWidth: "13",     //设置柱状图宽度
            barGap:"100%",      //柱状图间距
            yAxisIndex: 1,
            data: [],
            itemStyle: {
                normal: {
                    // 统一设置四个角的圆角大小
                    barBorderRadius: 12,
                    //设置柱状图颜色渐变
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: "#5ad9e8"
                        }, {
                            offset: 1,
                            color: "#caecf0"
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            }
        }]
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
        return null;
    };

    var chartObj = getCommonPieObj(formatter);
    chartObj.title.text = pieConfig.title.text;
    chartObj.series[0].data = pieData.series[0].data;

    var chart = echarts.init(document.getElementById(container));
    chart.setOption(chartObj);
}
function getCommonPieObj(formatterFun) {
    var  colorList=['#afa3f5', '#00d488', '#3feed4', '#3bafff', '#f1bb4c', "rgba(250,250,250,0.5)"];
    var commonChartObj = {
        title: {
            text: '',
            subtext: '',
            x: 'center',
            y: 'top',
            textStyle: {
                fontSize:30,
                fontWeight:'normal',
                color: ['#333']
            },
            subtextStyle: {
                color: '#666',
                fontSize: 16
            },
        },
        grid: {
            bottom: 150,
            left: 0,
            right: '10%'
        },
        legend: {
            show:false,
            orient: 'vertical',
            top: "middle",
            right: "5%",
            textStyle: {
                color: '#f2f2f2',
                fontSize: 25,

            },
            icon: 'roundRect'
        },
        tooltip: {
            // trigger 设置触发类型，默认数据触发，可选值：'item' ¦ 'axis'
            trigger: 'item',
            showDelay: 20,   // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
            hideDelay: 20,   // 隐藏延迟，单位ms
            backgroundColor: 'white',  // 提示框背景颜色
            borderColor: 'skyblue',
            borderWidth: 1,
            borderRadius: 4,
            padding: 5,//默认值，提示内边距，单位px
            textStyle: {
                fontSize: '16px',
                color:"#3B3B3B",  // 设置文本颜色 默认#FFF
            },
            formatter: '{b}:   {c} ({d}%)',  //默认值null，内容格式器
        },
        series: [
            // 主要展示层的
            {
                radius: ['25%', '51%'],
                center: ['50%', '50%'],
                type: 'pie',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return colorList[params.dataIndex]
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 10,
                        length2: 28,
                        /*lineStyle: {
                            color: '#d3d3d3'
                        },*/
                        align: 'right'
                    },
                    emphasis: {
                        show: true
                    }
                },
                label:{
                    normal:{
                        formatter: '  {b|{b}}   ',
                        height: 32,
                        rich: {
                            b: {
                                fontSize: 12,
                                lineHeight: 33,
                                color: "#000000",
                                fontWeight:"bold",

                            }
                        }
                    },
                },
                data: [],
            },
            // 边框效果
            {
                radius: ['47%', '51%'],
                center: ['50%', '50%'],
                type: 'pie',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                animation: false,
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color:'rgba(250,250,250,0.5)'
                    }
                },
                data: [{
                    value: 1,
                }],
            }
        ]
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

/**
 * 创建折线图(基本接口)
 * @param container      用来绘制折线图的 DIV-ID 值
 * @param lineData        折线图数据结构
 *                        series: [
 *
 *                        ]
 * @param lineConfig       折线图全局配置
 *
 * @returns
 */
function buildLineChart(container, lineData, lineConfig) {
    var formatter = function () {   // 当鼠标悬停图表上时, 格式化提示信息
        return '<b>' + this.series.name + '</b>' + '：'+
            Highcharts.numberFormat(this.y, 0, ',') +' 次（'
            + Highcharts.numberFormat(this.percentage, 1) +'% ）'
            ;
    };

    var chartObj = getCommonLineObj(formatter);
    chartObj.title.text = lineConfig.title.text;
    chartObj.xAxis.data = lineConfig.xAxis.data;
    chartObj.yAxis.name = lineConfig.yAxis.name;
    chartObj.legend.data = lineConfig.legend.data;
    chartObj.series[0].data = lineData.series[0].data;
    chartObj.series[1].data = lineData.series[1].data;
    chartObj.series[0].name = lineData.series[0].name;
    chartObj.series[1].name = lineData.series[1].name;

    var chart = echarts.init(document.getElementById(container));
    chart.setOption(chartObj);
}
function getCommonLineObj(formatterFun) {
    var commonChartObj = {
        title: {
            text: '',
            subtext: '',
            // x 设置水平安放位置，默认左对齐，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
            x: 'center',
            // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
            y: 'top',
            // itemGap设置主副标题纵向间隔，单位px，默认为10，
            itemGap: 30,
            backgroundColor: '#EEE',
            // 主标题文本样式设置
            textStyle: {
                fontSize: 26,
                fontWeight: 'bolder',
                color: '#CECECE'
            },
            // 副标题文本样式设置
            subtextStyle: {
                fontSize: 18,
                color: '#CECECE'
            }
        },
        backgroundColor: '#FBFBFB',
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            top: 28,
            left:'center',
            data: []
        },

        animationDuration: 2000,        //渲染时长

        calculable: true,

        xAxis: {
            /*
            * 'value' 数值轴，适用于连续数据
            * 'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据
            * 'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度
            * 'log' 对数轴。适用于对数数据
            * */
            type: 'category',       //x轴坐标轴类型
            boundaryGap: false,     //从0刻度开始/坐标轴两边留白
            axisLine: {//坐标轴
                lineStyle:{
                    opacity: 0.01,//设置透明度就可以控制显示不显示
                    color: '#CECECE'
                },
            },
            axisLabel: {
                rotate: 30,
                interval: 0
            },
            splitLine: {    //网格线
                show: false,    //网格线
                lineStyle:{
                    color: '#eeeeee',
                },
            },
            axisTick: {//刻度线
                show: false,//去掉刻度线
            },
            data: []
        },

        yAxis: {
            type: 'value',
            name:'',//是基于Y轴线对齐，用空格站位让坐标轴名称与刻度名称对齐
            nameTextStyle: {
                color: '#CECECE',
                align:'left',//文字水平对齐方式
                verticalAlign:'middle',//文字垂直对齐方式
            },
            axisTick: {//刻度线
                show: false,//去掉刻度线
            },
            axisLine: {//坐标轴线
                lineStyle:{
                    opacity: 0,//透明度为0
                    color: '#CECECE'
                },
            },
            splitLine: {//网格线
                // show: false,//网格线
                lineStyle:{
                    color: '#eeeeee',
                },
            },
        },
        series: [{
            name: '',
            type: 'line',
            label: {//图形上的文本标签
                normal:{
                    formatter: '{@data}元',
                    show: false,//显示数据
                    color: ['#66AEDE'],
                    position: 'top',
                    fontSize:'14',
                },
            },
            itemStyle: {//折线样式
                normal: {
                    color: ['#66AEDE'],
                },
            },
            areaStyle: {//区域填充样式
                normal:{
                    color: {
                        type:'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(0, 175, 88, 0.4)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(0, 175, 88, 0.01)',
                            },
                        ],
                        globaCoord: false,
                    },
                },
            },
            symbol: 'none',
            smooth: 0.3,
            data: []
        }, {
            name: '',
            type: 'line',
            symbol: 'none',
            smooth: 0.3,
            color: ['#90EC7D'],
            data: []
        }]
    };
    return commonChartObj ;
}