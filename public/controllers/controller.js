 function AppCntrl($scope, $http) {
 	$http.get('/cntlst').success(function(response){
 		console.log("the Data Recieved")
    	$scope.cntlst=response;

    });
 	var refresh = function(){
 	$http.get('/cntlst').success(function(response){
 		console.log("the Data Recieved")
    	//console.log(response);
    	$scope.cntlst=response;
    	$scope.cnt="";
    });

 };

 	$scope.delCnt=function(id){
 		console.log(id);
 		$http.delete('/cntlst/'+ id).success(function(response){
 			console.log(response);
 			refresh();
 		});
 		};

 	$scope.insertContact=function(){
 		console.log($scope.cnt);
 		$http.post('/cntlst',$scope.cnt).success(function(response){
 			console.log(response);
 		refresh();
 		});


 	};
 	$scope.edit=function(id){
 		console.log(id);
 		$http.get('/cntlst/' + id).success(function(response){
 			$scope.cnt=response;
  		});
 		
 	};

 	$scope.update= function(){
 		console.log($scope.cnt._id);
 		$http.put('/cntlst/' + $scope.cnt._id, $scope.cnt).success(function(response){
 			refresh();
 		});
 	};

 	$scope.deselect =function(){
 		$scope.cnt="";

 	};


 	$scope.myname="suresh";
 	console.log("this is controller");


 }
