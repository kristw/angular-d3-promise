angular-d3-promise
==========

Make d3 data functions use promises instead of callbacks

This library uses Angular's $q for the implementation of promises.

### Installation

```
bower install angular-d3-promise --save
```

or

```
npm install angular-d3-promise --save
```

This library can be imported using standard `<script>` as well as AMD (such as RequireJS).

Note: Since v1.0.0, the minified output was move from ```src/``` to ```dist/```. 

### Example Usage

1. Add "d3.promise" as the module dependency.
2. Inject service "d3Promise" into any scope you want to use.

```
angular.module('app', ['d3.promise'])
  .controller('mainCtrl', ['d3Promise', function(d3Promise){
    var promise = d3Promise.csv('test.csv');
    promise.then(function(data){}, function(error){});

    var promise = d3Promise.tsv('test.tsv');
    promise.then(function(data){}, function(error){});

    var promise = d3Promise.json('test.json')
    promise.then(function(data){}, function(error){});

    var promise = d3Promise.html('test.html')
    promise.then(function(data){}, function(error){});

    var promise = d3Promise.text('test.txt')
    promise.then(function(data){}, function(error){});

    var promise = d3Promise.xml('test.xml')
    promise.then(function(data){}, function(error){});
  }]);

```
