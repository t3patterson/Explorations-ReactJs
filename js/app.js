var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    React = require('react'),
    AddApp = require('./reactComponentMixin.jsx');

import {NotificationComponent} from './notification-system.js'
import {DatePickerComponent} from './datepicker.js'
import {SelectComponent} from './r-select.js'

var Router = Backbone.Router.extend({
    initialize: function() {
        Backbone.history.start()
    },

    routes: {
        'react-select': 'reactSelect',
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

    reactSelect: function(){
        var myOptions = [
            { value: 'tx', label: 'TX' },
            { value: 'ut', label: 'Utah' },
            { value: 'al', label: 'Alabama' },
            { value: 'ny', label: 'New York' },
            { value: 'or', label: 'Oregon' }    
        ];

        React.render(

            <SelectComponent options={myOptions} defaultVal='tx'/>,
            document.querySelector('.container')
        )
    }
})

export default Router

//Downed
//-------------
//react date-picker
//react-select (forms)
//react-notification

//Left to down
//--------------
//react data-table: http://facebook.github.io/fixed-data-table/
//google react maps: http://istarkov.github.io/google-map-react/map/main/
// 