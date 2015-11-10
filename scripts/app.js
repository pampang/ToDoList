angular.module('ToDoListApp', [])
    .controller('ToDoListController', function($scope) {
        var isEmpty = function(str){
            if(!str){
                alert('Wrong input!');
                return true;
            }
        };
        //$scope.items.isUpdateָʾ��ǰ���Ƿ����ڱ����¡�
        //û��Ϊitems��ÿһ���isUpdate��ֵ����ΪĬ��Ϊ�գ���false��
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
        $scope.count = 5; //Ŀǰ������
        $scope.gap = 5;   //���ؿ��
        $scope.isEnd = false; //�Ƿ��Ѽ��ص���ͷ
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