/* Global bll Ember */
'use strict';

bll.Router.map(function() {
  this.resource('bll', '/', function() {
    this.route('active');
    this.route('completed');
  })
});