(function() {
    var app = angular.module('clockApp');

    app.directive('descriptionList', function(){

        return {
            restrict: "A",
            scope: true,
            link: function($scope) {

                /**
                 * model for the descriptionList
                 * @type {{descriptions: Array,
                 * saveOutcome: saveOutcome,
                 * deleteDescription: deleteDescription,
                 * deleteList: deleteList}}
                 */
                $scope.descriptionList = {

                    /**
                     * array to store the descriptions and time values
                     */
                    descriptions: [],

                    /**
                     * store the outcome of the time recording and
                     * push it into the descriptions array
                     */
                    saveOutcome: function() {
                        this.descriptions.push( {
                            text: $scope.text,
                            hours: $scope.stopWatch.hours,
                            minutes: $scope.stopWatch.minutes,
                            seconds: $scope.stopWatch.seconds
                        });
                    },

                    /**
                     * delete the descriptions and time values
                     * @param item
                     */
                    deleteDescription: function(item) {
                        this.descriptions.splice(item, 1);
                    },

                    /**
                     * delete the whole list
                     */
                    deleteList: function() {
                        while(this.descriptions.length > 0) {
                            this.descriptions.pop();
                        }
                    }

                };

            }
        };
    });

})();
