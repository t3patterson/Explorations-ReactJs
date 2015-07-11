var React = require('react');
var NotificationSystem = require('react-notification-system');

export var NotificationComponent = React.createClass({
  _notificationSystem: null,

  _addNotification: function(event) {
    event.preventDefault();
    this._notificationSystem.addNotification({
      message: 'Notification message',
      level: 'success'
    });
  },

  componentDidMount: function() {
    this._notificationSystem = this.refs.notificationSystem;
  },

  render: function()  {
    return (
      <div>
        <button onClick={this._addNotification} className="notification">Add notification</button>
        <NotificationSystem ref="notificationSystem" />
      </div>
      );
  }
});