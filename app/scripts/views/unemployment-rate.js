/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'numeral'
], function ($, _, Backbone, numeral) {
  'use strict';

  var UnemploymentRateView = Backbone.View.extend({
    
    el: '#unemployment-rate',
    
    initialize: function (collection) {
      this.collection = collection;
      this.collection.on('change add remove', function () {
        this.render();
      }, this);
    },
    
    render: function () {
      var unemploymentRate = this.collection.unemploymentRate();
      var percentageField = this.$('.unemployment-percentage');
      if (_.isUndefined(unemploymentRate)) {
        percentageField.html('--%');
      } else {
        var rate = numeral(unemploymentRate).format('0%');
        percentageField.html(rate);
      }
    }
    
  });

  return UnemploymentRateView;
});
