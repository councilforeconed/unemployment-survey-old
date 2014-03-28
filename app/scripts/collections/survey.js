/*global define*/

define([
  'underscore',
  'backbone',
  'models/respondent',
  'views/survey'
], function (_, Backbone, RespondentModel, SurveyView) {
  'use strict';

  var SurveyCollection = Backbone.Collection.extend({
    model: RespondentModel,

    initialize: function () {
      this.view = new SurveyView({
        collection: this
      });
    },
    
    laborForce: function () {
      var template = { 
        Employed: 0, 
        Unemployed: 0, 
        'Young or Institutionalized': 0
      };
      
      var statuses = _.countBy(this.models, function (respondent) {
        return respondent.get('employmentStatus');
      }, this);
      
      return _.extend(template, _.omit(statuses, 'undefined'));
    },
    
    unemploymentRate: function () {
      var laborForce = this.laborForce();
      var unemploymentRate = laborForce.Unemployed / (laborForce.Employed + laborForce.Unemployed);
      if (_.isNumber(unemploymentRate) && !_.isNaN(unemploymentRate)) {
        return unemploymentRate;
      }
    }
  });

  return SurveyCollection;
});
