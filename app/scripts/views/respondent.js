/* global UnemploymentSurvey, Backbone */

(function (UnemploymentSurvey) {
  'use strict';


  UnemploymentSurvey.RespondentView = Backbone.View.extend({

    initialize: function () {

      if (!this.model) {
        throw new Error('You must provide a model.');
      }

      this.listenTo(this.model, 'remove', this.remove);
    },

    className: 'survey-respondent row',

    render: function () {
      this.$el.html(
                    '<div class="col-md-4 respondent-information">' + this.model.get('name') + '</div>' +
                    '<div class="col-md-2 respondent-information">Card Number</div>' +
                    '<div class="col-md-6 respondent-information">Employment Status</div>'
                    );

      return this;
    }
  });

})(UnemploymentSurvey);
