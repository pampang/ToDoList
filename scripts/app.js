angular.module('ToDoListApp', [])
    .controller('ToDoListController', function($scope) {
        var isEmpty = function(str){
            if(!str){
                alert('Wrong input!');
                return true;
            }
        };
        //$scope.items.isUpdate指示当前项是否正在被更新。
        //没有为items的每一项的isUpdate赋值，因为默认为空，即false。
       $scope.items = [
           {action: 'get up'},
           {action: 'teeth brush'},
           {action: 'eat breakfast'},
           {action: 'get dressed'},
           {action: 'get packaged'},
           {action: 'go to office'},
           {action: 'write codes'},
           {action: 'debug'},
           {action: 'write codes'},
           {action: 'debug'},
           {action: 'eat lunch'},
           {action: 'take a nap'},
           {action: 'get up'},
           {action: 'write codes'},
           {action: 'debug'},
           {action: 'write codes'},
           {action: 'debug'},
           {action: 'have a meeting'},
           {action: 'date someone'},
           {action: 'have dinner'},
           {action: 'go to home'},
           {action: 'sleep'}
       ];
        $scope.count = 5; //目前加载数
        $scope.gap = 5;   //加载跨度
        $scope.isEnd = false; //是否已加载到尽头
        $scope.add = function() {
            if(isEmpty($scope.newItem)){
                return;
            }
            $scope.items.unshift({action: $scope.newItem});
            if($scope.isEnd){
                $scope.isEnd = $scope.count - $scope.items.length;
            }
        };
        $scope.delete = function(index) {
            $scope.items.splice(index, 1);
        };
        $scope.update = function(index, modifyString) {
            if(isEmpty(modifyString)){
                return;
            }
            $scope.items[index].action = modifyString;
            $scope.items[index].isUpdate = false;
        };
        $scope.loadMore = function() {
            $scope.count += $scope.gap;
            if($scope.count > $scope.items.length){
                $scope.isEnd = true;
            }
        };

    });