//定义缓存后台数据变量
var jsonOf1,jsonOf2,jsonOf3,jsonOf4,jsonOf5,jsonOf6,jsonOf7,jsonOf8,jsonOf9,jsonOf10,jsonOf11;
//定义二维数组
var towns = new Array();
var volunteersNums = new Array();
var serviceTimes = new Array();
var volunteerActivityNums = new Array();
var volunteersNumsFixed = new Array();
var serviceTimesFixed = new Array();

var totalVolunteersInCity = new Array();
var totalServiceTimeInCity = new Array();
var _totalServiceTimeInCity = new Array();
//地市数据集合
var dataTest,dataTestReal,dataInProvince,cityTest;
var ajax1 = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/areareport/cid/1',
    dataType: 'json',
    success:function(json){
    	jsonOf1 = json;
       
    }
});
var ajax1a = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/cityreport/cid/1',
    dataType: 'json',
    success:function(json){
    	jsonOfTotal1 = json;
       
    }
});
var ajax2 = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/areareport/cid/2',
    dataType: 'json',
    success:function(json){
    	jsonOf2 = json;
        
    }
});
var ajax2a = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/cityreport/cid/2',
    dataType: 'json',
    success:function(json){
    	jsonOfTotal2 = json;
       
    }
});
var ajax3 = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/areareport/cid/3',
    dataType: 'json',
    success:function(json){
    	jsonOf3 = json;
        
    }
});
var ajax3a = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/cityreport/cid/3',
    dataType: 'json',
    success:function(json){
    	jsonOfTotal3 = json;
       
    }
});
var ajax4 = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/areareport/cid/4',
    dataType: 'json',
    success:function(json){
    	jsonOf4 = json;
        
    }
});
var ajax4a = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/cityreport/cid/4',
    dataType: 'json',
    success:function(json){
    	jsonOfTotal4 = json;
       
    }
});
var ajax5 = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/areareport/cid/5',
    dataType: 'json',
    success:function(json){
    	jsonOf5 = json;
        
    }
});
var ajax5a = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/cityreport/cid/5',
    dataType: 'json',
    success:function(json){
    	jsonOfTotal5 = json;
       
    }
});
var ajax6 = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/areareport/cid/6',
    dataType: 'json',
    success:function(json){
    	jsonOf6 = json;
        
    }
});
var ajax6a = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/cityreport/cid/6',
    dataType: 'json',
    success:function(json){
    	jsonOfTotal6 = json;
       
    }
});
var ajax7 = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/areareport/cid/7',
    dataType: 'json',
    success:function(json){
    	jsonOf7 = json;
        
    }
});
var ajax7a = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/cityreport/cid/7',
    dataType: 'json',
    success:function(json){
    	jsonOfTotal7 = json;
       
    }
});
var ajax8 = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/areareport/cid/8',
    dataType: 'json',
    success:function(json){
    	jsonOf8 = json;
        
    }
});
var ajax8a = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/cityreport/cid/8',
    dataType: 'json',
    success:function(json){
    	jsonOfTotal8 = json;
       
    }
});
var ajax9 = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/areareport/cid/9',
    dataType: 'json',
    success:function(json){
    	jsonOf9 = json;
        
    }
});
var ajax9a = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/cityreport/cid/9',
    dataType: 'json',
    success:function(json){
    	jsonOfTotal9 = json;
       
    }
});
var ajax10 = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/areareport/cid/10',
    dataType: 'json',
    success:function(json){
    	jsonOf10 = json;
        
    }
});
var ajax10a = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/cityreport/cid/10',
    dataType: 'json',
    success:function(json){
    	jsonOfTotal10 = json;
       
    }
});
var ajax11 = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/areareport/cid/11',
    dataType: 'json',
    success:function(json){
    	jsonOf11 = json;
        
    }
});
var ajax11a = $.ajax({
    type:'GET',
    url:'http://ad.jxzyz.cn/vol/index.php/Home/Report/cityreport/cid/11',
    dataType: 'json',
    success:function(json){
    	jsonOfTotal11 = json;
       
    }
});

$(function() {

    $.when(ajax1, ajax2, ajax3, ajax4, ajax5, ajax6, ajax7, ajax8, ajax9, ajax10, ajax11,ajax1a, ajax2a, ajax3a, ajax4a, ajax5a, ajax6a, ajax7a, ajax8a, ajax9a, ajax10a, ajax11a).done(function () {
        //后台数据数组
        var data = [jsonOf1,jsonOf2,jsonOf3,jsonOf4,jsonOf5,jsonOf6,jsonOf7,jsonOf8,jsonOf9,jsonOf10,jsonOf11];
        var dataOfTotal = [jsonOfTotal1,jsonOfTotal2,jsonOfTotal3,jsonOfTotal4,jsonOfTotal5,jsonOfTotal6,jsonOfTotal7,jsonOfTotal8,jsonOfTotal9,jsonOfTotal10,jsonOfTotal11];

        //遍历json数组，取出数组中所有key的值放入新二维数组中
        for (var i = 0; i < data.length; i++){  //第一层 分别取出jsonOf1...N

            towns[i] = new Array(); //一维长度
            volunteersNums[i] = new Array();
            serviceTimes[i] = new Array();
            volunteerActivityNums[i] = new Array();
            volunteersNumsFixed[i] = new Array();
            serviceTimesFixed[i] = new Array();

            for (var j = 0; j < data[i].length; j++){   //第二层 分别取出数组中的json

                towns[i][j] = new Array();  //二维长度
                volunteersNums[i][j] = new Array();
                serviceTimes[i][j] = new Array();
                volunteerActivityNums[i][j] = new Array();
                volunteersNumsFixed[i][j] = new Array();
                serviceTimesFixed[i][j] = new Array();

                towns[i][j] = data[i][j].cname;
                volunteersNums[i][j] = parseInt(data[i][j].totalnum);
                volunteersNumsFixed[i][j] = parseInt(data[i][j].totalnum);
                serviceTimes[i][j] = Math.round(parseInt(data[i][j].servicetime)/60);
                serviceTimesFixed[i][j] = Math.round(parseInt(data[i][j].servicetime)/60);
                volunteerActivityNums[i][j] = parseInt(data[i][j].projectnum);
            }
        }
        for (var k = 0; k < dataOfTotal.length; k++){
		    totalVolunteersInCity[k] = parseInt(dataOfTotal[k].totalnum);
		    totalServiceTimeInCity[k] = parseInt(dataOfTotal[k].servicetime);
		}
		for(var i = 0; i < totalServiceTimeInCity.length; i++){
		    totalServiceTimeInCity[i] = Math.round(totalServiceTimeInCity[i]/60);
		}
		/*------解决柱状图不同数量级数据显示不出------*/
		
		$.each(totalServiceTimeInCity,
		    function (i, d) {
		        _totalServiceTimeInCity.push({y: d, stack: i});
		    });
		//console.log(_totalServiceTimeInCity);

		//数组取最小和最大值
		var min = null,max = null,mark = true;
		for(var i=0;i<totalServiceTimeInCity.length;i++){
		    for(var j = 0, len = totalServiceTimeInCity.length;j < len;j ++){
		        if(totalServiceTimeInCity[j] == null){
		            continue;
		        }
		        if(mark){
		            mark = false;
		            min = totalServiceTimeInCity[j],max = totalServiceTimeInCity[j];
		        }
		        if(min > totalServiceTimeInCity[j]){
		            min = totalServiceTimeInCity[j];
		        }
		        if(max < totalServiceTimeInCity[j]){
		            max = totalServiceTimeInCity[j];
		        }
		    }
		}
		if(min/max < 1/10){
		    totalServiceTimeInCity[totalServiceTimeInCity.indexOf(min)] = max*(1/10);
		}
		//console.log(min + "======" + max);
        //json type
        dataTest = [
		    {
		        /*'新余':{
		            towns:['玉水','分宜'],//地一级
		            volunteersNum:[81,81],//地一级志愿者人数
		            serviceTime:[11,11],//地一级志愿时总数
		            volunteerActivityNum:[10,5],//地一级支援活动数
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/96d5ab414455febsize25_w283_h163.jpg"
		            totalVolunteers:'625523',
		            totalVolunteerActivityNum:'49691',
		            totalServiceTime:'1160772281'
		        }*/
		        '南昌':{
		            towns:towns[0],
		            volunteersNum:volunteersNums[0],
		            serviceTime:serviceTimes[0],
		            volunteerActivityNum:volunteerActivityNums[0],
		            landscapeURL:"http://y2.ifengimg.com/l/2016/10/b2281c94f1931a5/p-img-nanchang.jpg",
		            totalVolunteers:jsonOfTotal1.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal1.projectnum,
		            totalServiceTime:jsonOfTotal1.servicetime
		        },
		        '九江':{
		            towns:towns[1],
		            volunteersNum:volunteersNums[1],
		            serviceTime:serviceTimes[1],
		            volunteerActivityNum:volunteerActivityNums[1],
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/ccd9ddb13d033basize29_w283_h163.jpg",
		            totalVolunteers:jsonOfTotal2.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal2.projectnum,
		            totalServiceTime:jsonOfTotal2.servicetime
		        },
		        '景德镇':{
		            towns:towns[2],
		            volunteersNum:volunteersNums[2],
		            serviceTime:serviceTimes[2],
		            volunteerActivityNum:volunteerActivityNums[2],
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/a4fb03c8ec2569bsize20_w283_h163.jpg",
		            totalVolunteers:jsonOfTotal3.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal3.projectnum,
		            totalServiceTime:jsonOfTotal3.servicetime
		        },
		        '萍乡':{
		            towns:towns[3],
		            volunteersNum:volunteersNums[3],
		            serviceTime:serviceTimes[3],
		            volunteerActivityNum:volunteerActivityNums[3],
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/b24bd341ace8991size34_w283_h163.jpg",
		            totalVolunteers:jsonOfTotal4.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal4.projectnum,
		            totalServiceTime:jsonOfTotal4.servicetime
		        },
		        '新余':{
		            towns:towns[4],
		            volunteersNum:volunteersNums[4],
		            serviceTime:serviceTimes[4],
		            volunteerActivityNum:volunteerActivityNums[4],
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/96d5ab414455febsize25_w283_h163.jpg",
		            totalVolunteers:jsonOfTotal5.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal5.projectnum,
		            totalServiceTime:jsonOfTotal5.servicetime
		        },
		        '鹰潭':{
		            towns:towns[5],
		            volunteersNum:volunteersNums[5],
		            serviceTime:serviceTimes[5],
		            volunteerActivityNum:volunteerActivityNums[5],
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/a33e5791439755dsize33_w283_h163.jpg",
		            totalVolunteers:jsonOfTotal6.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal6.projectnum,
		            totalServiceTime:jsonOfTotal6.servicetime
		        },
		        '赣州':{
		            towns:towns[6],
		            volunteersNum:volunteersNums[6],
		            serviceTime:serviceTimes[6],
		            volunteerActivityNum:volunteerActivityNums[6],
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/80f3a6aee923434size33_w283_h163.jpg",
		            totalVolunteers:jsonOfTotal7.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal7.projectnum,
		            totalServiceTime:jsonOfTotal7.servicetime
		        },
		        '宜春':{
		            towns:towns[7],
		            volunteersNum:volunteersNums[7],
		            serviceTime:serviceTimes[7],
		            volunteerActivityNum:volunteerActivityNums[7],
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/57ed37108932946size33_w283_h163.jpg",
		            totalVolunteers:jsonOfTotal8.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal8.projectnum,
		            totalServiceTime:jsonOfTotal8.servicetime
		        },
		        '上饶':{
		            towns:towns[8],
		            volunteersNum:volunteersNums[8],
		            serviceTime:serviceTimes[8],
		            volunteerActivityNum:volunteerActivityNums[8],
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/1f250fc88604b44size30_w283_h163.jpg",
		            totalVolunteers:jsonOfTotal9.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal9.projectnum,
		            totalServiceTime:jsonOfTotal9.servicetime
		        },
		        '吉安':{
		            towns:towns[9],
		            volunteersNum:volunteersNums[9],
		            serviceTime:serviceTimes[9],
		            volunteerActivityNum:volunteerActivityNums[9],
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/0484871ad88bcf6size19_w283_h163.jpg",
		            totalVolunteers:jsonOfTotal10.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal1.projectnum,
		            totalServiceTime:jsonOfTotal10.servicetime
		        },
		        '抚州':{
		            towns:towns[10],
		            volunteersNum:volunteersNums[10],
		            serviceTime:serviceTimes[10],
		            volunteerActivityNum:volunteerActivityNums[10],
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/b541d174a4c7220size29_w283_h163.jpg",
		            totalVolunteers:jsonOfTotal11.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal11.projectnum,
		            totalServiceTime:jsonOfTotal11.servicetime
		        }
		        //...
		    }
		];
        dataTestReal = [
		    {
		        /*'新余':{
		            towns:['玉水','分宜'],//地一级
		            volunteersNum:[81,81],//地一级志愿者人数
		            serviceTime:[11,11],//地一级志愿时总数
		            volunteerActivityNum:[10,5],//地一级支援活动数
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/96d5ab414455febsize25_w283_h163.jpg"
		            totalVolunteers:'625523',
		            totalVolunteerActivityNum:'49691',
		            totalServiceTime:'1160772281'
		        }*/
		        '南昌':{
		            towns:towns[0],
		            volunteersNum:volunteersNumsFixed[0],
		            serviceTime:serviceTimesFixed[0],
		            volunteerActivityNum:volunteerActivityNums[0],
		            landscapeURL:"http://y2.ifengimg.com/l/2016/10/b2281c94f1931a5/p-img-nanchang.jpg",
		            totalVolunteers:jsonOfTotal1.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal1.projectnum,
		            totalServiceTime:jsonOfTotal1.servicetime
		        },
		        '九江':{
		            towns:towns[1],
		            volunteersNum:volunteersNumsFixed[1],
		            serviceTime:serviceTimesFixed[1],
		            volunteerActivityNum:volunteerActivityNums[1],
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/ccd9ddb13d033basize29_w283_h163.jpg",
		            totalVolunteers:jsonOfTotal2.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal2.projectnum,
		            totalServiceTime:jsonOfTotal2.servicetime
		        },
		        '景德镇':{
		            towns:towns[2],
		            volunteersNum:volunteersNumsFixed[2],
		            serviceTime:serviceTimesFixed[2],
		            volunteerActivityNum:volunteerActivityNums[2],
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/a4fb03c8ec2569bsize20_w283_h163.jpg",
		            totalVolunteers:jsonOfTotal3.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal3.projectnum,
		            totalServiceTime:jsonOfTotal3.servicetime
		        },
		        '萍乡':{
		            towns:towns[3],
		            volunteersNum:volunteersNumsFixed[3],
		            serviceTime:serviceTimesFixed[3],
		            volunteerActivityNum:volunteerActivityNums[3],
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/b24bd341ace8991size34_w283_h163.jpg",
		            totalVolunteers:jsonOfTotal4.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal4.projectnum,
		            totalServiceTime:jsonOfTotal4.servicetime
		        },
		        '新余':{
		            towns:towns[4],
		            volunteersNum:volunteersNumsFixed[4],
		            serviceTime:serviceTimesFixed[4],
		            volunteerActivityNum:volunteerActivityNums[4],
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/96d5ab414455febsize25_w283_h163.jpg",
		            totalVolunteers:jsonOfTotal5.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal5.projectnum,
		            totalServiceTime:jsonOfTotal5.servicetime
		        },
		        '鹰潭':{
		            towns:towns[5],
		            volunteersNum:volunteersNumsFixed[5],
		            serviceTime:serviceTimesFixed[5],
		            volunteerActivityNum:volunteerActivityNums[5],
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/a33e5791439755dsize33_w283_h163.jpg",
		            totalVolunteers:jsonOfTotal6.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal6.projectnum,
		            totalServiceTime:jsonOfTotal6.servicetime
		        },
		        '赣州':{
		            towns:towns[6],
		            volunteersNum:volunteersNumsFixed[6],
		            serviceTime:serviceTimesFixed[6],
		            volunteerActivityNum:volunteerActivityNums[6],
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/80f3a6aee923434size33_w283_h163.jpg",
		            totalVolunteers:jsonOfTotal7.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal7.projectnum,
		            totalServiceTime:jsonOfTotal7.servicetime
		        },
		        '宜春':{
		            towns:towns[7],
		            volunteersNum:volunteersNumsFixed[7],
		            serviceTime:serviceTimesFixed[7],
		            volunteerActivityNum:volunteerActivityNums[7],
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/57ed37108932946size33_w283_h163.jpg",
		            totalVolunteers:jsonOfTotal8.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal8.projectnum,
		            totalServiceTime:jsonOfTotal8.servicetime
		        },
		        '上饶':{
		            towns:towns[8],
		            volunteersNum:volunteersNumsFixed[8],
		            serviceTime:serviceTimesFixed[8],
		            volunteerActivityNum:volunteerActivityNums[8],
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/1f250fc88604b44size30_w283_h163.jpg",
		            totalVolunteers:jsonOfTotal9.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal9.projectnum,
		            totalServiceTime:jsonOfTotal9.servicetime
		        },
		        '吉安':{
		            towns:towns[9],
		            volunteersNum:volunteersNumsFixed[9],
		            serviceTime:serviceTimesFixed[9],
		            volunteerActivityNum:volunteerActivityNums[9],
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/0484871ad88bcf6size19_w283_h163.jpg",
		            totalVolunteers:jsonOfTotal10.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal1.projectnum,
		            totalServiceTime:jsonOfTotal10.servicetime
		        },
		        '抚州':{
		            towns:towns[10],
		            volunteersNum:volunteersNumsFixed[10],
		            serviceTime:serviceTimesFixed[10],
		            volunteerActivityNum:volunteerActivityNums[10],
		            landscapeURL:"http://y2.ifengimg.com/a/2016/0316/b541d174a4c7220size29_w283_h163.jpg",
		            totalVolunteers:jsonOfTotal11.totalnum,
		            totalVolunteerActivityNum:jsonOfTotal11.projectnum,
		            totalServiceTime:jsonOfTotal11.servicetime
		        }
		        //...
		    }
		];
        dataInProvince = sumSameAttrInObj(getObjectValues(dataTest[0]),'totalVolunteers','totalServiceTime','totalVolunteerActivityNum');
        //console.log(getObjectValues(dataTest[0]));
        //市一级数组
        cityTest = Object.getOwnPropertyNames(dataTest[0]);

        $.get('../../../Public/dt/asset/js/jiangxi.json', function(data) {
            echarts.registerMap('jxmap', data);
            var myChart = echarts.init(document.getElementById('china_map'));
            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    backgroundColor:'',
                    formatter: function(params){
                        var totalVolunteers = dataTest[0][params.name].totalVolunteers,
                            totalVolunteerActivityNum = dataTest[0][params.name].totalVolunteerActivityNum,
                            totalServiceTime = Math.round(parseInt(dataTest[0][params.name].totalServiceTime)/60);
                        var landscapeURL = dataTest[0][params.name].landscapeURL;

                        return '<div class="local_info">'
                            +'<div class="local_img" id="local_img"><img src="'+landscapeURL+'" width="100%" height="100%" style="border-radius:20px"></div>'
                            +'<div class="local_context">\n' +
                            '        <ul>\n' +
                            '            <li>志愿者人数：'+totalVolunteers+' 人</li>\n' +
                            '            <li>志愿活动数：'+totalVolunteerActivityNum+' 次</li>\n' +
                            '            <li>志愿服务总时长：<br>'+totalServiceTime+' 小时</li>\n' +
                            '        </ul>\n' +
                            '    </div>'
                            +'</div>';
                    }
                },
                series: [{
                    type: 'map', //类型必须是map
                    map: 'jxmap',
                    zoom:1.1,
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var colorList = [
                                    '#a5b8e0', '#8cdef3', '#e1bfa6', '#77be7c',
                                    '#e0d3a6', '#dda778', '#e3a6ec','#93e4a9',
                                    '#d9ec93', '#F4E001', '#F0805A', '#26C0C0','#dcbbea'
                                ];
                                return colorList[params.dataIndex];
                            },
                            label: {
                                show: true,
                                fontSize:15,
                                textStyle: {
                                    color: "rgb(249, 249, 249)",
                                }
                            },
                            borderColor: "#fff",
                            borderWidth:2,

                        },
                        emphasis:{
                            areaColor: "red",
                            borderColor: '#fff',
                            areaStyle: {
                                color: '#fff'
                            },
                            label:{
                                show:true,
                                color:'#fff',
                                fontSize:20,
                                position: ['50%', '50%'],
                            }
                        }

                    },

                }]
            });

            myChart.on('click', function(params) {
                //console.log(params.name);
                var chart1 = $('#data1').highcharts();
                while(chart1.series.length) {
                    chart1.series[0].remove();
                }

                chart1.colorCounter = 0;
                chart1.symbolCounter = 0;

                chart1.xAxis[0].setCategories(dataTest[0][params.name].towns);

                /*------解决地市不同数量级数据显示不出------*/
                
                var volunteersNumInCity = dataTest[0][params.name].volunteersNum;
                var serviceTimeInCity = dataTest[0][params.name].serviceTime;

                var volunteersNumInCityReal = dataTestReal[0][params.name].volunteersNum;
                var serviceTimeInCityReal = dataTestReal[0][params.name].serviceTime;
                var _volunteersNumInCity = new Array();
                var _serviceTimeInCity = new Array();
                $.each(volunteersNumInCityReal,
                    function (i, d) {
                        _volunteersNumInCity.push({ y: d, stack: i });
                    });
                $.each(serviceTimeInCityReal,
                    function (i, d) {
                        _serviceTimeInCity.push({ y: d, stack: i });
                    });
                //----》判断鼠标在每个地市区域的点击次数
                //不同数量级分类处理

                for(var i = 0; i < volunteersNumInCity.length; i++){
                    if(volunteersNumInCity[i] == _volunteersNumInCity[i].y){
                        volunteersNumInCity[i] = volunteersNumInCity[i] + 4000;
                    }else {
                        volunteersNumInCity[i] = volunteersNumInCity[i];
                    }
                }
                for(var j = 0; j < serviceTimeInCity.length; j++){
                    if(serviceTimeInCity[j] == 0){
                        serviceTimeInCity[j] = 0;
                    }else if((0 < serviceTimeInCity[j])&&(serviceTimeInCity[j] < 100000)){
                        if(serviceTimeInCity[j] == _serviceTimeInCity[j].y){
                            serviceTimeInCity[j] = serviceTimeInCity[j] + 100000;
                        }else {
                            serviceTimeInCity[j] = serviceTimeInCity[j];
                        }
                    }else if((100000 <= serviceTimeInCity[j])&&(serviceTimeInCity[j] < 250000)){
                        if(serviceTimeInCity[j] == _serviceTimeInCity[j].y){
                            serviceTimeInCity[j] = serviceTimeInCity[j] + 250000;
                        }else {
                            serviceTimeInCity[j] = serviceTimeInCity[j];
                        }
                    }else {
                        if(serviceTimeInCity[j] == _serviceTimeInCity[j].y){
                            serviceTimeInCity[j] = serviceTimeInCity[j] + 500000;
                        }else {
                            serviceTimeInCity[j] = serviceTimeInCity[j];
                        }
                    }
                }


                chart1.addSeries({
                    name: '志愿者人数',
                    yAxis: 0,
                    data: volunteersNumInCity

                });
                chart1.addSeries({
                    name: '志愿时',
                    yAxis: 1,
                    data: serviceTimeInCity

                });

                chart1.update({
                    tooltip:{
                        formatter: function() {
                            var y1 = this.points[0], y2 = this.points[1];
                            //console.log(this.points);

                            if(isExistVariable(y1)){
                                if(isExistVariable(y2)){
                                    return this.x +"<br>"
                                        + "<span style='color:skyblue'>志愿者人数：" + _volunteersNumInCity[this.points[0].point.index].y +" 人</span><br>"
                                        + "<span style='color:orange'>志愿时：" + _serviceTimeInCity[this.points[1].point.index].y +" 时</span>";
                                }else {
                                    if(y1.series.name == "志愿者人数"){
                                        return this.x +"<br>"
                                            + "<span style='color:skyblue'>志愿者人数：" + _volunteersNumInCity[this.points[0].point.index].y +" 人</span><br>";
                                    }else if(y1.series.name == "志愿时") {
                                        return this.x +"<br>"
                                            + "<span style='color:orange'>志愿时：" + _serviceTimeInCity[this.points[0].point.index].y +" 时</span>";
                                    }
                                }
                            }
                        },
                        shared: true,
                        useHTML: true
                    }
                });

                var dataReplace = {
                    series: dataTest[0][params.name]
                };
                var chartConfigReplace = {
                    title: '江西省志愿者活动开展数统计',
                    formatterText: '活动开展数',
                    cityField: 'towns',
                    valueField: 'volunteerActivityNum'
                };
                buildPieChartUpper("data2", dataReplace, chartConfigReplace);
            });
        });

        initChart();
    });

});

//饼图
function pieInit() {
    var series = [
        ['九江',       parseInt(dataTest[0]['九江'].totalVolunteerActivityNum)],
        {
            name: '南昌',
            y: parseInt(dataTest[0]['南昌'].totalVolunteerActivityNum),
            sliced: true,
            selected: true,
            url: ''
        },
        ['景德镇',    parseInt(dataTest[0]['景德镇'].totalVolunteerActivityNum)],
        ['上饶',     parseInt(dataTest[0]['上饶'].totalVolunteerActivityNum)],
        ['鹰潭',   parseInt(dataTest[0]['鹰潭'].totalVolunteerActivityNum)],
        ['宜春',    parseInt(dataTest[0]['宜春'].totalVolunteerActivityNum)],
        ['抚州',     parseInt(dataTest[0]['抚州'].totalVolunteerActivityNum)],
        ['吉安',   parseInt(dataTest[0]['吉安'].totalVolunteerActivityNum)],
        ['新余',    parseInt(dataTest[0]['新余'].totalVolunteerActivityNum)],
        ['萍乡',     parseInt(dataTest[0]['萍乡'].totalVolunteerActivityNum)],
        ['赣州',   parseInt(dataTest[0]['赣州'].totalVolunteerActivityNum)]
    ];
    var data = {
        series: series
    };
    var chartConfig = {
        title: '江西省志愿者活动开展数统计',
        formatterText: '活动开展数'
    };
    buildPieChart("data2", data, chartConfig);
}

//柱状图
function barInit() {
    Highcharts.chart('data1', {
        chart: {
            type: 'column'
        },
        title: {
            text: '江西省志愿者人数及志愿时长统计'
        },
        legend: {   //图例样式设置
            x: 0,
            verticalAlign: 'top',
            y: -12,
            backgroundColor: ''
        },
        xAxis: {
            categories: cityTest,
            crosshair: true,
        },
        yAxis: [{  //配置双Y轴
            min: 0,
            //tickInterval: 5000,//刻度
            title:{  //左边y轴
                text :''
            },
            /*labels:{
                formatter:function() {//在labels里可以配置formatter属性可以对y轴设置单位之类的个性化东西
                    return this.value+"L";//可以对照上面图表
                }
            }*/
        },{
            min: 0,
            //tickInterval: 500000,
            title:{  //右边Y轴
                text :''
            },
            opposite:true//是否与第一条y轴相反
        }],
        credits: {
            enabled: false     //不显示LOGO
        },
        colors:['skyblue','orange'],
        tooltip: {
            formatter: function() {
                var y1 = this.points[0], y2 = this.points[1];
                //console.log(this.points);

                if(isExistVariable(y1)){
                    if(isExistVariable(y2)){
                        return this.x +"<br>"
                            + "<span style='color:skyblue'>志愿者人数：" + this.points[0].y +" 人</span><br>"
                            + "<span style='color:orange'>志愿时：" + _totalServiceTimeInCity[this.points[1].point.index].y +" 时</span>";
                    }else {
                        if(y1.series.name == "志愿者人数"){
                            return this.x +"<br>"
                                + "<span style='color:skyblue'>志愿者人数：" + this.points[0].y +" 人</span><br>";
                        }else if(y1.series.name == "志愿时") {
                            return this.x +"<br>"
                                + "<span style='color:orange'>志愿时：" + _totalServiceTimeInCity[this.points[0].point.index].y +" 时</span>";
                        }
                    }
                }
            },
            shared: true,
            useHTML: true
        },

        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                /*dataLabels: {
                    enabled: true, //设置显示对应y的值
                    //inside: true
                }*/
            }
        },
        series: [{
            name: '志愿者人数',
            yAxis: 0,
            data: totalVolunteersInCity
        },{
            name: '志愿时',
            yAxis: 1,// 注意要在这里显示设置一下
            data: totalServiceTimeInCity
        }]
    });
}

//展示框
function initBulletin() {
    $('#volunteerTotalNum').text(dataInProvince.totalVolunteers);
    $('#volunteerActivityTotalNum').text(dataInProvince.totalVolunteerActivityNum);
    $('#serviceTotalTime').text(dataInProvince.totalServiceTime);
    dancingNumCount();
}

//图表初始化
function initChart() {
    pieInit();
    barInit();
    initBulletin();
}
/*---------数字跳动效果开始----------*/
var options = {
    useEasing: true,
    useGrouping: false,
    separator: ',',
    decimal: '.',
    prefix: '',
    suffix: ''
};

function dancingNumCount() {
    var dancingNum1 = new CountUp("volunteerTotalNum", 0, dataInProvince.totalVolunteers, 0, 2, options);
    var dancingNum2 = new CountUp("volunteerActivityTotalNum", 0, dataInProvince.totalVolunteerActivityNum, 0, 2, options);
    var dancingNum3 = new CountUp("serviceTotalTime", 0, dataInProvince.totalServiceTime, 0, 2, options);
    dancingNum1.reset();
    dancingNum1.start(function () {
        dancingNum1.update(dataInProvince.totalVolunteers);
    });
    dancingNum2.reset();
    dancingNum2.start(function () {
        dancingNum2.update(dataInProvince.totalVolunteerActivityNum);
    });
    dancingNum3.reset();
    dancingNum3.start(function () {
        dancingNum3.update(dataInProvince.totalServiceTime);
    });
}
/*---------数字跳动效果结束----------*/





/*
*南昌；http://y2.ifengimg.com/l/2016/10/b2281c94f1931a5/p-img-nanchang.jpg
*九江：http://y2.ifengimg.com/a/2016/0316/ccd9ddb13d033basize29_w283_h163.jpg
*上饶：http://y2.ifengimg.com/a/2016/0316/1f250fc88604b44size30_w283_h163.jpg
*鹰潭：http://y2.ifengimg.com/a/2016/0316/a33e5791439755dsize33_w283_h163.jpg
*宜春：http://y2.ifengimg.com/a/2016/0316/57ed37108932946size33_w283_h163.jpg
*萍乡：http://y2.ifengimg.com/a/2016/0316/b24bd341ace8991size34_w283_h163.jpg
*抚州：http://y2.ifengimg.com/a/2016/0316/b541d174a4c7220size29_w283_h163.jpg
*吉安：http://y2.ifengimg.com/a/2016/0316/0484871ad88bcf6size19_w283_h163.jpg
*赣州：http://y2.ifengimg.com/a/2016/0316/80f3a6aee923434size33_w283_h163.jpg
* */
//省一级总和
function getObjectKeys(object) {
    var keys = [];
    for (var property in object)
        keys.push(property);
    return keys;
}
function getObjectValues(object) {
    var values = [];
    for (var property in object)
        values.push(object[property]);
    return values;
}




//json数组同key值value求和，返回对应key的json对象
function sumSameAttrInObj(array, ...param) {
    var temp = {};
    array.forEach(function(item, index) {
        for(var i in item) {
            if(param.indexOf(i) >= 0) {
                if((typeof item[i]) == 'string'){
                    item[i] = item[i]*1
                }
                //如果value为数组类型，会做和运算并改动
                if(item[i] instanceof Array){
                    item[i] = item[i].reduce(function(prev,cur,index,array){
                        return prev + cur;
                    });
                }
                if(temp[i]) {
                    temp[i] += item[i];
                } else {
                    temp[i] = item[i];
                }
            }
        }
    });
    return temp;
};


//市一级




//判断变量是否存在，返回Boolean值
function isExistVariable(variableName) {
    try {
        if (typeof(variableName) == "undefined") {
            //alert("value is undefined");
            return false;
        } else {
            //alert("value is true");
            return true;
        }
    } catch(e) {}
    return false;
}

