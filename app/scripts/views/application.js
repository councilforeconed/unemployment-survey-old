/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'collections/survey',
  'models/respondent'
], function ($, _, Backbone, JST, SurveyCollection) {
  'use strict';

  var ApplicationView = Backbone.View.extend({
    template: JST['app/scripts/templates/application.ejs'],

    el: '#application',

    events: {
      'click #add-respondent': 'addRespondent'
    },

    initialize: function () {
      this.render();
      this.collection = new SurveyCollection({ name: 'Yourself' });
      this.collection.view.render();
    },

    render: function () {
      this.$el.html(this.template);
      return this;
    },

    addRespondent: function (e) {
      e.preventDefault();
      this.collection.add({});
    }
  });

  return ApplicationView;
});
