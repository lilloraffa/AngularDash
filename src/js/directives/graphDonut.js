/**
 * Widget Directive
 */

angular
    .module('RDash')
    .directive('graphDonut', graphDonut);

function graphDonut() {
    var directive = {
        //transclude: true,
        scope: {
          idchart: '@',
          chartData: '=',
          chartTitle: '='
        },
        restrict: 'E',
        replace: false,
        //template: '<div id="chart2"></div>',
        link: function (scope, element, attrs) {

          scope.$watch('chartData', function (newVal, oldVal) {
            //alert(newVal);
            var chartTitle = "";
            if(typeof scope.chartTitle !='undefined'){
              chartTitle = scope.chartTitle;
            }

            var c3Json = {

              bindto: '#'+attrs.idchart,

              data: {
                  columns: newVal,

                  type: 'donut'

              },
              donut: {
                title: chartTitle
              },

              padding: {
                bottom: 35
              }
            };

            chart_newUser =c3.generate(c3Json);

          });

        }

        //template: '<div id="{{idchart}}">ciao<div id="chart3">cazzo</div></div>',
        //templateUrl: 'templates/directives/dir-graph-ts-line.html'
    };
    return directive;
};


/*

*/
