(function() {
    var clockController = angular.module('clockApp');

    clockController.controller('clockCtrl', ['$scope','$interval',
        function ($scope, $interval) {

            "use strict";

            /**
             * model for the clock
             * @type {{_timezoneOffset: number,
             * _currentTime: Date,
             * _ticker: number,
             * _updateHours: number,
             * setTimezoneOffset: setTimezoneOffset,
             * getTimezoneOffset: getTimezoneOffset,
             * getSeconds: getSeconds,
             * getMinutes: getMinutes,
             * getHours: getHours,
             * formatTime: formatTime,
             * _tick: _tick}}
             */
            $scope.clock = {
                // needed to set the offset manually. Explanation in info.md
                _timezoneOffset: 0,
                _currentTime: new Date(),
                _ticker: 0,
                _updateHours: 0,

                /**
                 * Sets the timezone offset
                 * If the new timezone offset is similar to the old one - return.
                 * @param timezoneOffset {number} Timezone offset
                 */
                setTimezoneOffset: function(timezoneOffset) {

                    if(timezoneOffset == this._timezoneOffset) {
                        return;
                    }

                    if(timezoneOffset > 11 || timezoneOffset < -11) {
                        timezoneOffset = 0;
                    }

                    this._timezoneOffset = timezoneOffset;
                },

                /**
                 * @return timezoneOffset value
                 */
                getTimezoneOffset: function() {
                    return this._timezoneOffset;
                },

                getSeconds: function() {
                    var seconds = this._currentTime.getSeconds();
                    return this.formatTime(seconds);
                },

                getMinutes: function() {
                    var minutes =  this._currentTime.getMinutes();
                    return this.formatTime(minutes);
                },

                getHours: function() {
                    this._updateHours = (this._currentTime.getHours() + this._timezoneOffset);
                    return this.formatTime(this._updateHours);
                },

                /**
                 * format the time to the
                 * @param timeValue
                 * @returns {string}
                 */
                formatTime: function(timeValue) {
                    return timeValue < 10 ? '0' + timeValue : timeValue;
                },

                /**
                 * set the current time on each tick
                 * @private
                 */
                _tick: function() {
                    this._currentTime = new Date();
                }

            };

            /**
             * interval for every second.
             * Call the tick function to trigger a tick
             * @type {*}
             * @private
             */
            $scope._interval = $interval(function(){
                $scope.clock._tick()
            }, 1000);

        }]);
})();
