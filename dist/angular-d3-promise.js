// Define module using Universal Module Definition pattern
// https://github.com/umdjs/umd/blob/master/amdWeb.js

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // Support AMD. Register as an anonymous module.
    // EDIT: List all dependencies in AMD style
    define(['angular', 'd3'], factory);
  }
  else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    // EDIT: Pass dependencies to factory function
    module.exports = factory(require('angular'), require('d3'));
  }
  else {
    // No AMD. Set module as a global variable
    // EDIT: Pass dependencies to factory function
    root.d3.promise = factory(root.angular, root.d3);
  }
}(this,
//EDIT: The dependencies are passed to this function
function (angular, d3) {
//---------------------------------------------------
// BEGIN code for this module
//---------------------------------------------------

angular.module('d3.promise', [])
  .factory('d3Promise', ['$q', function($q){
    function promisify(caller, fn){
      return function(){
        var args = Array.prototype.slice.call(arguments);

        var deferred = $q.defer();

        var callback = function(error, data){
          if(error){
            deferred.reject(Error(error));
            return;
          }
          deferred.resolve(data);
        };
        fn.apply(caller, args.concat(callback));

        return deferred.promise;
      };
    }

    var module = {};

    ['csv', 'tsv', 'json', 'xml', 'text', 'html'].forEach(function(fnName){
      module[fnName] = promisify(d3, d3[fnName]);
    });

    d3.promise = module;

    return module;
  }]);

//---------------------------------------------------
// END code for this module
//---------------------------------------------------
}));

