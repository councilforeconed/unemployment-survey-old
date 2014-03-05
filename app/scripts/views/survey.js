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

        el: 'tbody.survey',

        events: {
            'click .remove-respondent': 'removeRespondent'
        },

        initialize: function () {
            this.listenTo(this.collection, 'add', this.render);
            this.listenTo(this.collection, 'remove', this.render);
        },

        render: function () {
            this.collection.each(function (respondent) {
              this.$el.append(respondent.view.render().el);
            }, this);
            return this;
        },

        removeRespondent: function (e) {
          var id = $(e.currentTarget).data('id');
          var model = this.collection.remove(id);
        }
    });

    return SurveyView;
});
