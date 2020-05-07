MyMeetupsController = AppController.extend({
  waitOn: function() {
    return this.subscribe('myMeetups');
  },

  onAfterAction: function () {
    Meta.setTitle('My Meetups');
  }
});

MyMeetupsController.helpers({
  'myMeetups': function() {
    return Meetups.find({user: Meteor.userId()})
  }
});

MyMeetupsController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
