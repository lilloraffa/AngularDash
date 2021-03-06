/**
 * Widget Directive
 */

angular
    .module('RDash')
    .directive('graphTsLine', graphTsLine);

function graphTsLine() {
    var directive = {
        //transclude: true,
        scope: {
          idchart: '@',
          chartData: '='
        },
        restrict: 'E',
        replace: false,
        //template: '<div id="chart2"></div>',
        link: function (scope, element, attrs) {

          scope.$watch('chartData', function (newVal, oldVal) {
            //alert(newVal);
            chart_newUser =c3.generate({

              bindto: '#'+attrs.idchart,
              //bindto: '#aaa1#abcd',

              //bindto: '#'+attrs.idchart,
              data: {
                  x: 'x',
                  xFormat: '%Y-%m-%d', // 'xFormat' can be used as custom format of 'x'
                  //columns: scope.chartData
                  columns: newVal
                  //[

                    //['x', '3/11/2016','4/11/2016','8/11/2016','9/11/2016','10/11/2016','11/11/2016','12/11/2016','14/11/2016','15/11/2016','16/11/2016','17/11/2016','18/11/2016','21/11/2016','22/11/2016','23/11/2016','24/11/2016','25/11/2016','28/11/2016','29/11/2016','30/11/2016','1/12/2016','2/12/2016','5/12/2016','7/12/2016','13/12/2016','14/12/2016'],
                    //['Nuovi 18enni', 7913,8947,12985,2971,2802,2801,3803,2766,1701,2403,2664,1663,5514,1623,1497,1416,2183,6050,3391,3507,3520,3653,6607,7458,16748,2730]
                  //]
              },

              axis: {
                  x: {
                      type: 'timeseries',
                      tick: {
                          format: '%d/%m/%Y',
                          rotate: -25,
                          fit: true
                      },
                      heigh: 100
                  }
              },

              padding: {
                bottom: 35
              }
            });

          });

        }

        //template: '<div id="{{idchart}}">ciao<div id="chart3">cazzo</div></div>',
        //templateUrl: 'templates/directives/dir-graph-ts-line.html'
    };
    return directive;
};


/*

*/
