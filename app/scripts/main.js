/* global UnemploymentSurvey, Backbone */

(function (UnemploymentSurvey) {
  'use strict';

  var survey = new UnemploymentSurvey.Survey([{ name: 'Yourself' }]);

  var surveyView = new UnemploymentSurvey.SurveyView({
    el: '#unemployment-survey',
    collection: survey
  });
  surveyView.render();

})(UnemploymentSurvey);
