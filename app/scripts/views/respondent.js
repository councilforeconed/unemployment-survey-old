/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var RespondentView = Backbone.View.extend({
        template: JST['app/scripts/templates/respondent.ejs'],

        tagName: 'tr',

        className: 'respondent',

        events: {
            'keyup .name-field': 'changeName',
            'change .card-number': 'changeCardNumber',
            'change .employment-status': 'changeEmploymentStatus'
        },

        initialize: function () {
            this.listenTo(this.model, 'remove', this.remove);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$('select').prop("selectedIndex", -1);
            return this;
        },

        changeName: function () {
          var name = this.$('.name-field').val();
          this.model.set('name', name);
        },

        changeCardNumber: function () {
          var card = this.$('.card-number').val();
          this.model.set('cardNumber', card);
        },

        changeEmploymentStatus: function () {
          var status = this.$('.employment-status').val();
          this.model.set('employmentStatus', status);
        }

    });

    return RespondentView;
});
