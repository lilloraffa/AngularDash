/**
 * Widget Directive
 */

angular
    .module('RDash')
    .directive('graphBarOr', graphBarOr);

function graphBarOr() {
    var directive = {
        //transclude: true,
        scope: {
          idchart: '@',
          chartData: '=',
          sizeHeight: '=',
          sizeWidth: '=',
        },
        restrict: 'E',
        replace: false,
        //template: '<div id="chart2"></div>',
        link: function (scope, element, attrs) {

          scope.$watch('chartData', function (newVal, oldVal) {
            //alert(newVal);
            var c3Json = {

              bindto: '#'+attrs.idchart,
              size: {
                height: 100
                //width: 480
              },
              data: {
                  x: 'x',
                  columns: newVal,
                  /*
                  columns: [
                    ['data1', 30],
                    ['data2', 130]
                  ],
                  */
                  type: 'bar'

              },
              axis: {
                rotated: true,         // horizontal bar chart
                x: {
                    type: 'category'   // this needed to load string x value
                }
              },

              padding: {
                bottom: 35
              }
            };
            var a ={};
            if (typeof scope.sizeHeight != 'undefined') {
              a.height = scope.sizeHeight;
            }
            if (typeof scope.sizeWidth != 'undefined') {
              a.width = scope.sizeWidth;
            }
            if(Object.keys(a).length>0){
              c3Json.size = a;
            }
            //alert(JSON.stringify(c3Json));

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
