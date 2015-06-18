var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    React = require('react'),
    AddApp = require('./reactComponentMixin.jsx');



var Router = Backbone.Router.extend({
    initialize: function() {
        Backbone.history.start()
    },
    routes: {
        '*default': 'home'
    },

    home: function() { 

         var theMsg= "these are props passed in";
         

         React.render(
            <AddApp />,
            document.querySelector('.container')
        )
    }
})

export default Router