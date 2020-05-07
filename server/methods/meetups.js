Meteor.methods({
  'addMeetup': function (params) {
    Meetups.insert(params);
  }
});
