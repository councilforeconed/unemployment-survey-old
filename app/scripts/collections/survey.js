/*global define*/

define([
    'underscore',
    'backbone',
    'models/respondent'
], function (_, Backbone, SurveyModel) {
    'use strict';

    var SurveyCollection = Backbone.Collection.extend({
        model: RespondentModel
    });

    return SurveyCollection;
});
