var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    React = require('react'),
    AddApp = require('./reactComponentMixin.jsx');

import NotificationComponent from './notification-system.js'
import {DatePickerComponent} from './datepicker.js'


var Router = Backbone.Router.extend({
    initialize: function() {
        Backbone.history.start()
    },
    routes: {
        'react-datepicker': 'reactDatepicker',
        'react-notification-system': 'reactNotification',
        '*default': 'home'
    },

    home: function() { 
        window.location.hash = ""
         var theMsg= "these are props passed in";
         

         React.render(
            <AddApp />,
            document.querySelector('.container')
        )
    },

    reactNotification: function(){
        console.log('hiiiie')
        React.render(
            <NotificationComponent/>,
            document.querySelector('.container')
        )
    },

    reactDatepicker: function(){
        React.render(
            <DatePickerComponent/>,
            document.querySelector('.container')
            )
    },
})

export default Router