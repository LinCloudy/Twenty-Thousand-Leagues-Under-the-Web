/**
 * @author Lin
 * @date 2019/11/20 11:11
 */

/**
 * @method json对象数组对同key的value求和
 * @param array
 * @param param
 * @return 对应key的json对象
 */
function sumSameKeysInObj(array, ...param) {
    var temp = {};
    array.forEach(function(item, index) {
        for(var i in item) {
            if(param.indexOf(i) >= 0) {
                //如果value为字符串类型
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

var jsonArr = [
    {
        serviceTime: [15370, 169397, 34197, 8541, 49074, 387504, 1492682, 168966, 158662, 109246, 1208830, 255854, 49970, 483, 17183],
        volunteerActivityNum: [4396, 3875, 1584, 1023, 2934, 5525, 6152, 1843, 4002, 5694, 6244, 4516, 1727, 77, 474],
        volunteersNum: [5859, 34159, 44420, 14362, 58139, 87597, 139746, 17896, 55975, 25204, 41793, 43206, 42835, 225, 13959],
        totalServiceTime: "1160772281",
        totalVolunteerActivityNum: 49691,
        totalVolunteers: 625523
    },
    {
        serviceTime: [15370, 169397, 34197, 8541, 49074, 387504, 1492682, 168966, 158662, 109246, 1208830, 255854, 49970, 483, 17183],
        volunteerActivityNum: [4396, 3875, 1584, 1023, 2934, 5525, 6152, 1843, 4002, 5694, 6244, 4516, 1727, 77, 474],
        volunteersNum: [5859, 34159, 44420, 14362, 58139, 87597, 139746, 17896, 55975, 25204, 41793, 43206, 42835, 225, 13959],
        totalServiceTime: "1160772281",
        totalVolunteerActivityNum: 49691,
        totalVolunteers: 625523
    },
];

var dataInProvince = sumSameKeysInObj(jsonArr, 'serviceTime','totalServiceTime');

console.log(dataInProvince)
console.log(jsonArr)