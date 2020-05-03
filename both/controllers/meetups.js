MeetupsController = AppController.extend({
  waitOn: function() {
    return this.subscribe('meetups');
  },
  data: {
    items: Items.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  }
});

MeetupsController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
