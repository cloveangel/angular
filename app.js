/*
* @Author: Coco
* @Date:   2016-03-17 23:28:03
* @Last Modified by:   Coco
* @Last Modified time: 2016-03-18 02:06:48
*/

var userInforModule = angular.module('HelloAngular',[]);

userInforModule.controller('UserInforCtrl', ['$scope', function($scope){
	$scope.userInfor={
		name:"Coco",
		email:"cloveangel@126.com",
		password:"123456",
		autoLogin:true

	};
	$scope.getFormData=function(){
		console.log($scope.userInfor);
	}
	$scope.setFormData=function(){
		$scope.userInfor={
				name:"周鹭江",
				email:"clovecher@gmail.com",
				password:"123456",
				autoLogin:false

			};
	}
	$scope.resetFormData=function(){
		$scope.userInfor={
		name:"Coco",
		email:"cloveangel@126.com",
		password:"123456",
		autoLogin:true
	};
	}
}])
