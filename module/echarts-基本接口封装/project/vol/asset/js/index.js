/*********HighChart待改动**********/
var jsonOf1 = [
    {
        "cname":"桑海开发区",
        "totalnum":"6355",
        "teamnum":"16",
        "servicetime":"922191",
        "projectnum":"4556"
    },
    {
        "cname":"红谷滩新区",
        "totalnum":"39597",
        "teamnum":"528",
        "servicetime":"10142683",
        "projectnum":"4130"
    },
    {
        "cname":"高新开发区",
        "totalnum":"49907",
        "teamnum":"296",
        "servicetime":"2051830",
        "projectnum":"1614"
    },
    {
        "cname":"安义县",
        "totalnum":"22202",
        "teamnum":"294",
        "servicetime":"434433",
        "projectnum":"1612"
    },
    {
        "cname":"进贤县",
        "totalnum":"78704",
        "teamnum":"469",
        "servicetime":"2917416",
        "projectnum":"3292"
    },
    {
        "cname":"新建区",
        "totalnum":"90052",
        "teamnum":"450",
        "servicetime":"23101482",
        "projectnum":"5582"
    },
    {
        "cname":"南昌县",
        "totalnum":"157392",
        "teamnum":"741",
        "servicetime":"87134420",
        "projectnum":"6308"
    },
    {
        "cname":"湾里区",
        "totalnum":"20859",
        "teamnum":"222",
        "servicetime":"10122761",
        "projectnum":"2051"
    },
    {
        "cname":"青山湖区",
        "totalnum":"68013",
        "teamnum":"637",
        "servicetime":"9492704",
        "projectnum":"4327"
    },
    {
        "cname":"青云谱区",
        "totalnum":"25753",
        "teamnum":"403",
        "servicetime":"6526337",
        "projectnum":"5748"
    },
    {
        "cname":"西湖区",
        "totalnum":"44343",
        "teamnum":"670",
        "servicetime":"72394058",
        "projectnum":"6607"
    },
    {
        "cname":"东湖区",
        "totalnum":"43754",
        "teamnum":"418",
        "servicetime":"15298271",
        "projectnum":"4547"
    },
    {
        "cname":"南昌经济技术开发区",
        "totalnum":"51747",
        "teamnum":"325",
        "servicetime":"2977424",
        "projectnum":"1811"
    },
    {
        "cname":"长堎外商投资工业园",
        "totalnum":"234",
        "teamnum":"4",
        "servicetime":"28977",
        "projectnum":"77"
    },
    {
        "cname":"市直",
        "totalnum":"14142",
        "teamnum":"173",
        "servicetime":"1022134",
        "projectnum":"475"
    }
];
var jsonOf2 = [
    {
        "cname":"共青城市",
        "totalnum":"12784",
        "teamnum":"173",
        "servicetime":"4011765",
        "projectnum":"452"
    },
    {
        "cname":"九江经济技术开发区",
        "totalnum":"9246",
        "teamnum":"106",
        "servicetime":"758173",
        "projectnum":"485"
    },
    {
        "cname":"彭泽县",
        "totalnum":"21987",
        "teamnum":"216",
        "servicetime":"20415669",
        "projectnum":"289"
    },
    {
        "cname":"都昌县",
        "totalnum":"47905",
        "teamnum":"242",
        "servicetime":"4309497",
        "projectnum":"780"
    },
    {
        "cname":"湖口县",
        "totalnum":"49466",
        "teamnum":"187",
        "servicetime":"195406827",
        "projectnum":"483"
    },
    {
        "cname":"瑞昌市",
        "totalnum":"27688",
        "teamnum":"213",
        "servicetime":"1038170",
        "projectnum":"635"
    },
    {
        "cname":"武宁县",
        "totalnum":"34230",
        "teamnum":"272",
        "servicetime":"6667504",
        "projectnum":"1374"
    },
    {
        "cname":"修水县",
        "totalnum":"19938",
        "teamnum":"304",
        "servicetime":"413800",
        "projectnum":"507"
    },
    {
        "cname":"星子县",
        "totalnum":"6876",
        "teamnum":"116",
        "servicetime":"1236102",
        "projectnum":"151"
    },
    {
        "cname":"永修县",
        "totalnum":"57502",
        "teamnum":"260",
        "servicetime":"17261474",
        "projectnum":"865"
    },
    {
        "cname":"德安县",
        "totalnum":"19374",
        "teamnum":"163",
        "servicetime":"17308149",
        "projectnum":"1058"
    },
    {
        "cname":"九江县",
        "totalnum":"26820",
        "teamnum":"329",
        "servicetime":"719212",
        "projectnum":"3480"
    },
    {
        "cname":"濂溪区",
        "totalnum":"32975",
        "teamnum":"344",
        "servicetime":"264632",
        "projectnum":"1441"
    },
    {
        "cname":"浔阳区",
        "totalnum":"50189",
        "teamnum":"312",
        "servicetime":"2593468",
        "projectnum":"1614"
    },
    {
        "cname":"庐山风景名胜区",
        "totalnum":"1088",
        "teamnum":"35",
        "servicetime":"324084",
        "projectnum":"105"
    },
    {
        "cname":"庐山西海风景名胜区",
        "totalnum":"224",
        "teamnum":"11",
        "servicetime":"6175",
        "projectnum":"6"
    },
    {
        "cname":"八里湖新区",
        "totalnum":"1959",
        "teamnum":"72",
        "servicetime":"71994",
        "projectnum":"359"
    },
    {
        "cname":"庐山管理局",
        "totalnum":"639",
        "teamnum":"32",
        "servicetime":"291448",
        "projectnum":"39"
    },
    {
        "cname":"市直",
        "totalnum":"18186",
        "teamnum":"107",
        "servicetime":"324382",
        "projectnum":"188"
    }
];
var jsonOf3 = [
    {
        "cname":"昌江区",
        "totalnum":"30321",
        "teamnum":"349",
        "servicetime":"4352365",
        "projectnum":"5724"
    },
    {
        "cname":"珠山区",
        "totalnum":"41125",
        "teamnum":"386",
        "servicetime":"9196649",
        "projectnum":"5320"
    },
    {
        "cname":"浮梁县",
        "totalnum":"23620",
        "teamnum":"172",
        "servicetime":"924272",
        "projectnum":"1189"
    },
    {
        "cname":"乐平市",
        "totalnum":"67501",
        "teamnum":"348",
        "servicetime":"1628188",
        "projectnum":"2193"
    },
    {
        "cname":"市直",
        "totalnum":"9545",
        "teamnum":"155",
        "servicetime":"553191",
        "projectnum":"490"
    }
];
var jsonOf4 = [
    {
        "cname":"安源区",
        "totalnum":"69182",
        "teamnum":"317",
        "servicetime":"3929069",
        "projectnum":"485"
    },
    {
        "cname":"莲花县",
        "totalnum":"27412",
        "teamnum":"132",
        "servicetime":"52145",
        "projectnum":"34"
    },
    {
        "cname":"湘东区",
        "totalnum":"25478",
        "teamnum":"62",
        "servicetime":"111911",
        "projectnum":"41"
    },
    {
        "cname":"芦溪县",
        "totalnum":"38709",
        "teamnum":"54",
        "servicetime":"87240",
        "projectnum":"69"
    },
    {
        "cname":"上栗县",
        "totalnum":"21024",
        "teamnum":"72",
        "servicetime":"47377",
        "projectnum":"41"
    },
    {
        "cname":"市直",
        "totalnum":"31654",
        "teamnum":"124",
        "servicetime":"92306",
        "projectnum":"28"
    }
];
var jsonOf5 = [
    {
        "cname":"渝水区",
        "totalnum":"143045",
        "teamnum":"493",
        "servicetime":"297609821",
        "projectnum":"2342"
    },
    {
        "cname":"分宜县",
        "totalnum":"45479",
        "teamnum":"307",
        "servicetime":"96457474",
        "projectnum":"177"
    },
    {
        "cname":"高新技术产业开发区",
        "totalnum":"25323",
        "teamnum":"37",
        "servicetime":"33396780",
        "projectnum":"39"
    },
    {
        "cname":"仙女湖风景名胜区",
        "totalnum":"31552",
        "teamnum":"50",
        "servicetime":"28220880",
        "projectnum":"51"
    },
    {
        "cname":"孔目江生态经济区",
        "totalnum":"11854",
        "teamnum":"2",
        "servicetime":"21207720",
        "projectnum":"1"
    },
    {
        "cname":"江西省职业教育园区",
        "totalnum":"11754",
        "teamnum":"0",
        "servicetime":"20121840",
        "projectnum":"1"
    },
    {
        "cname":"市直",
        "totalnum":"49084",
        "teamnum":"250",
        "servicetime":"58957226",
        "projectnum":"460"
    }
];
var jsonOf6 = [
    {
        "cname":"月湖区",
        "totalnum":"39725",
        "teamnum":"419",
        "servicetime":"120739199",
        "projectnum":"2599"
    },
    {
        "cname":"余江县",
        "totalnum":"38681",
        "teamnum":"430",
        "servicetime":"69465092",
        "projectnum":"1006"
    },
    {
        "cname":"贵溪市",
        "totalnum":"61394",
        "teamnum":"554",
        "servicetime":"10866429",
        "projectnum":"1590"
    },
    {
        "cname":"高新技术产业开发区",
        "totalnum":"2825",
        "teamnum":"33",
        "servicetime":"67419",
        "projectnum":"119"
    },
    {
        "cname":"信江新区",
        "totalnum":"4984",
        "teamnum":"31",
        "servicetime":"69414",
        "projectnum":"132"
    },
    {
        "cname":"市直",
        "totalnum":"12614",
        "teamnum":"457",
        "servicetime":"25967894",
        "projectnum":"745"
    },
    {
        "cname":"龙虎山管委会",
        "totalnum":"3534",
        "teamnum":"46",
        "servicetime":"1387557",
        "projectnum":"253"
    }
];
var jsonOf7 = [
    {
        "cname":"宁都县",
        "totalnum":"48522",
        "teamnum":"175",
        "servicetime":"1319177",
        "projectnum":"223"
    },
    {
        "cname":"石城县",
        "totalnum":"21698",
        "teamnum":"277",
        "servicetime":"7243238",
        "projectnum":"956"
    },
    {
        "cname":"会昌县",
        "totalnum":"51559",
        "teamnum":"656",
        "servicetime":"2457168",
        "projectnum":"11614"
    },
    {
        "cname":"瑞金市",
        "totalnum":"57044",
        "teamnum":"456",
        "servicetime":"37070425",
        "projectnum":"2646"
    },
    {
        "cname":"兴国县",
        "totalnum":"44980",
        "teamnum":"446",
        "servicetime":"2196886",
        "projectnum":"770"
    },
    {
        "cname":"于都县",
        "totalnum":"73882",
        "teamnum":"679",
        "servicetime":"8064001",
        "projectnum":"2011"
    },
    {
        "cname":"寻乌县",
        "totalnum":"23029",
        "teamnum":"209",
        "servicetime":"11467407",
        "projectnum":"497"
    },
    {
        "cname":"安远县",
        "totalnum":"28428",
        "teamnum":"280",
        "servicetime":"825289",
        "projectnum":"598"
    },
    {
        "cname":"定南县",
        "totalnum":"15968",
        "teamnum":"281",
        "servicetime":"10784015",
        "projectnum":"933"
    },
    {
        "cname":"全南县",
        "totalnum":"23138",
        "teamnum":"156",
        "servicetime":"11584407",
        "projectnum":"675"
    },
    {
        "cname":"龙南县",
        "totalnum":"27021",
        "teamnum":"391",
        "servicetime":"4722326",
        "projectnum":"889"
    },
    {
        "cname":"信丰县",
        "totalnum":"62834",
        "teamnum":"379",
        "servicetime":"61847012",
        "projectnum":"1171"
    },
    {
        "cname":"大余县",
        "totalnum":"25889",
        "teamnum":"476",
        "servicetime":"4818841",
        "projectnum":"2446"
    },
    {
        "cname":"南康区",
        "totalnum":"97096",
        "teamnum":"665",
        "servicetime":"4301804",
        "projectnum":"2935"
    },
    {
        "cname":"崇义县",
        "totalnum":"25953",
        "teamnum":"330",
        "servicetime":"9304125",
        "projectnum":"1296"
    },
    {
        "cname":"上犹县",
        "totalnum":"29002",
        "teamnum":"155",
        "servicetime":"5950633",
        "projectnum":"573"
    },
    {
        "cname":"赣县区",
        "totalnum":"83143",
        "teamnum":"266",
        "servicetime":"14881787",
        "projectnum":"1372"
    },
    {
        "cname":"章贡区",
        "totalnum":"84734",
        "teamnum":"332",
        "servicetime":"33540288",
        "projectnum":"5675"
    },
    {
        "cname":"赣州开发区",
        "totalnum":"35709",
        "teamnum":"221",
        "servicetime":"5725060",
        "projectnum":"600"
    },
    {
        "cname":"市直",
        "totalnum":"15920",
        "teamnum":"203",
        "servicetime":"4308914",
        "projectnum":"1124"
    },
    {
        "cname":"蓉江新区",
        "totalnum":"338",
        "teamnum":"25",
        "servicetime":"0",
        "projectnum":"142"
    }
];
var jsonOf8 = [
    {
        "cname":"铜鼓县",
        "totalnum":"16001",
        "teamnum":"188",
        "servicetime":"494143",
        "projectnum":"899"
    },
    {
        "cname":"靖安县",
        "totalnum":"16728",
        "teamnum":"172",
        "servicetime":"389810",
        "projectnum":"1173"
    },
    {
        "cname":"奉新县",
        "totalnum":"36595",
        "teamnum":"277",
        "servicetime":"2382359",
        "projectnum":"1762"
    },
    {
        "cname":"宜丰县",
        "totalnum":"38088",
        "teamnum":"458",
        "servicetime":"6388510",
        "projectnum":"2544"
    },
    {
        "cname":"上高县",
        "totalnum":"41946",
        "teamnum":"390",
        "servicetime":"198183",
        "projectnum":"854"
    },
    {
        "cname":"万载县",
        "totalnum":"46814",
        "teamnum":"159",
        "servicetime":"11299255",
        "projectnum":"700"
    },
    {
        "cname":"樟树市",
        "totalnum":"77349",
        "teamnum":"465",
        "servicetime":"17640545",
        "projectnum":"8590"
    },
    {
        "cname":"高安市",
        "totalnum":"135962",
        "teamnum":"629",
        "servicetime":"1668135",
        "projectnum":"2270"
    },
    {
        "cname":"袁州区",
        "totalnum":"135684",
        "teamnum":"629",
        "servicetime":"6745797",
        "projectnum":"2329"
    },
    {
        "cname":"丰城市",
        "totalnum":"210191",
        "teamnum":"914",
        "servicetime":"46077958",
        "projectnum":"5300"
    },
    {
        "cname":"市直",
        "totalnum":"13075",
        "teamnum":"290",
        "servicetime":"346475",
        "projectnum":"597"
    },
    {
        "cname":"宜春经济开发区",
        "totalnum":"2266",
        "teamnum":"19",
        "servicetime":"375834",
        "projectnum":"41"
    },
    {
        "cname":"明月山温泉风景名胜区",
        "totalnum":"3571",
        "teamnum":"46",
        "servicetime":"0",
        "projectnum":"180"
    },
    {
        "cname":"宜阳新区",
        "totalnum":"6542",
        "teamnum":"29",
        "servicetime":"247608",
        "projectnum":"142"
    }
];
var jsonOf9 = [
    {
        "cname":"鄱阳县",
        "totalnum":"79613",
        "teamnum":"409",
        "servicetime":"46665326",
        "projectnum":"778"
    },
    {
        "cname":"余干县",
        "totalnum":"62287",
        "teamnum":"509",
        "servicetime":"1332909",
        "projectnum":"498"
    },
    {
        "cname":"万年县",
        "totalnum":"44028",
        "teamnum":"324",
        "servicetime":"3894699",
        "projectnum":"1573"
    },
    {
        "cname":"婺源县",
        "totalnum":"33350",
        "teamnum":"264",
        "servicetime":"29514556",
        "projectnum":"850"
    },
    {
        "cname":"德兴市",
        "totalnum":"34853",
        "teamnum":"232",
        "servicetime":"3919600",
        "projectnum":"1304"
    },
    {
        "cname":"铅山县",
        "totalnum":"50934",
        "teamnum":"318",
        "servicetime":"632916",
        "projectnum":"509"
    },
    {
        "cname":"弋阳县",
        "totalnum":"42642",
        "teamnum":"327",
        "servicetime":"545089",
        "projectnum":"1079"
    },
    {
        "cname":"横峰县",
        "totalnum":"15138",
        "teamnum":"189",
        "servicetime":"2431896",
        "projectnum":"373"
    },
    {
        "cname":"玉山县",
        "totalnum":"51424",
        "teamnum":"351",
        "servicetime":"43152451",
        "projectnum":"1382"
    },
    {
        "cname":"广丰县",
        "totalnum":"85712",
        "teamnum":"188",
        "servicetime":"1780581",
        "projectnum":"165"
    },
    {
        "cname":"上饶县",
        "totalnum":"69312",
        "teamnum":"345",
        "servicetime":"14529069",
        "projectnum":"1881"
    },
    {
        "cname":"信州区",
        "totalnum":"50405",
        "teamnum":"567",
        "servicetime":"984125",
        "projectnum":"2777"
    },
    {
        "cname":"上饶经济开发区",
        "totalnum":"675",
        "teamnum":"14",
        "servicetime":"138096",
        "projectnum":"20"
    },
    {
        "cname":"三清山风景名胜区",
        "totalnum":"206",
        "teamnum":"9",
        "servicetime":"49559",
        "projectnum":"8"
    },
    {
        "cname":"市直",
        "totalnum":"11149",
        "teamnum":"233",
        "servicetime":"926895",
        "projectnum":"986"
    }
];
var jsonOf10 = [
    {
        "cname":"井冈山市",
        "totalnum":"18356",
        "teamnum":"293",
        "servicetime":"1731185",
        "projectnum":"866"
    },
    {
        "cname":"永丰县",
        "totalnum":"100216",
        "teamnum":"559",
        "servicetime":"25118697",
        "projectnum":"2882"
    },
    {
        "cname":"万安县",
        "totalnum":"34490",
        "teamnum":"313",
        "servicetime":"11207025",
        "projectnum":"781"
    },
    {
        "cname":"泰和县",
        "totalnum":"64890",
        "teamnum":"888",
        "servicetime":"45752010",
        "projectnum":"2200"
    },
    {
        "cname":"安福县",
        "totalnum":"33594",
        "teamnum":"283",
        "servicetime":"20730911",
        "projectnum":"863"
    },
    {
        "cname":"吉安县",
        "totalnum":"50787",
        "teamnum":"584",
        "servicetime":"37423526",
        "projectnum":"1628"
    },
    {
        "cname":"吉水县",
        "totalnum":"70500",
        "teamnum":"786",
        "servicetime":"55353175",
        "projectnum":"4627"
    },
    {
        "cname":"永新县",
        "totalnum":"51069",
        "teamnum":"406",
        "servicetime":"34963444",
        "projectnum":"1131"
    },
    {
        "cname":"遂川县",
        "totalnum":"72543",
        "teamnum":"1147",
        "servicetime":"26271379",
        "projectnum":"4682"
    },
    {
        "cname":"峡江县",
        "totalnum":"20553",
        "teamnum":"271",
        "servicetime":"7665391",
        "projectnum":"2119"
    },
    {
        "cname":"新干县",
        "totalnum":"56340",
        "teamnum":"515",
        "servicetime":"17289782",
        "projectnum":"2226"
    },
    {
        "cname":"青原区",
        "totalnum":"36841",
        "teamnum":"226",
        "servicetime":"21411564",
        "projectnum":"1385"
    },
    {
        "cname":"吉州区",
        "totalnum":"58273",
        "teamnum":"805",
        "servicetime":"47721192",
        "projectnum":"5227"
    },
    {
        "cname":"井冈山经济技术开发区",
        "totalnum":"508",
        "teamnum":"30",
        "servicetime":"155752",
        "projectnum":"41"
    },
    {
        "cname":"庐陵新区",
        "totalnum":"6202",
        "teamnum":"95",
        "servicetime":"713342",
        "projectnum":"372"
    },
    {
        "cname":"市直",
        "totalnum":"4006",
        "teamnum":"65",
        "servicetime":"1908814",
        "projectnum":"549"
    }
];
var jsonOf11 = [
    {
        "cname":"南丰县",
        "totalnum":"32953",
        "teamnum":"352",
        "servicetime":"9263577",
        "projectnum":"1587"
    },
    {
        "cname":"乐安县",
        "totalnum":"33494",
        "teamnum":"265",
        "servicetime":"10585663",
        "projectnum":"343"
    },
    {
        "cname":"崇仁县",
        "totalnum":"20186",
        "teamnum":"239",
        "servicetime":"11839968",
        "projectnum":"608"
    },
    {
        "cname":"临川区",
        "totalnum":"73606",
        "teamnum":"431",
        "servicetime":"107770981",
        "projectnum":"3633"
    },
    {
        "cname":"广昌县",
        "totalnum":"20919",
        "teamnum":"217",
        "servicetime":"30208997",
        "projectnum":"917"
    },
    {
        "cname":"金溪县",
        "totalnum":"18349",
        "teamnum":"208",
        "servicetime":"6627468",
        "projectnum":"2092"
    },
    {
        "cname":"南城县",
        "totalnum":"18689",
        "teamnum":"255",
        "servicetime":"11660569",
        "projectnum":"765"
    },
    {
        "cname":"资溪县",
        "totalnum":"16291",
        "teamnum":"337",
        "servicetime":"9307021",
        "projectnum":"499"
    },
    {
        "cname":"黎川县",
        "totalnum":"16814",
        "teamnum":"195",
        "servicetime":"6948211",
        "projectnum":"880"
    },
    {
        "cname":"东乡县",
        "totalnum":"44341",
        "teamnum":"321",
        "servicetime":"63049869",
        "projectnum":"1891"
    },
    {
        "cname":"宜黄县",
        "totalnum":"14297",
        "teamnum":"244",
        "servicetime":"19349954",
        "projectnum":"242"
    },
    {
        "cname":"高新技术产业园区",
        "totalnum":"1145",
        "teamnum":"43",
        "servicetime":"2683436",
        "projectnum":"515"
    },
    {
        "cname":"市直",
        "totalnum":"11052",
        "teamnum":"236",
        "servicetime":"14502830",
        "projectnum":"1720"
    },
    {
        "cname":"中国铁塔江西省分公司",
        "totalnum":"8",
        "teamnum":"0",
        "servicetime":"0",
        "projectnum":"0"
    }
];

var jsonOfTotal1 = {
    "cname":"南昌市",
    "totalnum":"741999",
    "teamnum":"5661",
    "servicetime":"1212872599",
    "projectnum":"53242"
};
var jsonOfTotal2 = {
    "cname":"九江市",
    "totalnum":"441250",
    "teamnum":"3499",
    "servicetime":"482734402",
    "projectnum":"14635"
};
var jsonOfTotal3 = {
    "cname":"景德镇市",
    "totalnum":"172228",
    "teamnum":"1417",
    "servicetime":"229743195",
    "projectnum":"15116"
};
var jsonOfTotal4 = {
    "cname":"萍乡市",
    "totalnum":"213506",
    "teamnum":"761",
    "servicetime":"7187753",
    "projectnum":"698"
};
var jsonOfTotal5 = {
    "cname":"新余市",
    "totalnum":"318749",
    "teamnum":"1147",
    "servicetime":"707286780",
    "projectnum":"3418"
};
var jsonOfTotal6 = {
    "cname":"鹰潭市",
    "totalnum":"165176",
    "teamnum":"2021",
    "servicetime":"475393303",
    "projectnum":"6596"
};
var jsonOfTotal7 = {
    "cname":"赣州市",
    "totalnum":"876845",
    "teamnum":"7078",
    "servicetime":"1386137280",
    "projectnum":"39834"
};
var jsonOfTotal8 = {
    "cname":"宜春市",
    "totalnum":"781141",
    "teamnum":"4675",
    "servicetime":"1052536870",
    "projectnum":"27666"
};
var jsonOfTotal9 = {
    "cname":"上饶市",
    "totalnum":"637990",
    "teamnum":"4508",
    "servicetime":"826986952",
    "projectnum":"14585"
};
var jsonOfTotal10 = {
    "cname":"吉安市",
    "totalnum":"683904",
    "teamnum":"7274",
    "servicetime":"1367594875",
    "projectnum":"31732"
};
var jsonOfTotal11 = {
    "cname":"抚州市",
    "totalnum":"323619",
    "teamnum":"3360",
    "servicetime":"655379250",
    "projectnum":"15787"
};

$(function() {
    /*$.ajax({
        type:'POST',
        url:'',
        dataType: 'json',
        success:function(data){

        }
    });*/

    $.get('asset/js/jiangxi.json', function(data) {
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
var initChart = function () {
    pieInit();
    barInit();
    initBulletin();
};

var initBulletin = function () {
    $('#volunteerTotalNum').text(dataInProvince.totalVolunteers);
    $('#volunteerActivityTotalNum').text(dataInProvince.totalVolunteerActivityNum);
    $('#serviceTotalTime').text(dataInProvince.totalServiceTime);
    dancingNumCount();
};

//后台数据数组
var data = [jsonOf1,jsonOf2,jsonOf3,jsonOf4,jsonOf5,jsonOf6,jsonOf7,jsonOf8,jsonOf9,jsonOf10,jsonOf11];

//定义二维数组
var towns = new Array();
var volunteersNums = new Array();
var serviceTimes = new Array();
var volunteerActivityNums = new Array();
var volunteersNumsFixed = new Array();
var serviceTimesFixed = new Array();

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
//json type
var dataTest = [
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
var dataTestReal = [
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
var dataOfTotal = [jsonOfTotal1,jsonOfTotal2,jsonOfTotal3,jsonOfTotal4,jsonOfTotal5,jsonOfTotal6,jsonOfTotal7,jsonOfTotal8,jsonOfTotal9,jsonOfTotal10,jsonOfTotal11];
var totalVolunteersInCity = new Array();
var totalServiceTimeInCity = new Array();
for (var k = 0; k < dataOfTotal.length; k++){
    totalVolunteersInCity[k] = parseInt(dataOfTotal[k].totalnum);
    totalServiceTimeInCity[k] = parseInt(dataOfTotal[k].servicetime);
}
for(var i = 0; i < totalServiceTimeInCity.length; i++){
    totalServiceTimeInCity[i] = Math.round(totalServiceTimeInCity[i]/60);
}
//console.log(getObjectValues(dataTest[0]));

/*------解决柱状图不同数量级数据显示不出------*/
var _totalServiceTimeInCity = new Array();
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
var dataInProvince = sumSameAttrInObj(getObjectValues(dataTest[0]),'totalVolunteers','totalServiceTime','totalVolunteerActivityNum');
//console.log(getObjectValues(dataTest[0]));
//市一级数组
var cityTest = Object.getOwnPropertyNames(dataTest[0]);

//市一级


/*---------数字跳动效果开始----------*/
var options = {
    useEasing: true,
    useGrouping: false,
    separator: ',',
    decimal: '.',
    prefix: '',
    suffix: ''
};
var dancingNum1 = new CountUp("volunteerTotalNum", 0, dataInProvince.totalVolunteers, 0, 2, options);
var dancingNum2 = new CountUp("volunteerActivityTotalNum", 0, dataInProvince.totalVolunteerActivityNum, 0, 2, options);
var dancingNum3 = new CountUp("serviceTotalTime", 0, dataInProvince.totalServiceTime, 0, 2, options);
var dancingNumCount = function() {
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
};
/*---------数字跳动效果结束----------*/

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
//饼图
var pieInit = function () {
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
};

//柱状图
var barInit = function () {
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
};
