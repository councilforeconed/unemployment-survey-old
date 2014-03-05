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
        }
    });

    return SurveyCollection;
});
