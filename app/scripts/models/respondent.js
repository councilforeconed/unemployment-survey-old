/*global define*/

define([
    'underscore',
    'backbone',
    'views/respondent'
], function (_, Backbone, RespondentView) {
    'use strict';

    var RespondentModel = Backbone.Model.extend({
        initialize: function() {
          this.view = new RespondentView({ model: this })
        },

        defaults: {
          name: 'New Respondent'
        },

        toJSON: function () {
          var json = _.clone(this.attributes);
          json.id = this.cid;
          return json;
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return RespondentModel;
});
