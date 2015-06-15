var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    React = require('react'),
    R = require('./reactComponents.jsx')

var Router = Backbone.Router.extend({
    initialize() {
        console.log(React)
        Backbone.history.start()
    },
    routes: {
        '*default': 'home'
    },

    home() {     
        var myComponent = React.render(
            < R.Message />,  document.body, function(){console.log('++ post render')} 
        )


        setTimeout(function(){
            console.log('heeeyoooh!')
            console.log(R.Message)
            
            myComponent.setState({
                isVisible: false
            })
        }, 5000)
    }
})

export default Router