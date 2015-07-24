(function() {
    var app = angular.module('clockApp');

    app.directive('isAnimated', function(){

        return {

            restrict: "A",
            scope: true,
            link: function($scope) {

                /**
                 * animate the hour-hand separately because of the ability to set the time offset manually
                 * watch the clock to change the updateHours variable and rotate the hand if i gets changed
                 */
                $scope.$watch('clock._updateHours', function(newValue){
                    $('.hour-hand').css('transform', 'rotate(' + newValue * 360 / 12 + 'deg)');
                });

                /**
                 * watch the current seconds and minutes and update hands on change
                 */
                $scope.$watch('clock._currentTime', function(newValue){
                    var seconds = newValue.getSeconds();
                    var minutes = newValue.getMinutes();

                    $scope.animateHands(seconds, minutes);
                });

                /**
                 * rotate the hands if seconds and minutes change
                 * @param seconds
                 * @param minutes
                 */
                $scope.animateHands = function(seconds, minutes) {
                    $('.minute-hand').css('transform', 'rotate(' + minutes * 360 / 60 + 'deg)');
                    $('.second-hand').css('transform', 'rotate(' + seconds * 360 / 60 + 'deg)');
                }
            }
        };
    });

})();

