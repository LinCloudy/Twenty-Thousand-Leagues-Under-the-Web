/**
 * @author Lin
 * @date 2019/11/20 11:11
 */

/**
 * @method json对象数组对同key的value求和
 * @param array 传入的数组
 * @param param 不定项字段（key）
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
}

