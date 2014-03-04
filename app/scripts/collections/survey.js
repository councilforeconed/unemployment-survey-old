/*global define*/

define([
    'underscore',
    'backbone',
    'models/survey'
], function (_, Backbone, SurveyModel) {
    'use strict';

    var SurveyCollection = Backbone.Collection.extend({
        model: SurveyModel
    });

    return SurveyCollection;
});
