/**
 * @author Lin
 * @date 2019/11/21 16:27
 * 自己配置正则规则的文件
 */

define([],function(){
	"use strict";
	var validator = {
			init : function(Vue,VueValidator){
				Vue.use(VueValidator);
				Vue.validator('phonenum', {
						message: '联系电话输入有误!', 
						check: function (val) { 
						  return /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(val)
						}
					})
				Vue.validator('linkMan', {
					  message: '联系人输入有误!', 
					  check: function (val) { 
					    return /^[\u4E00-\u9FA5]+$/.test(val)
					  }
					})
				Vue.validator('fax', {
					  message: '传真格式输入有误!', 
					  check: function (val) { 
					    return /^(\d{3,4}-)?\d{7,8}$/.test(val)
					  }
					})
				Vue.validator('address', {
					  message: '地址格式输入有误!', 
					  check: function (val) { 
					    return /^[A-Za-z0-9\u4E00-\u9FA5\s+]+$/.test(val)
					  }
					})
				Vue.validator('rate', {
					  message: '利率格式输入有误!', 
					  check: function (val) { 
					    return /^$|(^[1-9]\d*$)|(^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$)/.test(val)
					  }
					})
				Vue.validator('regFunc', {
					  message: '资金格式输入有误!', 
					  check: function (val) { 
					    return /(^[1-9](\d+)?(\.\d{1,2})?$)|(^\d\.\d{1,2}?$)/.test(val);
					  }
					})
				Vue.validator('uname', {
					  message: '请输入正确格式的用户名!', 
					  check: function (val) { 
					    return /^[\u4E00-\u9FA5\uf900-\ufa2d\w]{2,16}$/.test(val)
					  }
					})
				Vue.validator('email', {
					  message: '请输入正确格式的邮箱地址!', 
					  check: function (val) { 
					    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
					  }
					})
				Vue.validator('phone', {
					  message: '请输入正确格式的手机号码!', 
					  check: function (val) { 
					    return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(val)
					  }
					})
				Vue.validator('password', {
					  message: '请输入字母和数字组合格式的6-18位密码!',
					  check: function (val) { 
					    return  !!(val && /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test( val ));
					  }
					})
				Vue.validator('idcard', {
					  message: '请输入正确格式的身份证号码!', 
					  check: function (ID_card) {
				    		  var reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;  
				    		
				    		  if(ID_card===undefined ){
				    				ID_card = "";
				    			}
				    		  if(ID_card.length==18){
				    			   var idCardWi=new Array( 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ); // 将前17位加权因子保存在数组里
				    			   var idCardY=new Array( 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ); // 这是除以11后，可能产生的11位余数、验证码，也保存成数组
				    			   var idCardWiSum=0; // 用来保存前17位各自乖以加权因子后的总和
				    			   for(var i=0;i<17;i++){
				    			    idCardWiSum+=ID_card.substring(i,i+1)*idCardWi[i];
				    			   }

				    			   var idCardMod=idCardWiSum%11;// 计算出校验码所在数组的位置
				    			   var idCardLast=ID_card.substring(17);// 得到最后一位身份证号码

				    			   // 如果等于2，则说明校验码是10，身份证号码最后一位应该是X
				    			   if(idCardMod==2){
				    			    if(idCardLast=="X"||idCardLast=="x"){
				    			    	return true;
				    			    }else{
				    			    	return false;
				    			    }
				    			   }else{
				    			    // 用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
				    			    if(idCardLast==idCardY[idCardMod]){
				    			    	return true;
				    			    }else{
				    			    	return false;
				    			    }
				    			   }
				    			 }else{
				    				 return false;
				    			 }
				    		}
					})
				Vue.validator('bankcard', {
					  message: '请输入正确格式的银行卡号!', 
					  check: function (val) {
                          return /^[0-9]\d*$/.test(val)
					  }
					})
				Vue.validator('simcard', {
				  message: '请输入正确格式的SIM卡号!',
				  check: function (val) {
					return /^[0-9a-zA-Z]{20}$/g.test(val)
				  }
				})
				Vue.validator('paypassword', {
				  message: '请输入六位数字的支付密码,不要过于简单!',
				  check: function (val) {
					return /^[0-9]{6}$/g.test(val);
				  }
				})
                Vue.validator('wholenumber', {
                    message: '请输入数正整数!',
                    check: function (val) {
                        return /^[1-9]\d*$/.test(val)
                    }
                })
			}
	}
	
	return validator;

});