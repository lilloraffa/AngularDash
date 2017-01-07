/**
 * Dashboard 18App - Time Series Data Controllers
 */

/*
* TS New Users
*/
angular.module('RDash')
    .controller('Dash_18app_graph_ts_user_new_Ctrl', ['$scope', '$cookieStore', '$http', Dash_18app_graph_ts_user_new_Ctrl]);

function Dash_18app_graph_ts_user_new_Ctrl($scope, $cookieStore, $http) {
  //New Users Time Series
  $http.get('http://' + DATA_URL + '/getTS?kpi_name=ts_user_new').
    then(function(response) {
      //totalUsers = response.data;
      //alert(JSON.stringify(response.data));
      $scope.ts_user_new = [
        ['x'].concat(response.data.date),
        ['Nuovi Iscritti'].concat(response.data.kpi)
      ]

  });
}


/*
*  TS Validation Val per Channel
*/
angular.module('RDash')
    .controller('Dash_18app_graph_ts_valid_val_Ctrl', ['$scope', '$cookieStore', '$http', Dash_18app_graph_ts_valid_val_Ctrl]);

  function Dash_18app_graph_ts_valid_val_Ctrl($scope, $cookieStore, $http) {
  //New Users Time Series
  $http.get('http://' + DATA_URL + '/getTS?kpi_name=ts_valid_val_det&channel=ONLINE').
    then(function(responseOnline) {
      //totalUsers = response.data;
      //alert(JSON.stringify(response.data));
      $scope.ts_valid_val2= [
        ['x'].concat(responseOnline.data.date),
        ['Online'].concat(responseOnline.data.kpi)
      ]
      $http.get('http://' + DATA_URL + '/getTS?kpi_name=ts_valid_val_det&channel=FISICO').
        then(function(responseFisico) {
          //totalUsers = response.data;
          //alert(JSON.stringify(response.data

          $scope.ts_valid_val = [
            ['x'].concat(responseOnline.data.date),
            ['Online'].concat(responseOnline.data.kpi),
            ['Fisico'].concat(responseFisico.data.kpi),
          ]
      });

  });
/*
  $http.get('http://localhost:9000/getTS?kpi_name=ts_valid_val_det&channel=FISICO').
    then(function(response) {
      //totalUsers = response.data;
      //alert(JSON.stringify(response.data

      $scope.ts_user_new = [
        ['x'].concat(response.data.date),
        ['Nuovi Iscritti'].concat(response.data.kpi)
      ]



  });
  */
}
function dataViewBy(data){
  var a = [];
  for (var x in data) {
    if (data.hasOwnProperty(x)) {
      a.push([data[x].by, data[x].view.kpi]);
    }
  }
  return a;
}
/*
*  Donut Graph for Products
*/
angular.module('RDash')
    .controller('Dash_18app_graph_donut_prod_Ctrl', ['$scope', '$cookieStore', '$http', Dash_18app_graph_donut_prod_Ctrl]);

  function Dash_18app_graph_donut_prod_Ctrl($scope, $cookieStore, $http) {

  $http.get('http://' + DATA_URL + '/getViewHLByAmbito?kpi_name=ts_valid_val_det').
    then(function(response) {
      //alert(JSON.stringify(response.data));
      var data2Pass = dataViewBy(response.data);
      $scope.donut_prod = data2Pass;
      $scope.donut_prod_title = "Acq. per Prodotto";
  });
}

/*
*  Donut Graph for Shops
*/
angular.module('RDash')
    .controller('Dash_18app_graph_donut_shops_Ctrl', ['$scope', '$cookieStore', '$http', Dash_18app_graph_donut_shops_Ctrl]);

  function Dash_18app_graph_donut_shops_Ctrl($scope, $cookieStore, $http) {
  //$http.get('http://localhost:9000/getViewHLByAmbito?kpi_name=ts_valid_val_det').
  $http.get('http://' + DATA_URL + '/getViewHLByShop?kpi_name=ts_valid_val_det').
    then(function(response) {
      //alert(JSON.stringify(response.data));
      var data2Pass = dataViewBy(response.data);
      $scope.donut_shops = data2Pass;
      $scope.donut_shops_title = "Acq. per Negozio";

  });
}

function dataViewBy2(data, nameKpi){
  var a = [nameKpi];
  var x = ['x'];
  for (var i in data) {
    if (data.hasOwnProperty(i)) {
      x.push(data[i].by);
      a.push(data[i].view.kpi);
    }
  }
  return [x, a];
}
/*
*  Bar Aventi Diritto by Regioni e Province
*/
angular.module('RDash')
    .controller('Dash_18app_graph_bar_reg_aventidir_Ctrl', ['$scope', '$cookieStore', '$http', Dash_18app_graph_bar_reg_aventidir_Ctrl]);

  function Dash_18app_graph_bar_reg_aventidir_Ctrl($scope, $cookieStore, $http) {

  $http.get('http://' + DATA_URL + '/getViewHLByReg?kpi_name=ts_valid_val_det').
    then(function(response) {
      //alert(JSON.stringify(response.data));
      var data2Pass = dataViewBy2(response.data, '% 18enni');
      //alert(JSON.stringify(data2Pass));
      $scope.bar_reg_aventidir = data2Pass;

  });
}
angular.module('RDash')
    .controller('Dash_18app_graph_bar_prov_aventidir_Ctrl', ['$scope', '$cookieStore', '$http', Dash_18app_graph_bar_prov_aventidir_Ctrl]);

  function Dash_18app_graph_bar_prov_aventidir_Ctrl($scope, $cookieStore, $http) {

  $http.get('http://' + DATA_URL + '/getViewHLByProv?kpi_name=ts_valid_val_det').
    then(function(response) {
      //alert(JSON.stringify(response.data));
      var data2Pass = dataViewBy2(response.data, '% 18enni');
      //alert(JSON.stringify(data2Pass));
      $scope.bar_prov_aventidir = data2Pass;

  });
}
