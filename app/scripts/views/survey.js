/* global UnemploymentSurvey, Backbone */

(function (UnemploymentSurvey) {
  'use strict';

  UnemploymentSurvey.SurveyView = Backbone.View.extend({

    //TODO: Set up event listeners to rerender the survey whenever the data change.

    className: 'survey-worksheet',

    render: function () {
      var view = this;

      this.$el.append('<div class="row table-header-row">' +
                        '<div class="col-md-4 table-header">Name of Person</div>' +
                        '<div class="col-md-2 table-header">Card Number</div>' +
                        '<div class="col-md-6 table-header">Employment Status</div>' +
                      '</row>');

      this.collection.each(function (respondent) {

        var respondentView = new UnemploymentSurvey.RespondentView({
          model: respondent
        });

        view.$el.append(respondentView.render().el);

      }, this);

      return this;
    }
  });

})(UnemploymentSurvey);
