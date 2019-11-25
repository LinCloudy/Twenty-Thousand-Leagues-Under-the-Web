/**
 * @author Lin
 * @date 2019/11/25 16:25
 */

//邮箱--只允许英文字母、数字、下划线、英文句号、以及中划线组成
var reg00 = "^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$"

//手机号
var reg01 = "^1(3|4|5|6|7|8|9)\\d{9}$"

//固定电话
var reg03 = "(\\(\\d{3,4}\\)|\\d{3,4}-|\\s)?\\d{8}"

//汉字
var reg04 = "^[\u4e00-\u9fa5]{0,}$"

//由26个小写英文字母组成的字符串
var reg05 = "^[a-z]+$"

//由26个大写英文字母组成的字符串
var reg06 = "^[A-Z]+$"

//由26个英文字母组成的字符串
var reg06 = "^[A-Za-z]+$"

//正整数
var reg07 = "^[1-9]\\d*$"

//负整数
var reg08 = "^-[1-9]\\d*$"

//正浮点数
var reg09 = "^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*$"