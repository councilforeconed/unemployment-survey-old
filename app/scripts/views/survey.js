/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var SurveyView = Backbone.View.extend({
        template: JST['app/scripts/templates/survey.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.collection, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.collection.toJSON()));
        }
    });

    return SurveyView;
});
