/* global UnemploymentSurvey, Backbone */

(function (UnemploymentSurvey) {
  'use strict';


  UnemploymentSurvey.RespondentView = Backbone.View.extend({
    className: 'survey-respondent',

    render: function () {
      this.$el.html('<div class="row respondent-information-row">' +
                        '<div class="col-md-4 respondent-information">' + this.model.get('name') + '</div>' +
                        '<div class="col-md-2 respondent-information">Card Number</div>' +
                        '<div class="col-md-6 respondent-information">Employment Status</div>' +
                      '</row>');

      return this;
    }
  });

})(UnemploymentSurvey);
