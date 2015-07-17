var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    React = require('react'),
    AddApp = require('./reactComponentMixin.jsx');

import {HomePage} from './home-component.js'
import {NotificationComponent} from './notification-system.js'
import {DatePickerComponent} from './datepicker.js'
import {SelectComponent} from './r-select.js'
import {MyDataTable} from './fixed-data-table.js'
import {GoogleMapMarked} from './google-map.js'
import {WaypointExample} from './waypoints.js'
import {SortableArea} from './sortable.js'
import {FullPageView} from './parent-child-relations.js'


var Router = Backbone.Router.extend({
    initialize: function() {
        Backbone.history.start()
    },

    routes: {
        'sandbox/parent-child':'sandbox1',
        'infinte-scroll': 'infiniteScroll',
        'sortable': 'sortable',
        'waypoints': 'waypoints',
        'google-maps': 'googleMaps',
        'fixed-data-table': 'fixedTable',
        'react-select': 'reactSelect',
        'react-date-picker': 'reactDatepicker',
        'react-notification-system': 'reactNotification',
        '*default': 'home'
    },

    home: function() { 
        window.location.hash = ""
         var theMsg= "these are props passed in";
         

         React.render(
            <HomePage />,
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
    },

    fixedTable: function(){
        React.render(
            <MyDataTable/>,
            document.querySelector('.container')
            )

        var getUserGHProfile = function(user){
            console.log(`https://api.github.com/users/${user}`)
            return $.getJSON(`https://api.github.com/users/${user}`)
        }
        var users = [
            'gaearon',
            'cjros',
            't3patterson',
            'istarkov',
            'matthiasak'
        ]

        var getRequestsBatch = users.map(function(user){
            return getUserGHProfile(user)
        })

        $.when.apply($,getRequestsBatch)
            .then(function(){
                var slice = Array.prototype.slice;
                console.log(arguments);
                var argsArray = slice.call(arguments);

                var userDataProps = argsArray.map(function(userData){
                    return [
                        userData[0].avatar_url,
                        userData[0].login,
                        userData[0].name,
                        userData[0].location,
                        userData[0].followers,
                        userData[0].following
                    ]
                })

                console.log(userDataProps)

                React.render(   
                    <MyDataTable rows={userDataProps} />,
                    document.querySelector('.container')
                    )
            })
    },

    googleMaps: function(){
        React.render(
            <GoogleMapMarked/>,
            document.querySelector('.container')
            )
    },

    waypoints: function(){
        React.render(
            <WaypointExample/>,
            document.querySelector('.container')
            )
    },

    sortable: function(){

        var draggables = [
            'apple',
            'banana',
            'peach',
            'raspberry',
            'plum',
            'kiwi'
        ];

        React.render(
            <SortableArea list={draggables}/>,
            document.querySelector('.container')
        )
    },

    infinteScroll: function(){
        console.log('infinite scroll!');
    },

    sandbox1: function(){
        React.render(
            <FullPageView/>,
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