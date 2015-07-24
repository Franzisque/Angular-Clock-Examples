(function() {
    var stopWatchController = angular.module('clockApp');

    stopWatchController.controller('stopWatchCtrl', ['$scope','$interval',
        function ($scope, $interval) {

            "use strict";

            /**
             * model for the stopwatch
             * @type {{seconds: string,
             * minutes: string,
             * hours: string,
             * calculateSeconds: calculateSeconds,
             * calculateMinutes: calculateMinutes,
             * calculateHours: calculateHours,
             * resetTimeWatch: resetTimeWatch,
             * startTimeRecording: startTimeRecording,
             * stopTimeRecording: stopTimeRecording}}
             */
            $scope.stopWatch = {
                seconds: '00',
                minutes: '00',
                hours: '00',

                /**
                 * calculate the seconds.
                 * if the seconds are more than 60
                 * raise the minutes
                 */
                calculateSeconds: function() {
                    this.seconds ++;
                    if(this.seconds >= 60) {
                        this.calculateMinutes();
                        this.seconds = 0;
                    }

                    /**
                     * format the seconds to.
                     * If a 0 is missing - add a 0
                     */
                    if(this.seconds < 10){
                        this.seconds = '0' + this.seconds;
                    }
                },

                /**
                 * calculate the minutes.
                 * If the minutes are bigger than 60
                 * increase the hours
                 */
                calculateMinutes: function() {
                    this.minutes ++;
                    if(this.minutes >= 60) {
                        this.calculateHours();
                        this.minutes = 0;
                    }

                    /**
                     * also formats the time
                     */
                    if(this.minutes < 10){
                        this.minutes = '0' + this.minutes;
                    }
                },

                /**
                 * increase the hours
                 */
                calculateHours: function() {
                    this.hours ++;

                    /**
                     * format time
                     */
                    if(this.hours < 10){
                        this.hours = '0' + this.hours;
                    }
                },

                /**
                 * reset the stop-watch to 00:00:00
                 */
                resetTimeWatch: function() {
                    this.hours = '00';
                    this.minutes = '00';
                    this.seconds = '00';
                    this.stopTimeRecording()
                },

                /**
                 * start the time recording by setting an interval
                 */
                startTimeRecording: function() {
                    $scope._intervall = $interval(function(){
                        $scope.stopWatch.calculateSeconds();
                    }, 1000);
                },

                /**
                 * stop the time recording by canceling the intervall
                 */
                stopTimeRecording: function() {
                    $interval.cancel($scope._intervall);
                }
            };

        }]);
})();