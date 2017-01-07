/**
 * Dashboard 18App - Highlights
 */

angular.module('RDash')
    .controller('Dash_18app_viewhl_Ctrl', ['$scope', '$cookieStore', '$http', Dash_18app_viewhl_Ctrl]);

//Formatting function --> This should be put into an higher level scope of Angular
function displayNum(x, nThousands, nDigit){
  nThousands = typeof nThousands !== 'undefined' ? nThousands : 0;
  nDigit = typeof nDigit !== 'undefined' ? nDigit : 0;

  var units = ['', 'K', 'Mln', 'Mld'];
  var type = 0;
  if (x/1000000000>=1){
  	type=3;
  } else if (x/1000000>=1) {
  	type=2;
  } else if (x/1000>=1) {
  	type=1;
  }
  var roundTerm = Math.pow(10, nDigit);
  return Math.round(roundTerm * x / Math.pow(1000,(type-nThousands)))/roundTerm + units[type - nThousands];
}

function Dash_18app_viewhl_Ctrl($scope, $cookieStore, $http) {
  //TotalActiveUsers Cumulative
  //$scope.displayNum = displayNum;
  $http.get('http://' + DATA_URL + '/getViewHL?kpi_name=viewhl_tot_user_act').
    then(function(response) {
      //totalUsers = response.data;
      //alert(JSON.stringify(response.data));
      $scope.data_tot_user = response.data;
      $scope.viewhl_tot_user = displayNum(response.data.kpi, 0, 1);
      $scope.viewhl_tot_user_var_w = response.data.kpi/response.data.kpi_1w_ago -1;


  });
  //% Aventi Diritto
  $http.get('http://' + DATA_URL + '/getViewHLPop?kpi_name=ts_user_act_det').
    then(function(response) {
      //totalUsers = response.data;
      //alert(JSON.stringify(response.data));
      $scope.dataPercDiritto = response.data;
      $scope.viewhl_18enni_perc = response.data.kpi;
      $scope.viewhl_18enni_perc_var_w = response.data.kpi/response.data.kpi_1w_ago -1;

  });
  //Total Validation Online
  $http.get('http://' + DATA_URL + '/getViewHL?kpi_name=viewhl_tot_valid_val_det&channel=ONLINE').
    then(function(response) {
      //totalUsers = response.data;
      //alert(JSON.stringify(response.data));
      $scope.data_valid_val_online = response.data;
      $scope.viewhl_valid_val_online = displayNum(response.data.kpi, 0, 1);
      $scope.viewhl_valid_val_online_var_w = response.data.kpi/response.data.kpi_1w_ago -1;

  });
  //Total Validation Fisico
  $http.get('http://' + DATA_URL + '/getViewHL?kpi_name=viewhl_tot_valid_val_det&channel=FISICO').
    then(function(response) {
      //totalUsers = response.data;
      //alert(JSON.stringify(response.data));
      $scope.data_valid_val_fisico = response.data;
      $scope.viewhl_valid_val_fisico = displayNum(response.data.kpi, 0, 1);
      $scope.viewhl_valid_val_fisico_var_w = response.data.kpi/response.data.kpi_1w_ago -1;
  });

  //Total Number of Online Shops
  $http.get('http://' + DATA_URL + '/getLastTot?kpi_name=lastval_shop_num&channel=ONLINE').
    then(function(response) {
      //totalUsers = response.data;
      //alert(JSON.stringify(response.data));
      $scope.dataTotShopOnline = response.data;

  });
  //Total Number of Shops
  $http.get('http://' + DATA_URL + '/getLastTot?kpi_name=lastval_shop_num').
    then(function(response) {
      //totalUsers = response.data;
      //alert(JSON.stringify(response.data));
      $scope.dataTotShop = response.data;
  });

  $scope.$watchGroup(['data_valid_val_online', 'data_valid_val_fisico', 'data_tot_user'], function(newVal, oldVal){
    $scope.viewhl_plafon_perc = (newVal[0].kpi+newVal[1].kpi)/(newVal[2].kpi*500);

    var viewhl_plafon_perc_1w = $scope.viewhl_plafon_perc = (newVal[0].kpi_1w_ago+newVal[1].kpi_1w_ago)/(newVal[2].kpi_1w_ago*500);
    $scope.viewhl_plafon_perc_1w = $scope.viewhl_plafon_perc / viewhl_plafon_perc_1w - 1;
  })

}
